import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋🏾</span>
      <Heading className=" font-black">Olá! Eu sou João Paulo Arquim</Heading>
      <Paragraph className="text-neutral-400 max-w-xl mt-4">
        Eu sou um desenvolvedor full-stack que gosta de{" "}
        <Highlight>construir softwares</Highlight> e aplicativos web como forma de diversão
      </Paragraph>
      <Paragraph className="text-neutral-400 max-w-xl mt-4">
        Eu sou um engenheiro de software com{" "}
        <Highlight>3 anos de experiência</Highlight> que gosta de um bom {" "}<Highlight>Nu Metal🎸</Highlight>, {" "}<Highlight>praticar musculação💪🏾</Highlight> e {" "}<Highlight>basquete🏀</Highlight>!
      </Paragraph>
      <TechStack />
      <Heading
        as="h2"
        className="text-neutral-400 font-black text-lg md:text-lg lg:text-lg mt-11 mb-4"
      >
        Projetos em que tenho trabalhado
      </Heading>
      <Products />
    </Container>
  );
}
