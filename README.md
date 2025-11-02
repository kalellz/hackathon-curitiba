# Painel Inteligente de Escolas

Esta plataforma mostra o potencial de energia solar de escolas públicas, estimando payback, economia e impacto ambiental com apoio de IA. O projeto reune mapa, simulador interativo e chatbot consultivo, ajudando gestores a priorizar investimentos em geração fotovoltaica.

## Principais recursos

- **Mapa interativo** com dados reais e estimados de consumo, custos e potencial solar. Escolas do Paraná foram adicionadas com base no portal [consultaescolas.pr.gov.br](https://www.consultaescolas.pr.gov.br/).
- **Simulação IA**: informa gasto mensal e número de alunos e a IA estima investimento, economia, payback, CO2 evitado, árvores e carros equivalentes.
- **Insights detalhados**: ao clicar na escola, abre-se um modal com estimativas dinâmicas geradas pelo modelo treinado sobre o dataset.
- **Chat consultivo**: especialista virtual (rodando via [Ollama](https://ollama.com/), com fallback opcional para Hugging Face) responde perguntas sobre implantação e eficiencia energética.

## Arquitetura

- **Next.js 14 App Router + TypeScript**
- **Tailwind CSS / shadcn UI** para componentes reutilizáveis
- **Leaflet + React Leaflet** para o mapa
- **Modelo de IA local** (Ollama) treinado com os dados das escolas para projetar payback, economia e CO2
- **Fallback opcional** via Hugging Face Inference API

## Pré-requisitos

1. **Node.js** = 18
2. **Ollama** instalado e ativo (`ollama serve`)
   - Puxe um modelo adequado, ex.: `ollama pull mistral`
   - Variáveis opcionais: `OLLAMA_MODEL` e `OLLAMA_HOST`
3. Opcional: chave da Hugging Face (`HUGGINGFACE_API_KEY`) para fallback
4. Preencha `.env.local` (crie se necessário):
   ```env
   OLLAMA_MODEL=mistral
   OLLAMA_HOST=http://localhost:11434
   # HUGGINGFACE_API_KEY=seu_token
   # HF_MODEL=mistralai/Mixtral-8x7B-Instruct
   ```

## Instalação e execução

```bash
cd app
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura das abas

- **Mapa**: visualização das escolas com tooltip e modal detalhado.
- **Simulação IA**: formulário e painel com resultados preditivos.
- **Chat**: conversa com o consultor virtual para dúvidas estrat�gicas.

## Scripts principais

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de produção
- `npm start` - servidor de produção

## Dados

- Os registros base estão em `src/data/escolas.ts` (inclui escolas de SP e PR).
- Tipos de dados em `src/data/escola.ts`.
- Estimativas são recalculadas em tempo real por `src/lib/energy-model.ts`.

## API interna

- `POST /api/chat-solar`
  - Tenta responder com Ollama (`OLLAMA_MODEL`).
  - Se indisponível, busca resposta na Hugging Face (se configurada).

### Exemplo de payload
```json
{
  "prompt": "Temos conta de R$ 12 mil por mês e 800 alunos. Como dimensionar?"
}
```

## Customização

- Ajuste cores/layout via `src/app/globals.css` e componentes em `src/components/ui/*`.
- Adicione novas escolas atualizando `src/data/escolas.ts`.
- Treinamento do modelo ocorre automaticamente em `page.tsx` com base no dataset.

## Contribuição

1. Faça um fork
2. Crie uma branch: `git checkout -b feature/nova-ideia`
3. Submeta um PR descrevendo a motivação

## Licença

Projeto para fins educativos e adapte conforme a necessidade da sua rede de ensino.