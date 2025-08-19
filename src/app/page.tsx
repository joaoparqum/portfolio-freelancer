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
      <div className="flex flex-col space-y-8 sm:space-y-12">
        <div className="space-y-4 sm:space-y-6">
          <span className="text-3xl sm:text-4xl inline-block animate-bounce">👋🏾</span>
          <Heading className="font-black text-2xl sm:text-3xl md:text-4xl">
            Olá! Eu sou João Paulo Arquim
          </Heading>
          <div className="space-y-4">
            <Paragraph className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Eu sou um desenvolvedor full-stack que gosta de{" "}
              <Highlight className="hover:text-purple-400 transition-colors">construir softwares</Highlight> e aplicativos web como forma de diversão
            </Paragraph>
            <Paragraph className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Eu sou um engenheiro de software com{" "}
              <Highlight className="hover:text-blue-400 transition-colors">3 anos de experiência</Highlight> que gosta de um bom{" "}
              <Highlight className="hover:text-red-400 transition-colors">Nu Metal🎸</Highlight>,{" "}
              <Highlight className="hover:text-yellow-400 transition-colors">praticar musculação💪🏾</Highlight> e{" "}
              <Highlight className="hover:text-green-400 transition-colors">basquete🏀</Highlight>!
            </Paragraph>
          </div>
        </div>

        <div className="pt-4">
          <TechStack />
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <Heading
              as="h2"
              className="text-neutral-400 font-black text-base sm:text-lg md:text-xl"
            >
              Projetos em que tenho trabalhado
            </Heading>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-400/20 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-xl"></div>
            <div className="relative z-10">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
