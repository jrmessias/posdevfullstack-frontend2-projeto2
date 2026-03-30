# Movies - Busca de Filmes

Aplicação React para busca de filmes utilizando a API TMDB (The Movie Database).

## Tecnologias

- **React** 19.2.4
- **React Router** 7.13.2
- **Axios** 1.14.0
- **React Icons** 5.6.0

## Funcionalidades

- Busca de filmes por termo
- Exibição de cards com poster, título e nota
- Modal com detalhes do filme (sinopse, data de lançamento, nota)
- Loading state durante carregamento
- Layout responsivo
- Tratamento de erros

## Estrutura do Projeto

```
src/
├── api/
│   └── Config.js          # Configuração da API TMDB
├── components/
│   ├── Container.js       # Container principal
│   ├── Form.js            # Formulário de busca
│   ├── Header.js          # Cabeçalho com logo e busca
│   ├── Item.js            # Página de resultados
│   ├── Loader.js          # Indicador de carregamento
│   ├── Movies.js          # Grid de filmes + modal
│   ├── NotFound.js        # Página 404
│   └── PoweredBy.js       # Créditos TMDB
├── context/
│   └── MovieContext.js    # Context API para filmes
├── App.js                 # Componente principal com rotas
├── App.css                # Estilos globais
├── index.js               # Entry point
└── index.css              # Estilos base
```

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

A aplicação inicia em `http://localhost:3000`

## API

Utiliza a [TMDB API v3](https://developer.themoviedb.org/docs) para buscar filmes.

**Endpoints utilizados:**
- `/search/movie` - Busca filmes por termo

## Scripts Disponíveis

| Comando       | Descrição                    |
|---------------|------------------------------|
| `npm start`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção      |
| `npm test`    | Executa testes               |
| `npm run eject` | Ejeta configuração do webpack |

## Build

```bash
npm run build
```

O build será gerado na pasta `build/`
