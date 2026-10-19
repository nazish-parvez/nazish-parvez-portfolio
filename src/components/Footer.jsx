import { motion } from "framer-motion";

const Footer = () => {
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

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full overflow-hidden bg-dark text-white">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {/* TOP */}
        <div className="border-t border-white/10 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_0.5fr]">
            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-orange" />

                  <motion.span
                    className="absolute inset-0 rounded-full border border-orange"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0.1, 0.4],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>

                <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Full Stack Developer
                </span>
              </div>

              <h2 className="mt-8 font-anton text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.75] tracking-[-0.06em]">
                Nazish <span className="text-orange">Parvez</span>
              </h2>
            </motion.div>

            {/* BACK TO TOP */}
            <div className="flex items-end lg:justify-end">
              <a href="#home" className="group flex items-center gap-4">
                <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/60 transition-colors duration-300 group-hover:text-orange">
                  Back to top
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:border-orange group-hover:bg-orange group-hover:text-black">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* NAV + SOCIALS */}
        <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
          {/* NAVIGATION */}
          <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-8 lg:p-9">
            <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/40">
              Explore
            </span>

            <div className="mt-7 grid grid-cols-2 gap-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-orange"
                >
                  <span className="h-px w-0 bg-orange transition-all duration-300 group-hover:w-4" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-8 lg:p-9">
            <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/40">
              Connect
            </span>

            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  whileHover={{ y: -4 }}
                  className="group flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-300 hover:border-orange hover:bg-orange"
                >
                  <img
                    src={social.logo}
                    alt={`${social.name} logo`}
                    loading="lazy"
                    className="h-[17px] w-[17px] object-contain opacity-70 grayscale invert transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="p-7 sm:p-8 lg:p-9">
            <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/40">
              Availability
            </span>

            <div className="mt-7 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-2 w-2 rounded-full bg-orange" />

                <motion.span
                  className="absolute h-2 w-2 rounded-full bg-orange"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>

              <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/90">
                Open to opportunities
              </span>
            </div>

            <p className="mt-4 max-w-[250px] font-inter text-xs leading-5 text-white/40">
              Available for new projects, collaborations, and meaningful work.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-white/45">
            © {new Date().getFullYear()} Nazish Parvez
          </span>

          <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-white/45">
            India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;