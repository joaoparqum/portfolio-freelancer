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
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-xl"></div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-4xl animate-bounce">💬</span>
              <Heading className="font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Sobre mim
              </Heading>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/20 via-neutral-400/10 to-transparent"></div>
          </div>
        </div>
        <About />
      </div>
    </Container>
  );
}
