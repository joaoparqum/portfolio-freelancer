import vistasExplodidas from "public/images/vistas.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import gringaEnglish from "public/images/gringa.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import marcacao from "public/images/marcacao.jpg";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import aeroportoVoo from "public/images/voos.png";

export const products = [
  {
    href: "https://front-vistas-test.vercel.app/",
    title: "Vistas Explodidas",
    description:
      "Vistas Explodidas é uma plataforma intuitiva para funcionários da empresa acessarem e compartilharem documentos importantes.",
    thumbnail: vistasExplodidas,
    images: [vistasExplodidas, sidefolioAceternity2],
    stack: ["Vuejs", "Ant-Design", "Vuex", "Spring Boot", "PostgreSQL", "NGINX", "Docker"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://lp.gringaenglish.com/",
    title: "Gringa English - REYO",
    description:
      "Web plataforma com o intuito de oferecer aulas para aprender inglês usando IA.",
    thumbnail: gringaEnglish,
    images: [gringaEnglish, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss", "Shadcn", "SupaBase", "TypeScript"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Marcação - REYO",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: marcacao,
    images: [marcacao, sidefolioMoonbeam2],
    stack: ["Reactjs", "Laravel", "Docker", "Clean Code", "SOLID"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Gestão de Aeroporto",
    description:
      "Um sistema de gerenciamento para aeroporto mostrando os voos com suas propriedades.",
    thumbnail: aeroportoVoo,
    images: [aeroportoVoo],
    stack: ["Vuejs", "Ant-Design", "Vuex", "Nestjs", "PostgreSQL"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
