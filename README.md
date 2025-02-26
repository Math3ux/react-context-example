# React Context Alternador de Tema

Uma aplicação React simples que demonstra o uso da API Context do React para gerenciamento de temas. Este projeto implementa um alternador de tema claro/escuro usando a API Context do React e TypeScript.

## Funcionalidades

- Alternância entre temas claro e escuro
- Suporte a TypeScript
- Implementação da API Context do React
- Vite para desenvolvimento e build rápidos

## Tecnologias

- React 19
- TypeScript
- Vite
- ESLint

## Começando

### Pré-requisitos

- Node.js (recomendada a versão LTS mais recente)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Math3ux/react-context-example.git
cd react-context
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## Estrutura do Projeto

```
src/
├── Contexts/
│   └── ThemeContext.ts    # Definição do contexto de tema
├── Pages/
│   └── MainPage.tsx       # Página de exemplo usando o tema
├── App.tsx                # Aplicação principal com provedor de tema
└── main.tsx               # Ponto de entrada
```

## Como Funciona

A aplicação usa a API Context do React para gerenciar o estado do tema globalmente:

1. `ThemeContext.ts` define os tipos de tema e o contexto
2. `App.tsx` mantém o estado do tema e fornece o contexto
3. Componentes como `MainPage.tsx` consomem o contexto para aplicar estilos temáticos

## Licença

MIT