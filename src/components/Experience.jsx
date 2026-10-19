import { motion } from "framer-motion";

const experiences = [
  {
    company: "TALENSER",
    role: "Full Stack Developer Intern",
    date: "MAY 2026 — JUL 2026",
    type: "REMOTE",
    description: [
      "Developed responsive web applications using React.js, TypeScript, Tailwind CSS, Hono, and Cloudflare Workers.",
      "Collaborated with cross-functional teams to implement features, resolve bugs, and enhance application performance.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
    ],
  },
  {
    company: "100xDEVS",
    role: "MERN Stack Developer Trainee",
    date: "APR 2024 — SEP 2025",
    type: "REMOTE · APPRENTICESHIP",
    description: [
      "Built full-stack web applications using React.js, Node.js, Express.js, MongoDB, and RESTful APIs.",
      "Implemented authentication, CRUD operations, and database integration in full-stack web applications.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-inter text-[10px] uppercase tracking-[0.3em]"
        >
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

          Experience
        </motion.div>

        {/* TITLE + SHORT INTRO */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[42%_58%] lg:gap-0">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-anton text-[clamp(4rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">
              Journey
              <br />
              <span className="text-orange">So Far</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end lg:pl-16"
          >
            <div className="max-w-[620px] border-l border-orange pl-7 sm:pl-9">
              <p className="font-inter text-[clamp(1.4rem,2.4vw,2.35rem)] leading-[1.35] tracking-[-0.03em]">
                Building, learning, and growing through real-world experience.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.28em] text-white/45">
                  My journey so far
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EXPERIENCE BOXES */}
        <div className="mt-28 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex min-h-[540px] flex-col border border-white/20 p-7 transition-all duration-500 hover:border-orange sm:p-9 lg:p-10"
            >
              <span className="absolute right-0 top-0 h-3 w-3 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-orange transition-transform duration-300 group-hover:scale-125" />

                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-orange">
                    {experience.company}
                  </span>
                </div>

                {/* <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/40">
                  0{index + 1}
                </span> */}
              </div>

              {/* META */}
              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-inter text-[9px] uppercase tracking-[0.22em] text-white/50">
                  {experience.type}
                </span>

                <span className="h-px w-5 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.22em] text-white/50">
                  {experience.date}
                </span>
              </div>

              {/* ROLE */}
              <h3 className="mt-6 max-w-[600px] font-anton text-[clamp(2.8rem,4.5vw,4.8rem)] uppercase leading-none tracking-[-0.025em] transition-colors duration-300 group-hover:text-orange">
                {experience.role}
              </h3>

              {/* DESCRIPTION */}
              <div className="mt-10 max-w-[620px] space-y-5">
                {experience.description.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />

                    <p className="font-inter text-sm leading-7 text-white/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-auto pt-10">
                <div className="border-t border-white/15 pt-5">
                  <span className="mb-4 block font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                    Technologies
                  </span>

                  <div className="flex max-w-[600px] flex-wrap gap-x-4 gap-y-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="font-inter text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 group-hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 flex items-center gap-5 lg:mt-32"
        >
          <span className="h-px flex-1 bg-white/15" />

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

          <span className="h-px flex-1 bg-white/15" />
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;