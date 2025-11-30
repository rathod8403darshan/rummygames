"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  lang: string;
}

export function ContactForm({ lang }: ContactFormProps) {
  const isHindi = lang === "hi";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // In a real app, you would send this to your API endpoint
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setSubmitStatus({
        type: "success",
        message: isHindi
          ? "आपका संदेश सफलतापूर्वक भेजा गया है! हम जल्द ही आपसे संपर्क करेंगे।"
          : "Your message has been sent successfully! We'll get back to you soon.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: isHindi
          ? "कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।"
          : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {isHindi ? "हमसे संपर्क करें" : "Get in Touch"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            {isHindi ? "नाम" : "Name"}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            {isHindi ? "ईमेल" : "Email"}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
            {isHindi ? "विषय" : "Subject"}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            {isHindi ? "संदेश" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? isHindi
              ? "भेज रहे हैं..."
              : "Sending..."
            : isHindi
            ? "भेजें"
            : "Send Message"}
        </button>
      </form>
    </div>
  );
}

