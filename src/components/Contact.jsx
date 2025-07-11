import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondaryColor px-4 py-8">
      <nav className="mb-8 w-full max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-full border border-white p-2 text-white transition-colors hover:bg-[#0a291e]"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
      </nav>

      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-textPrimary">
        <h2 className="mb-2 text-center text-3xl font-bold text-textSecondary">
          Contact Us
        </h2>
        <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
          Have a suggestion, found a bug, or want to collaborate? Just drop your
          message below and we'll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="py-8 text-center font-semibold text-green-600">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-textSecondary focus:ring-2 focus:ring-textSecondary dark:bg-secondaryColor dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-textSecondary focus:ring-2 focus:ring-textSecondary dark:bg-secondaryColor dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={`Your Message\n- Feedback or Suggestion\n- Report an Issue\n- Collaboration request`}
                className="w-full rounded-md border border-gray-300 p-3 focus:border-textSecondary focus:ring-2 focus:ring-textSecondary dark:bg-secondaryColor dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-textSecondary px-4 py-2 font-semibold text-black transition-colors hover:bg-green-500 hover:text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
