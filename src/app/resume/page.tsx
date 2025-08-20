"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Anos de Experiência", value: "3+" },
  { label: "Projetos Completados", value: "20+" },
  { label: "Tecnologias", value: "15+" },
  { label: "Certificações", value: "5+" },
];

export default function ResumePage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <span className="text-4xl">💼</span>
              <motion.div
                className="absolute -inset-2 rounded-full bg-primary/20 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
            <Heading className="bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text font-black">
              Experiência Profissional
            </Heading>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Paragraph className="text-white/60">
              Desenvolvedor Fullstack apaixonado por criar soluções inovadoras e eficientes. 
              Experiente em desenvolvimento web moderno e práticas ágeis.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-lg p-4 text-center group hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-white text-transparent bg-clip-text mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-neutral-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-5 bg-primary rounded-full" />
              <h2 className="text-lg font-semibold text-white">Histórico Profissional</h2>
            </div>
            <WorkHistory />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="bg-neutral-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-5 bg-primary rounded-full" />
                <h2 className="text-lg font-semibold text-white">Formação</h2>
              </div>
              <div className="space-y-4">
                <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                  <h3 className="text-white font-medium">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-sm text-white/60">IFBA - Instituto Federal da Bahia Campus Irecê</p>
                  <p className="text-sm text-white/40">2019 - 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-5 bg-primary rounded-full" />
                <h2 className="text-lg font-semibold text-white">Habilidades</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "Node.js", "Python",
                  "Java", "SQL", "MongoDB", "AWS", "Git", "Docker",
                  "TailwindCSS", "Figma"
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-white/5 text-white/80 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
