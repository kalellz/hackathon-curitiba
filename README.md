# Geocompasso Energia � Painel Inteligente de Escolas

Esta plataforma mostra o potencial de energia solar de escolas p�blicas, estimando payback, economia e impacto ambiental com apoio de IA. O projeto re�ne mapa, simulador interativo e chatbot consultivo, ajudando gestores a priorizar investimentos em gera��o fotovoltaica.

## Principais recursos

- **Mapa interativo** com dados reais e estimados de consumo, custos e potencial solar. Escolas do Paran� foram adicionadas com base no portal [consultaescolas.pr.gov.br](https://www.consultaescolas.pr.gov.br/).
- **Simula��o IA**: informa gasto mensal e n�mero de alunos e a IA estima investimento, economia, payback, CO2 evitado, �rvores e carros equivalentes.
- **Insights detalhados**: ao clicar na escola, abre-se um modal com estimativas din�micas geradas pelo modelo treinado sobre o dataset.
- **Chat consultivo**: especialista virtual (rodando via [Ollama](https://ollama.com/), com fallback opcional para Hugging Face) responde perguntas sobre implanta��o e efici�ncia energ�tica.

## Arquitetura

- **Next.js 14 App Router + TypeScript**
- **Tailwind CSS / shadcn UI** para componentes reutiliz�veis
- **Leaflet + React Leaflet** para o mapa
- **Modelo de IA local** (Ollama) treinado com os dados das escolas para projetar payback, economia e CO2
- **Fallback opcional** via Hugging Face Inference API

## Pr�-requisitos

1. **Node.js** = 18
2. **Ollama** instalado e ativo (`ollama serve`)
   - Puxe um modelo adequado, ex.: `ollama pull mistral`
   - Vari�veis opcionais: `OLLAMA_MODEL` e `OLLAMA_HOST`
3. Opcional: chave da Hugging Face (`HUGGINGFACE_API_KEY`) para fallback
4. Preencha `.env.local` (crie se necess�rio):
   ```env
   OLLAMA_MODEL=mistral
   OLLAMA_HOST=http://localhost:11434
   # HUGGINGFACE_API_KEY=seu_token
   # HF_MODEL=mistralai/Mixtral-8x7B-Instruct
   ```

## Instala��o e execu��o

```bash
cd app
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura das abas

- **Mapa**: visualiza��o das escolas com tooltip e modal detalhado.
- **Simula��o IA**: formul�rio e painel com resultados preditivos.
- **Chat**: conversa com o consultor virtual para d�vidas estrat�gicas.

## Scripts principais

- `npm run dev` � ambiente de desenvolvimento
- `npm run build` � build de produ��o
- `npm start` � servidor de produ��o

## Dados

- Os registros base est�o em `src/data/escolas.ts` (inclui escolas de SP e PR).
- Tipos de dados em `src/data/escola.ts`.
- Estimativas s�o recalculadas em tempo real por `src/lib/energy-model.ts`.

## API interna

- `POST /api/chat-solar`
  - Tenta responder com Ollama (`OLLAMA_MODEL`).
  - Se indispon�vel, busca resposta na Hugging Face (se configurada).

### Exemplo de payload
```json
{
  "prompt": "Temos conta de R$ 12 mil por m�s e 800 alunos. Como dimensionar?"
}
```

## Customiza��o

- Ajuste cores/layout via `src/app/globals.css` e componentes em `src/components/ui/*`.
- Adicione novas escolas atualizando `src/data/escolas.ts`.
- Treinamento do modelo ocorre automaticamente em `page.tsx` com base no dataset.

## Contribui��o

1. Fa�a um fork
2. Crie uma branch: `git checkout -b feature/nova-ideia`
3. Submeta um PR descrevendo a motiva��o

## Licen�a

Projeto para fins educativos � adapte conforme a necessidade da sua rede de ensino.