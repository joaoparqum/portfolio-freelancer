"use client";
import React, { useState } from "react";
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
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Seu nome"
          className="bg-neutral-200 px-2 py-2 rounded-md text-sm text-black w-full"
          value={formData.name.value}
          onChange={(e) =>
            setFormData({ ...formData, name: { value: e.target.value, error: "" } })
          }
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="bg-neutral-200 px-2 py-2 rounded-md text-sm text-black w-full"
          value={formData.email.value}
          onChange={(e) =>
            setFormData({ ...formData, email: { value: e.target.value, error: "" } })
          }
        />
      </div>
      <div>
        <textarea
          placeholder="Sua mensagem"
          rows={10}
          className="bg-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-black w-full"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({ ...formData, message: { value: e.target.value, error: "" } })
          }
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-400 rounded-md font-bold text-black"
        type="submit"
        disabled={sending}
      >
        {sending ? "Enviando..." : "Enviar"}
      </button>

      {success && <p className="text-green-600 mt-2">{success}</p>}
    </form>
  );
};

