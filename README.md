<h1 align="center">Portfólio · Pedro Eduardo</h1>

<p align="center">
  Site pessoal com meus projetos, tecnologias e contatos, construído com Astro e componentes React interativos.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
</p>

## 📄 Seções

- **Início:** apresentação com texto animado, habilidades e uma faixa animada com as tecnologias que uso.
- **Projetos:** cards com prints e um modal com o estudo de caso de cada projeto: problema, solução, decisões técnicas e resultado.
- **Serviços:** pacotes para pequenos negócios, com botão que abre o WhatsApp já com a mensagem pronta.
- **Experiência:** linha do tempo com experiência profissional e formação.
- **Sobre:** trajetória, contatos e download do currículo.
- **Contato:** formas de falar comigo.

## 🧩 Decisões técnicas

- **Astro com ilhas React:** a página é gerada como HTML estático e só os componentes interativos (texto animado, faixa de logos, habilidades) carregam JavaScript no navegador. O resultado é um site leve e rápido.
- **Framer Motion** para as animações dos componentes React.
- **Imagens otimizadas** com o componente `Image` do `astro:assets`.
- **Verificação de tipos no build:** `npm run build` roda `astro check` antes de gerar o site, então erro de TypeScript não chega à produção.
- **Prévia ao compartilhar:** tags Open Graph com imagem própria, usando o domínio de produção que a Vercel informa no build.
- **Deploy na Vercel** com o adaptador `@astrojs/vercel`.

## 📁 Estrutura

```
src/
├── pages/index.astro     # página única que monta as seções
├── layouts/              # layout base (metadados, fontes, tema)
├── components/           # seções: Hero, Projects, Services, Experience, About, Contact
├── react/                # componentes interativos: AnimatedText, LogoLoop, Abilities
├── assets/               # prints dos projetos e foto
└── styles/global.css
public/
├── svg/                  # ícones das tecnologias
└── docs/                 # currículo em PDF
```

## 🚀 Como rodar localmente

```bash
git clone https://github.com/devpedroeduardo/my-portfolio.git
cd my-portfolio
npm install
npm run dev        # http://localhost:4321
```

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | verifica os tipos e gera a versão de produção |
| `npm run preview` | serve a build localmente |

## 👨‍💻 Autor

**Pedro Eduardo** · [LinkedIn](https://www.linkedin.com/in/devpedroeduardo/) · [GitHub](https://github.com/devpedroeduardo)
