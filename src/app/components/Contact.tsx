"use client";

import { useState, FormEvent, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    message: "",
    email: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", surname: "", message: "", email: "" });
  };

  const handleClose = () => {
    if (formRef.current) {
      formRef.current.classList.add("hidden");
      const container = document.getElementById("container");
      if (container) {
        container.classList.remove("blur-sm", "pointer-events-none");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      id="contact"
      className="space-y-4 hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--background) p-6 rounded-md shadow-xl w-[calc(100%-2rem)] min-[480px]:w-md z-50"
    >
      <h2 className="text-2xl font-light text-center">Napište mi</h2>

      <div>
        <label htmlFor="name" className="block mb-1">
          Vaše jméno
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-1 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="surname" className="block mb-1">
          Příjmení
        </label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          className="w-full px-1 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-1 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1">
          Zpráva
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-1 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-48 max-h-[50vh]"
          required
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => {
            setFormData({ name: "", surname: "", message: "", email: "" });
            handleClose();
          }}
          className="py-2 bg-white border border-gray-300 rounded-md w-full hover:cursor-pointer font-semibold"
        >
          Zrušit
        </button>
        <button
          type="submit"
          className="py-2 bg-(--primary) text-(--background) rounded-md w-full hover:cursor-pointer font-semibold"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
}
