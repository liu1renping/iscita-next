"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email us directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label htmlFor="name" className="label-col">
          Name *
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input"
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email" className="label-col">
          Email *
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input"
            placeholder="your@email.com"
          />
        </label>
      </div>

      <label htmlFor="subject" className="label-col">
        Subject *
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="input"
          placeholder="What is this about?"
        />
      </label>

      <label htmlFor="message" className="label-col">
        Message *
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input resize-none"
          placeholder="Your message..."
        />
      </label>

      {status === "success" && (
        <div className="p-3 rounded-lg bg-emerald-100 text-emerald-700 text-sm">
          ✓ Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-100 text-red-700 text-sm">✗ {errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg
                   hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 cursor-pointer"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
