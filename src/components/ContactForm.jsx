import { useState } from "react";

import useScrollSections from "@/hooks/useScrollSections.js";

const ContactForm = () => {
  const visibleSections = useScrollSections(["contact"]);
  const isSectionVisible = visibleSections["contact"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleCancel = () => {
    resetFormData();
    setResult("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setResult(
      <>
        Thanks for reaching out!
        <br />
        Your message has been sent successfully.
      </>,
    );
    resetFormData();
  };

  const fieldStyle = `form-inputs
            w-full

            py-2 px-3 rounded-lg
            ring-2 ring-gray-500/25 
            outline-2 outline-transparent
            valid:outline-green-500
            focus-visible:outline-sky-500
            
            bg-gray-200/50 dark:bg-gray-900/50 backdrop-blur-xl
            placeholder:text-slate-500 dark:placeholder:text-slate-400
            text-slate-900 dark:text-white`;

  return (
    <div
      className="form-container
      mx-auto w-full max-w-2xl
      animation-colors"
    >
      <div
        aria-live="polite"
        role="status"
        className={`result
          font-heading text-center
          transition-all duration-700
          ${
            result
              ? "mb-6 translate-y-0 scale-100 opacity-100"
              : "mb-0 translate-y-2 scale-95 opacity-0"
          }`}
      >
        {result && (
          <p className="text-lg font-medium text-emerald-500">{result}</p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="form
        space-y-5"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          className={`
            ${fieldStyle}
            transition-all duration-700 delay-100
            
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-95 opacity-0"
          }`}
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleData}
          placeholder="Name*"
          required
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className={`
            ${fieldStyle}
            transition-all duration-700 delay-200
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-95 opacity-0"
          }`}
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleData}
          placeholder="Email*"
          required
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className={`
            ${fieldStyle}
            resize-none rows="6"
          transition-all duration-700 delay-300
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
          name="message"
          value={formData.message}
          onChange={handleData}
          placeholder="Message*"
          required
        />
        <div
          className="buttons
          flex flex-col-reverse md:flex-row gap-3 pt-2"
        >
          <button
            type="button"
            onClick={handleCancel}
            className={`     
              cursor-pointer
              rounded-lg p-2
              flex-1 md:flex-1/3
              font-heading font-medium text-lg
              border border-sky-500
              text-sky-600 hover:text-gray-100
              bg-white/70 dark:bg-white/5 backdrop-blur-xl  
              hover:bg-sky-600 hover:-translate-y-1 hover:border-sky-500
              transition duration-300
            
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 scale-95 opacity-0"
          }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`
              cursor-pointer
              rounded-lg p-2
              flex-1 md:flex-2/3
              font-heading font-medium text-lg
              border border-sky-500
              shadow-lg shadow-sky-500/25
              
              text-white hover:text-white
              bg-sky-500 hover:bg-sky-600 backdrop-blur-xl
              hover:-translate-y-1 hover:border-sky-500
              transition duration-300
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0"
              }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
