import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* ========================================================= */
/* NAVBAR                                                     */
/* ========================================================= */

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ========================================================= */
  /* ACTIVE SECTION DETECTION                                  */
  /* ========================================================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleSections.length > 0) {
          const activeId = `#${visibleSections[0].target.id}`;

          setActiveLink(activeId);
        }
      },
      {
        root: null,

        // Active section detection area
        rootMargin: "-20% 0px -60% 0px",

        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ========================================================= */
  /* NAVIGATION                                                */
  /* ========================================================= */

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  /* ========================================================= */
  /* BODY SCROLL LOCK                                          */
  /* ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ========================================================= */
  /* ESCAPE KEY                                                */
  /* ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      {/* ===================================================== */}
      {/* HEADER                                                 */}
      {/* ===================================================== */}

      <nav
        className="
          relative
          mx-auto
          flex
          h-16
          w-full
          items-center
          justify-between
          bg-background/90
          px-5
          backdrop-blur-xl
          sm:px-8
          md:px-10
          lg:h-[72px]
          lg:px-12
          xl:px-14
        "
      >
        {/* =================================================== */}
        {/* LOGO                                                 */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="
              relative
              z-[120]
              block
              shrink-0
              font-anton
              text-[28px]
              uppercase
              leading-none
              tracking-[-0.03em]
              text-foreground
              sm:text-[30px]
            "
          >
            <motion.span
              whileHover={{
                opacity: 0.7,
                x: 2,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              NAZISH
              <span className="text-orange">.</span>
            </motion.span>
          </a>
        </motion.div>

        {/* =================================================== */}
        {/* DESKTOP NAV                                          */}
        {/* =================================================== */}

        <div
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-5
            lg:flex
            xl:gap-7
            2xl:gap-9
          "
        >
          {navItems.map((item, index) => {
            const isActive = activeLink === item.href;

            return (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25 + index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="
                    group
                    relative
                    block
                    shrink-0
                    whitespace-nowrap
                    py-2
                    font-inter
                    text-sm
                    font-medium
                    leading-none
                    text-foreground
                  "
                >
                  {/* LINK */}

                  <motion.span
                    className="block"
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item.name}
                  </motion.span>

                  {/* ================================================= */}
                  {/* UNDERLINE                                            */}
                  {/* ================================================= */}

                  <motion.span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1.5px]
                      w-full
                      origin-left
                      bg-orange
                    "
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================== */}
        {/* DESKTOP CTA                                           */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.55,
            duration: 0.6,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          className="hidden lg:block"
        >
          <motion.a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            initial="rest"
            whileHover="hover"
            className="
      group relative flex h-10 shrink-0 items-center
      justify-center overflow-hidden rounded-full
      border border-foreground/60 px-6
      font-inter text-sm font-medium leading-none
      text-foreground
    "
          >
            {/* CTA BACKGROUND */}
            <motion.span
              variants={{
                rest: { y: "101%" },
                hover: { y: "0%" },
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 rounded-full bg-orange"
            />

            {/* CTA TEXT */}
            <motion.span
              variants={{
                rest: { color: "var(--foreground)" },
                hover: { color: "#030405" },
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative z-10"
            >
              Let's Talk
            </motion.span>
          </motion.a>
        </motion.div>

        {/* =================================================== */}
        {/* MOBILE BUTTON                                         */}
        {/* =================================================== */}

        <motion.button
          initial={{
            opacity: 0,
            x: 15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          type="button"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((previous) => !previous)}
          className="
            relative
            z-[120]
            flex
            h-10
            w-10
            shrink-0
            flex-col
            items-end
            justify-center
            gap-[6px]
            lg:hidden
          "
        >
          {/* TOP LINE */}

          <motion.span
            className="
              block
              h-[1.5px]
              bg-foreground
            "
            animate={
              mobileOpen
                ? {
                    width: 24,
                    y: 3.75,
                    rotate: 45,
                  }
                : {
                    width: 24,
                    y: 0,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* BOTTOM LINE */}

          <motion.span
            className="
              block
              h-[1.5px]
              bg-orange
            "
            animate={
              mobileOpen
                ? {
                    width: 24,
                    y: -3.75,
                    rotate: -45,
                  }
                : {
                    width: 16,
                    y: 0,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.button>
      </nav>

      {/* ===================================================== */}
      {/* MOBILE MENU                                            */}
      {/* ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-x-0
              top-16
              z-[90]
              flex
              h-[calc(100dvh-4rem)]
              w-full
              flex-col
              overflow-hidden
              bg-background
              lg:hidden
            "
          >
            {/* SCROLLABLE CONTENT */}

            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
                px-5
                py-7
                pb-10
                sm:px-8
                md:px-12
              "
            >
              <div className="flex min-h-full flex-col">
                {/* LABEL */}

                <div
                  className="
                    mb-8
                    flex
                    items-center
                    gap-3
                    font-inter
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-foreground/35
                    sm:mb-10
                    sm:text-xs
                  "
                >
                  <span className="h-px w-7 bg-orange" />
                  Navigation
                </div>

                {/* ================================================= */}
                {/* MOBILE LINKS                                        */}
                {/* ================================================= */}

                <div className="flex flex-col">
                  {navItems.map((item, index) => {
                    const isActive = activeLink === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.055,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="
                            group
                            relative
                            block
                            border-b
                            border-foreground/10
                            py-4
                            sm:py-5
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            {/* NAME */}

                            <motion.span
                              animate={{
                                color: isActive
                                  ? "#fdf9f4"
                                  : "rgba(253,249,244,0.7)",
                              }}
                              whileHover={{
                                x: 8,
                                color: "#fdf9f4",
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="
                                font-anton
                                text-[clamp(2.7rem,11vw,6rem)]
                                uppercase
                                leading-[0.82]
                                tracking-[-0.035em]
                              "
                            >
                              {item.name}
                            </motion.span>

                            {/* ARROW */}

                            <motion.span
                              className="
                                mr-1
                                text-2xl
                                text-orange
                                sm:text-3xl
                              "
                              initial={{
                                opacity: 0,
                                x: -8,
                                rotate: -45,
                              }}
                              whileHover={{
                                opacity: 1,
                                x: 0,
                                rotate: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                            >
                              ↗
                            </motion.span>
                          </div>

                          {/* ACTIVE UNDERLINE */}

                          <motion.span
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-[2px]
                              bg-orange
                            "
                            initial={false}
                            animate={{
                              width: isActive ? "100%" : "0%",
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>

                {/* ================================================= */}
                {/* MOBILE BOTTOM                                       */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-auto
                    flex
                    flex-col
                    gap-5
                    pt-10
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        font-inter
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-foreground/30
                      "
                    >
                      Full Stack Developer
                    </p>

                    <p
                      className="
                        mt-1
                        font-inter
                        text-sm
                        text-foreground/50
                      "
                    >
                      Kurnool, India
                    </p>
                  </div>

                  {/* MOBILE CTA */}

                  <a
                    href="#contact"
                    onClick={() => handleNavClick("#contact")}
                    className="
                      flex
                      h-12
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      bg-orange
                      px-5
                      font-inter
                      text-sm
                      font-semibold
                      text-black
                      sm:w-[155px]
                    "
                  >
                    <span>Let's Talk</span>

                    <motion.span
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      ↗
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
