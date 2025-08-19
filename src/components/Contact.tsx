"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    // Validação simples
    if (!formData.name.value || !formData.email.value || !formData.message.value) {
      alert("Por favor, preencha todos os campos.");
      setSending(false);
      return;
    }

    const templateParams = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    };

    emailjs
      .send(
        "service_ok4238c",    // <- Substitua
        "template_7qquo4c",   // <- Substitua
        templateParams,
        "5Vn-rT8ppan3l0RXH"     // <- Substitua
      )
      .then(() => {
        setSuccess("Mensagem enviada com sucesso!");
        setFormData(defaultFormState);
        setSending(false);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
        setSending(false);
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-white/60 pl-1">
            Seu nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="João Silva"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
            value={formData.name.value}
            onChange={(e) =>
              setFormData({ ...formData, name: { value: e.target.value, error: "" } })
            }
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-white/60 pl-1">
            Seu e-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="joao@exemplo.com"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
            value={formData.email.value}
            onChange={(e) =>
              setFormData({ ...formData, email: { value: e.target.value, error: "" } })
            }
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-white/60 pl-1">
          Sua mensagem
        </label>
        <textarea
          id="message"
          placeholder="Me conte sobre seu projeto..."
          rows={8}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200 resize-none"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({ ...formData, message: { value: e.target.value, error: "" } })
          }
        />
      </div>
      <div>
        <button
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:from-primary/90 hover:to-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 relative group"
          type="submit"
          disabled={sending}
        >
          <div className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
          <span className="flex items-center justify-center gap-2">
            {sending ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <span>Enviar mensagem</span>
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </span>
        </button>
      </div>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{success}</span>
          </div>
        </motion.div>
      )}
    </form>
  );
};

