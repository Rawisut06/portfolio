function Contact() {
  return (
    <section className="bg-background text-clr-primary" id="contact">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-8 h-screen">
        <h2 className="text-primary">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> coderamrin@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +88 01624-890723
        </p>
      </div>
    </section>
  );
};

export default Contact;