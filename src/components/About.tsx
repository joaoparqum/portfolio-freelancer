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
    <div className="space-y-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
              rotate: index % 2 === 0 ? 5 : -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={image}
              width={400}
              height={600}
              alt={`Imagem sobre ${index + 1}`}
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-64 shadow-lg transform transition-all duration-300 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <div className="space-y-8 relative max-w-4xl">
        <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-xl -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <Paragraph className="text-neutral-300 leading-relaxed">
            Olá! Sou João Paulo - Desenvolvedor de Software e estudante de Análise e Desenvolvimento de Sistemas no IFBA Campus Irecê, atualmente no 6º semestre. Minha especialização está voltada para a área Full-Stack, com domínio em <span className="text-purple-400">Java (POO)</span>, <span className="text-blue-400">Spring</span>, <span className="text-red-400">Laravel</span>, <span className="text-green-400">RabbitMQ</span> e experiência em desenvolvimento de software. Atualmente, estou direcionando meus esforços para aprofundar meus conhecimentos em <span className="text-yellow-400">Docker</span>, <span className="text-cyan-400">React</span>, <span className="text-indigo-400">Next.js</span>, visando fortalecer minhas habilidades Full-Stack.
          </Paragraph>

          <Paragraph className="text-neutral-300 leading-relaxed">
            Tenho uma abordagem paciente na resolução de problemas, destacando-me pela capacidade de me adaptar a novos ambientes. Sou reconhecido por minha organização, pontualidade e comprometimento, sempre dedicando o meu melhor tanto no trabalho quanto nos estudos. Desde cedo, aprendi que a excelência no trabalho é fundamental.
          </Paragraph>

          <div className="p-4 bg-white/5 rounded-xl border border-purple-500/20">
            <Paragraph className="text-neutral-300 leading-relaxed">
              Além disso, possuo conhecimentos em <span className="text-purple-400">Metodologias Ágeis (Scrum/Kanban)</span>, utilização de <span className="text-blue-400">Controle de Versão (Git)</span>, <span className="text-green-400">Clean Code</span> e <span className="text-yellow-400">Princípios SOLID</span>. Estou animado em continuar crescendo profissionalmente e explorando novas oportunidades na área de desenvolvimento de software. Convido você a conhecer mais sobre minha trajetória e habilidades!
            </Paragraph>
          </div>

          <Paragraph className="text-neutral-300 leading-relaxed">
            Sou uma pessoa criativa, com grande apreço por arte e design. Tenho uma forte conexão com a música, especialmente com os estilos <span className="text-red-400">Hip-Hop</span> e <span className="text-purple-400">Rock/Nu Metal</span>, que influenciam minha visão estética e inspiram meu trabalho. Cresci em um ambiente esportivo — meu pai é atleta — e essa vivência me levou a praticar <span className="text-orange-400">basquete</span> e <span className="text-blue-400">musculação</span>, atividades que reforçam minha disciplina, foco e determinação, qualidades que levo também para os meus projetos. 
          </Paragraph>

          <Paragraph className="text-neutral-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-4">
            Obrigado por estar aqui e mal posso esperar para embarcar nessa
            aventura com você.
          </Paragraph>
        </motion.div>
      </div>
    </div>
  );
}
