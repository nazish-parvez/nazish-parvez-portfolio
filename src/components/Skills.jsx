import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Framer Motion",
        logo: "https://cdn.brandfetch.io/framer.com/icon/theme/dark/fallback/transparent/icon.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Hono",
        logo: "https://cdn.simpleicons.org/hono/000000",
      },
      {
        name: "REST APIs",
        logo: "https://cdn.simpleicons.org/postman/000000",
      },
      {
        name: "Cloudflare Workers",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Prisma ORM",
        logo: "https://cdn.simpleicons.org/prisma/000000",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        logo: "https://static.cdnlogo.com/logos/a/19/aws.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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

          Technical Skills
        </motion.div>

        {/* HEADING */}
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
            <h2 className="font-anton text-[clamp(4rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">
              Tech
              <br />
              <span className="text-orange">Stack</span>
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
                The tools and technologies I use to build modern,
                scalable full-stack applications.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.28em] text-muted">
                  My technical toolkit
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SKILL ROWS */}
        <div className="mt-20 border-t border-black/10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-black/10 py-8 lg:py-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[28%_72%] lg:items-center">

                {/* CATEGORY */}
                <div className="mb-6 flex items-center gap-5 lg:mb-0">
                  <span className="font-inter text-[9px] tracking-[0.2em] text-black/25">
                    0{index + 1}
                  </span>

                  <span className="h-px w-6 bg-orange/60" />

                  <h3 className="font-inter text-[10px] font-semibold uppercase tracking-[0.28em]">
                    {group.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -4,
                        borderColor: "#f0440f",
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="
                        group/item
                        flex
                        items-center
                        gap-3
                        border
                        border-black/10
                        bg-light
                        px-4
                        py-3
                        transition-all
                        duration-300
                        hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                      "
                    >
                      <span className="flex h-6 w-6 items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          loading="lazy"
                          className="h-5 w-5 object-contain transition-transform duration-300 group-hover/item:scale-110"
                        />
                      </span>

                      <span className="font-inter text-[9px] uppercase tracking-[0.12em]">
                        {skill.name}
                      </span>

                      <span className="ml-1 text-[10px] text-orange opacity-0 transition-opacity duration-300 group-hover/item:opacity-100">
                        ↗
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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

export default Skills;