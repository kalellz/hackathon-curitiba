import { NextRequest, NextResponse } from "next/server";

const HF_MODEL = process.env.HF_MODEL ?? "mistralai/Mixtral-8x7B-Instruct";
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "qwen2.5:0.5b";
const OLLAMA_HOST = process.env.OLLAMA_HOST ?? "http://localhost:11434";

type HuggingFaceResponse = { generated_text: string }[] | { error: string };

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt inválido." }, { status: 400 });
    }

    // 1) Tenta consultar o Ollama local
    try {
      const ollamaResponse = await fetch(`${OLLAMA_HOST}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          prompt:
            "Você é um assistente técnico especializado em gestão energética e eficiência para escolas públicas, sistema Geocompasso de Gestão Energética analisa dados de consumo elétrico, custo anual, potência instalada e potencial solar de escolas. Seu papel é interpretar os dados fornecidos (por exemplo, consumo médio mensal em kWh, custo anual em R$, área disponível para painéis solares, número de alunos e equipamentos elétricos) e gerar insights claros, quantitativos e práticos. Com base nesses dados, você deve fornecer recomendações específicas para melhorar a eficiência energética, reduzir custos e implementar soluções de energia solar. Sempre que possível, inclua cálculos numéricos, percentuais de economia e sugestões detalhadas de ações a serem tomadas pelas escolas para otimizar seu consumo energético e integrar energia solar de forma eficaz. Responda apenas questões que tenham alguma relação com esse tema. \n\nUsuário: " +
            prompt,
          stream: false,
          options: {
            temperature: 0.4,
            top_p: 0.9,
            repeat_penalty: 1.1,
          },
        }),
      });

      if (ollamaResponse.ok) {
        const data = await ollamaResponse.json();
        if (
          typeof data?.response === "string" &&
          data.response.trim().length > 0
        ) {
          return NextResponse.json({ reply: data.response.trim() });
        }
        console.warn("Resposta inesperada do Ollama:", data);
      } else {
        console.warn("Falha ao consultar Ollama:", await ollamaResponse.text());
      }
    } catch (error) {
      console.warn("Erro ao consultar Ollama:", error);
    }

    // 2) Fallback para Hugging Face se configurado
    if (HF_API_KEY) {
      const response = await fetch(
        `https://api-inference.huggingface.co/models/${HF_MODEL}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              temperature: 0.3,
              top_p: 0.9,
              repetition_penalty: 1.1,
            },
          }),
        }
      );

      if (response.ok) {
        const data = (await response.json()) as HuggingFaceResponse;
        if (Array.isArray(data) && data[0]?.generated_text) {
          return NextResponse.json({ reply: data[0].generated_text.trim() });
        }
        console.error("Resposta inesperada da Hugging Face:", data);
      } else {
        console.error("Erro na Hugging Face API:", await response.text());
      }
    }

    // 3) Nenhuma opção disponível
    return NextResponse.json(
      {
        reply:
          "Não foi possível consultar a IA. Verifique se o serviço Ollama está ativo (http://localhost:11434) ou configure a variável de ambiente HUGGINGFACE_API_KEY.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no chat-solar:", error);
    return NextResponse.json(
      {
        reply:
          "Ocorreu um problema ao processar sua solicitação. Tente novamente mais tarde.",
      },
      { status: 200 }
    );
  }
}
