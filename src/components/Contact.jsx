import { motion } from "framer-motion";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/nazish-parvez",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nazishparvez/",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/therealnazish/",
      logo: "https://cdn.simpleicons.org/instagram/000000",
    },
    {
      name: "X",
      href: "https://x.com/nazish_parvez",
      logo: "https://cdn.simpleicons.org/x/000000",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-light px-6 py-24 text-light-foreground sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 pb-5 font-inter text-[10px] uppercase tracking-[0.3em] text-muted"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-orange" />

            <motion.span
              className="absolute inset-0 rounded-full border border-orange"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.35, 0.12, 0.35],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>

          Contact
        </motion.div>

        {/* TITLE + INTRO */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[42%_58%] lg:gap-0">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-anton text-[clamp(4.5rem,7.5vw,8rem)] uppercase leading-[0.76] tracking-[-0.06em]">
              Let&apos;s
              <br />
              <span className="text-orange">Connect</span>
            </h2>
          </motion.div>

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end lg:pl-16"
          >
            <div className="max-w-[600px] border-l border-orange pl-7 sm:pl-9">
              <p className="font-inter text-[clamp(1.25rem,2.2vw,2.1rem)] leading-[1.4] tracking-[-0.03em]">
                Have an idea, opportunity, or project in mind?
              </p>

              <p className="mt-5 max-w-[500px] font-inter text-sm leading-6 text-black/40 sm:text-base">
                Let&apos;s build something meaningful together — from the first
                idea to a polished, production-ready product.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.28em] text-muted">
                  Start a conversation
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* EMAIL */}
          <motion.a
            href="mailto:nazishparvez13@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-black/10 bg-white p-7 transition-all duration-500 hover:border-orange sm:p-8 lg:p-10"
          >
            {/* CORNER ACCENT */}
            <span className="absolute right-0 top-0 h-3 w-3 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* TOP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-black/40">
                  Email
                </span>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm text-black/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange group-hover:text-black">
                ↗
              </span>
            </div>

            {/* EMAIL */}
            <div className="mt-14">
              <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-black/25">
                Drop me a line
              </span>

              <h3 className="mt-5 max-w-[850px] break-all font-anton text-[clamp(2.4rem,4.5vw,5rem)] uppercase leading-[0.88] tracking-[-0.045em] transition-colors duration-300 group-hover:text-orange">
                nazishparvez13
                <br />
                @gmail.com
              </h3>
            </div>

            {/* BOTTOM */}
            <div className="mt-12 flex items-center gap-3">
              <span className="h-px w-10 bg-orange transition-all duration-500 group-hover:w-24" />

              <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-black/30">
                Get in touch
              </span>
            </div>
          </motion.a>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border border-black/10 bg-white p-7 sm:p-8 lg:p-10"
          >
            {/* SOCIAL HEADER */}
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-orange">
                Find me online
              </span>

              <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-black/20">
                Socials
              </span>
            </div>

            {/* SOCIAL LIST */}
            <div className="divide-y divide-black/10">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center">
                      <img
                        src={social.logo}
                        alt={`${social.name} logo`}
                        loading="lazy"
                        className="h-[18px] w-[18px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </span>

                    <span className="font-inter text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-orange">
                      {social.name}
                    </span>
                  </div>

                  <span className="text-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AVAILABILITY */}
        <div className="group relative mt-6 overflow-hidden border border-black/10 px-6 py-6 sm:px-8 sm:py-7">
          {/* ORANGE SWEEP */}
          <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-orange transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

          <div className="relative z-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="relative z-10 h-2 w-2 rounded-full bg-orange transition-colors duration-300 group-hover:bg-black" />

                <span className="absolute h-2 w-2 rounded-full bg-orange opacity-40 transition-colors duration-300 group-hover:bg-black" />
              </span>

              <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-black/45 transition-colors duration-300 group-hover:text-black">
                Currently open to opportunities
              </span>
            </div>

            <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-black/25 transition-colors duration-300 group-hover:text-black/60">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;