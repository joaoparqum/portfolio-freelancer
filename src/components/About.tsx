"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import feet from "public/images/feet.jpeg";
import job from "public/images/job.jpeg";
import basket from "public/images/basket.jpeg";
import chester from "public/images/chester.jpg";
import flash from "public/images/flash.jpeg";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    flash,
    job,
    basket,
    chester,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Olá! Sou João Paulo - Desenvolvedor de Software e estudante de Análise e Desenvolvimento de Sistemas no IFBA Campus Irecê, atualmente no 6º semestre. Minha especialização está voltada para a área Full-Stack, com domínio em Java (POO), Spring, Laravel, RabbitMQ e experiência em desenvolvimento de software. Atualmente, estou direcionando meus esforços para aprofundar meus conhecimentos em Docker, React, Next.Js, visando fortalecer minhas habilidades Full-Stack.
        </Paragraph>
        <Paragraph className=" mt-4">
          Tenho uma abordagem paciente na resolução de problemas, destacando-me pela capacidade de me adaptar a novos ambientes. Sou reconhecido por minha organização, pontualidade e comprometimento, sempre dedicando o meu melhor tanto no trabalho quanto nos estudos. Desde cedo, aprendi que a excelência no trabalho é fundamental.
        </Paragraph>

        <Paragraph className=" mt-4">
          Além disso, possuo conhecimentos em Metodologias Ágeis (Scrum/Kanban), utilização de Controle de Versão (Git), Clean Code e Princípios SOLID. Estou animado em continuar crescendo profissionalmente e explorando novas oportunidades na área de desenvolvimento de software. Convido você a conhecer mais sobre minha trajetória e habilidades!
        </Paragraph>
        <Paragraph className=" mt-4">
          Sou uma pessoa criativa, com grande apreço por arte e design. Tenho uma forte conexão com a música, especialmente com os estilos Hip-Hop e Rock/Nu Metal, que influenciam minha visão estética e inspiram meu trabalho. Cresci em um ambiente esportivo — meu pai é atleta — e essa vivência me levou a praticar basquete e musculação, atividades que reforçam minha disciplina, foco e determinação, qualidades que levo também para os meus projetos. 
        </Paragraph>
        <Paragraph className=" mt-4">
          Obrigado por estar aqui e mal posso esperar para embarcar nessa
          aventura com você.
        </Paragraph>
      </div>
    </div>
  );
}
