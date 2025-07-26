import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import feet from "public/images/feet.jpeg";
import job from "public/images/job.jpeg";
import basket from "public/images/basket.jpeg";
import chester from "public/images/chester.jpg";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Sobre | João Paulo",
  description:
    "João Paulo é um desenvolvedor/engenheiro de software que atua como full-stack",
};

export default function AboutPage() {
  const images = [
    feet,
    job,basket,
    chester,
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">Sobre mim</Heading>
      <About />
    </Container>
  );
}
