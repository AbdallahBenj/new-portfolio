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

    console.log("Form Submitted");
    setResult(
      <>
        Thanks for reaching out!
        <br />
        Your message has been sent successfully.
      </>,
    );
    resetFormData();
  };

  return (
    <div
      className="form-container max-w-xl m-auto
      animation-colors"
    >
      <div
        aria-live="polite"
        role="status"
        className={`result
          px-2
          flex-1 text-center
          font-heading
          font-semibold text-2xl
          text-emerald-500
          animation-transform delay-100
          ${result ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        {result && <p>{result}</p>}
      </div>

      <form
        onSubmit={handleSubmit}
        className="form mt-6 md:mt-10
        flex flex-col justify-center space-y-6
        animation-colors"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          className={`w-full
          py-2 px-3 rounded
          ring-2 ring-gray-500
          outline-2 outline-transparent
          valid:outline-green-500
          focus-visible:outline-sky-500
          bg-gray-200 dark:bg-gray-800
          placeholder:text-gray-500
          text-gray-900 dark:text-gray-100
          animation-transform delay-200

          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
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
          className={` w-full
          py-2 px-3 rounded
          ring-2 ring-gray-500
          outline-2 outline-transparent
          valid:outline-green-500
          focus-visible:outline-sky-500  
          bg-gray-200 dark:bg-gray-800
          placeholder:text-gray-500
          text-gray-900 dark:text-gray-100
          animation-transform delay-350
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
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
          className={`w-full
          py-2 px-3 rounded
          ring-2 ring-gray-500
          outline-2 outline-transparent
          valid:outline-green-500
          focus-visible:outline-sky-500
          bg-gray-200 dark:bg-gray-800
          placeholder:text-gray-500
          text-gray-900 dark:text-gray-100
          animation-transform delay-500
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
          flex flex-col-reverse md:flex-row gap-3"
        >
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 md:flex-1/3
            cursor-pointer
            rounded p-2
            font-heading
            font-semibold text-lg
            border-2
            text-sky-600 hover:text-gray-100
            bg-transparent  hover:bg-sky-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-heading
            flex-1 md:flex-2/3
            cursor-pointer
            rounded p-2
            font-semibold text-lg
            text-gray-50 hover:text-gray-100
            bg-sky-500 hover:bg-sky-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
