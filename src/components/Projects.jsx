
import { motion } from "framer-motion";

const projects = [
  {
    
    title: "User Management System",
    type: "Full Stack Dashboard",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    problem:
      "A role-aware admin interface for managing users, authentication state, and account-level CRUD flows.",
    decisions: [
      "Separated user and admin workflows so protected actions stay behind explicit role checks.",
      "Used JWT authentication and server-side route guards instead of relying only on frontend state.",
      "Designed the dashboard around repeated admin actions: search, edit, review, and account updates.",
    ],
    proof: ["RBAC", "Protected routes", "REST API", "Responsive dashboard"],
    github: "https://github.com/nazish-parvez/",
    live: "https://github.com/nazish-parvez/",
  },
  {
    
    title: "Medium Clone",
    type: "Serverless Blog Platform",
    stack: [
      "React",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma",
      "Zod",
    ],
    problem:
      "A blogging platform prototype focused on authentication, article publishing, and edge-deployed API routes.",
    decisions: [
      "Moved API logic to Hono on Cloudflare Workers to practice small, fast serverless handlers.",
      "Added Zod validation at API boundaries so invalid request shapes fail before reaching database logic.",
      "Used Prisma with PostgreSQL to model users and posts with a clearer relational structure than a simple document store.",
    ],
    proof: ["Edge API", "Schema validation", "PostgreSQL", "Prisma ORM"],
   github: "https://github.com/nazish-parvez/",
    live: "https://github.com/nazish-parvez/",
  },
  {
    
    title: "Portfolio System",
    type: "Frontend Experience",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Accessibility"],
    problem:
      "A personal portfolio built to communicate technical range, visual taste, and frontend implementation quality.",
    decisions: [
      "Built a custom editorial layout instead of using a generic card-heavy template.",
      "Added semantic landmarks, SEO metadata, keyboard focus states, and reduced-motion handling.",
      "Kept motion intentional: it supports the brand without becoming the main substance of the page.",
    ],
    proof: ["SEO pass", "Reduced motion", "Responsive UI", "Production build"],
    github: "https://github.com/nazish-parvez/",
    live: "https://github.com/nazish-parvez/",
  },
];

const profileLinks = [
  {
    label: "GitHub Profile",
    href: "https://github.com/nazish-parvez",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nazishparvez/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
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

          Projects
        </motion.div>

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
              Selected
              <br />
              <span className="text-orange">Work</span>
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
            <div className="max-w-[660px] border-l border-orange pl-7 sm:pl-9">
              <p className="font-inter text-[clamp(1.35rem,2.3vw,2.25rem)] leading-[1.35] tracking-[-0.03em]">
                Case studies focused on product thinking, API design, frontend
                execution, and the engineering decisions behind the interface.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="h-px w-10 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.28em] text-white/45">
                  Evidence over buzzwords
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex min-h-[680px] flex-col border border-white/20 p-7 transition-all duration-500 hover:border-orange sm:p-9"
            >
              <span className="absolute right-0 top-0 h-3 w-3 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                    {project.type}
                  </span>

                  <h3 className="mt-6 font-anton text-[clamp(2.75rem,4vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.025em] transition-colors duration-300 group-hover:text-orange">
                    {project.title}
                  </h3>
                </div>

                {/* <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {project.number}
                </span> */}
              </div>

              <p className="mt-8 font-inter text-sm leading-7 text-white/65">
                {project.problem}
              </p>

              <div className="mt-10">
                <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                  Engineering decisions
                </span>

                <div className="mt-5 space-y-4">
                  {project.decisions.map((item) => (
                    <div key={item} className="flex gap-4">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />

                      <p className="font-inter text-sm leading-7 text-white/65">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                  Proof points
                </span>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.proof.map((item) => (
                    <span
                      key={item}
                      className="border border-white/15 px-3 py-2 font-inter text-[9px] uppercase tracking-[0.16em] text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-10">
                <div className="border-t border-white/15 pt-5">
                  <span className="mb-4 block font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                    Stack
                  </span>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="font-inter text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 group-hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Repo and Live Demo links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 px-4 py-3 font-inter text-[9px] uppercase tracking-[0.16em] text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-black focus-visible:border-orange focus-visible:bg-orange focus-visible:text-black"
                  >
                    GitHub Repo ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-orange px-4 py-3 font-inter text-[9px] uppercase tracking-[0.16em] text-orange transition-all duration-300 hover:bg-orange hover:text-black focus-visible:bg-orange focus-visible:text-black"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-5 border border-white/15 p-6 sm:flex-row sm:items-center sm:p-7"
        >
          <p className="max-w-[760px] font-inter text-sm leading-7 text-white/55">
            Want a deeper walkthrough? Explore the verified profiles below for
            current work, source history, and professional background.
          </p>

          <div className="flex flex-wrap gap-3">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-5 py-3 font-inter text-[9px] uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-black focus-visible:border-orange focus-visible:bg-orange focus-visible:text-black"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

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

export default Projects;