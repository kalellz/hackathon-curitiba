"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT =
  "Você é um consultor experiente em energia solar para escolas públicas. Use linguagem clara, proponha etapas práticas, destaque economia, payback, impacto ambiental e cuidados de manutenção. Sempre considere incentivos e parcerias possíveis.";

export default function ChatSolar() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Sou seu consultor virtual de energia solar. Conte sobre a realidade da escola ou mande a primeira pergunta e eu ajudo com soluções sob medida.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const prompt = useMemo(() => {
    const history = messages
      .map((message) => `${message.role === "assistant" ? "Consultor" : "Gestor"}: ${message.content}`)
      .join("\n");

    return `${SYSTEM_PROMPT}\n\n${history}\nGestor: ${input.trim()}\nConsultor:`;
  }, [messages, input]);

  const handleSend = async () => {
    const question = input.trim();
    if (!question) return;

    const nextMessages = [...messages, { role: "user" as const, content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat-solar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = (await response.json()) as { reply?: string };
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.reply ?? "Não consegui formular uma resposta agora. Tente novamente mais tarde.",
        },
      ]);
    } catch (error) {
      console.error("Erro no chat:", error);
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "Houve um problema ao consultar a IA. Verifique se o servidor Ollama está em execução ou tente novamente em instantes.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-emerald-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-md">
      <div className="mb-4 space-y-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Chat com especialista IA
        </span>
        <h2 className="text-2xl font-semibold text-emerald-900">Converse com o consultor solar</h2>
        <p className="text-sm text-zinc-600">
          Pergunte sobre dimensionamento, custos, payback, financiamento e manutenção. Receba orientações alinhadas à
          realidade das escolas.
        </p>
      </div>

      <div className="mb-4 max-h-[320px] space-y-3 overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <Card
            key={index}
            className={`p-3 text-sm transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer ${
              message.role === "assistant"
                ? "border-emerald-200 bg-emerald-50/80 hover:border-emerald-300"
                : "border-border hover:border-emerald-300"
            }`}
          >
            <p className="font-semibold text-emerald-800">
              {message.role === "assistant" ? "Consultor" : "Gestor"}
            </p>
            <p className="text-zinc-700 whitespace-pre-wrap">{message.content}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {!loading && (
          <Textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ex.: Temos 600 alunos, conta mensal de R$ 14 mil. Como dimensionar o sistema? Quais incentivos posso buscar?"
            className="min-h-[120px] transition-colors duration-200 focus:border-emerald-400 focus:ring-emerald-300"
            disabled={loading}
          />
        )}

        <Button
          onClick={handleSend}
          disabled={loading}
          className="w-full sm:w-auto cursor-pointer transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Enviar pergunta"}
        </Button>
      </div>
    </section>
  );
}


