import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contato | João P.",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Entre em contato comigo</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Entre em contato comigo por e-mail ou preencha este formulário de contato. Entrarei em contato com você.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
