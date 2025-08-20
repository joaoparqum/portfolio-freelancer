"use client";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <span className="text-4xl">✉️</span>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-primary/20 blur-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <Heading className="bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text font-black">
                Entre em contato
              </Heading>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Paragraph className="mb-10 max-w-xl text-white/60">
              Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível. 
              Preencha o formulário abaixo ou envie um email direto para{" "}
              <a 
                href="mailto:costajoaopaulo113@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                costajoaopaulo113@gmail.com
              </a>
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/5"
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
