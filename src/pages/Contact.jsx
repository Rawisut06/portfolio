import { FaGithub, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mzzbqwnn");

  return (
    <section id="contact" className="text-center bg-background text-clr-primary">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center space-y-20 h-fit">
        {/* Title */}
        <h2 className="text-primary">Contact Me</h2>
        <div className="flex justify-between gap-8">
          <div className="flex flex-col justify-center w-1/2 gap-8">
            <p className="text-ternary">
              I&apos;m always open to new opportunities and collaborations. Let&apos;s connect!
            </p>

            {/* Contact Options */}

            <div className="flex justify-center gap-8">
              <Button
                name="Email Me"
                link="mailto:tungtung0685@gmail.com"
                icon={FaEnvelope}
                className="flex items-center p-2 border-2 border-clr-primary hover:border-background hover:bg-clr-primary hover:text-background"
              />

              <Button
                name="Github"
                link="https://github.com/rawisut"
                icon={FaGithub}
                className="flex items-center p-2 border-2 size-fit border-clr-primary hover:border-background hover:bg-clr-primary hover:text-background"
              />

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto w-[50%] bg-background border-clr-primary border-2 b p-6 shadow"
          >
            {state.succeeded && (
              <div className="mb-4 font-bold text-green-500">
                Thank you! Your message has been sent.
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium text-left">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border-2 text-background border-clr-primary"
                required
              />
            </div>
            <ValidationError
              prefix="Name"
              field="Name"
              errors={state.errors}
            />
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-left">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 text-background border-clr-primary"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border-2 text-background border-clr-primary"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className={`flex items-center p-2 border-2 border-clr-primary hover:border-background hover:bg-clr-primary hover:text-background ${
                  state.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;