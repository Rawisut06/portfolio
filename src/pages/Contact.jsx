import { FaGithub, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";
import { useForm, ValidationError } from '@formspree/react';
import Heading from "../components/Heading";

function Contact() {
  const [state, handleSubmit] = useForm("mzzbqwnn");

  return (
    <section id="contact" className="p-4 py-20 text-center bg-background text-clr-primary">
      <div className="md:max-w-[1280px] mx-auto w-full flex flex-col items-center space-y-20 h-fit">
        {/* Title */}
        <Heading name="Contact Me" />
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col items-center justify-center w-1/3 h-full gap-16 py-8">
            <p className="text-left text-secondary">
              I&apos;m always open to new opportunities and collaborations. Let&apos;s connect!
            </p>

            {/* Contact Options */}

            <div className="space-y-4 text-left font-ternary">
              <p><span className="font-bold">Email: </span><a href="mailto:tungtung0685@gmail.com">tungtung0685@gmail.com</a></p>
              <p><span className="font-bold">Phone: </span><span>(+66)-92-259-6056</span></p>
            </div>

            <div className="flex flex-col justify-center gap-8 sm:flex-row">
              <Button
                name="Email Me"
                link="mailto:tungtung0685@gmail.com"
                rel="noopener noreferrer"
                icon={FaEnvelope}
                className="flex items-center p-2 border-2 border-clr-primary"
              />

              <Button
                name="Github"
                link="https://github.com/rawisut"
                rel="noopener noreferrer"
                icon={FaGithub}
                className="flex items-center p-2 border-2 size-fit border-clr-primary"
              />

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto md:w-[40%] w-full bg-background border-clr-primary hover-shadow border-2 p-6 shadow"
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
                className={`flex items-center p-2 border-2 hover-btn-bg ${
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