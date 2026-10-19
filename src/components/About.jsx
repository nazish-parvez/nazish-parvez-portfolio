import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-light px-6 py-24 text-light-foreground sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-inter text-[10px] uppercase tracking-[0.3em] text-muted"
        >
          {/* SMOOTH PULSE */}
          <span className="relative flex h-[8px] w-[8px] items-center justify-center">
            <span className="relative z-10 h-[6px] w-[6px] rounded-full bg-orange" />

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
          About Me
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[34%_66%] lg:gap-0">
          {/* LEFT */}
          <div className="lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="font-anton text-[clamp(4rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">
                My
                <br />
                <span className="text-orange">Story</span>
              </h2>

              <div className="mt-10 hidden lg:block">
                <div className="h-px w-12 bg-orange" />

                <p className="mt-5 max-w-[210px] font-inter text-sm leading-[1.7] text-muted">
                  Building, learning and improving one project at a time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="border-black/10 lg:border-l lg:pl-16 xl:pl-20">
            {/* WHO I AM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                Who I am
              </span>

              <h3 className="mt-6 max-w-[850px] font-inter text-[clamp(1.6rem,2.7vw,2.6rem)] leading-[1.35] tracking-[-0.03em]">
                Hello{" "}
                <motion.span
                  className="inline-block origin-[70%_80%]"
                  animate={{
                    rotate: [0, 14, -8, 14, -5, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    ease: "easeInOut",
                  }}
                >
                  👋
                </motion.span>
                , I’m{" "}
                <span className="font-medium text-orange">Nazish Parvez</span>,
                a Full Stack Developer focused on building responsive frontends,
                secure APIs, and scalable backend systems.
              </h3>
            </motion.div>

            {/* WHAT I WORK WITH */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-20 border-t border-black/10 pt-14"
            >
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                What I work with
              </span>

              <p className="mt-6 max-w-[850px] font-inter text-[clamp(1.25rem,2.1vw,2.1rem)] leading-[1.5] tracking-[-0.025em]">
                React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and
                the MERN stack.
              </p>
            </motion.div>

            {/* ALWAYS LEARNING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-20 border-t border-black/10 pt-14"
            >
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                Always learning
              </span>

              <p className="mt-6 max-w-[850px] font-inter text-[clamp(1.25rem,2.1vw,2.1rem)] leading-[1.5] tracking-[-0.025em]">
                Exploring{" "}
                <span className="font-medium">
                  system design, backend architecture, DevOps, Docker, cloud, and
                  distributed systems
                </span>{" "}
                to build reliable and production-ready software.
              </p>
            </motion.div>

            {/* WHAT'S NEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-20 border-t border-black/10 pt-14"
            >
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                What’s next
              </span>

              <p className="mt-6 max-w-[850px] font-inter text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.4] tracking-[-0.03em]">
                Looking for opportunities to{" "}
                <span className="font-medium text-orange">
                  learn, contribute, and grow
                </span>{" "}
                while building useful, reliable products with strong teams.
              </p>

              {/* CONNECT CTA */}
              <motion.a
                href="#contact"
                whileHover="hover"
                initial="initial"
                className="group mt-10 inline-flex items-center gap-4"
              >
                <span
                  className="
                    border
                    border-black/15
                    px-5
                    py-3
                    font-inter
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-black
                    transition-all
                    duration-300
                    group-hover:border-orange
                    group-hover:text-orange
                  "
                >
                  Let’s connect
                </span>

                <motion.span
                  variants={{
                    initial: {
                      x: 0,
                      y: 0,
                    },
                    hover: {
                      x: 3,
                      y: -3,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-black/10
                    text-sm
                    text-orange
                    transition-colors
                    duration-300
                    group-hover:border-orange
                  "
                >
                  ↗
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 flex items-center gap-5 lg:mt-32"
        >
          <span className="h-px flex-1 bg-black/10" />

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-inter text-lg text-orange"
          >
            ↓
          </motion.span>

          <span className="h-px flex-1 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
