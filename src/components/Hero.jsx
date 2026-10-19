"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full max-w-full font-anton flex justify-center select-none overflow-hidden">

      {/* ========================================================= */}
      {/* NAME SECTION                                              */}
      {/* ========================================================= */}

      <div className="absolute top-[21%] mx-5 text-center xl:top-[19%]">

        {/* 1. FULL STACK DEVELOPER */}
        <motion.div
          className="font-inter text-[0.60rem] tracking-[0.40rem] mb-1 sm:text-[0.70rem] md:text-[0.72rem] lg:text-[0.78rem] xl:text-[0.78rem] md:mb-0 sm:tracking-[0.50rem] md:tracking-[0.60rem] lg:tracking-[0.65rem] xl:tracking-[0.70rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          FULL STACK DEVELOPER
        </motion.div>

        {/* 2. NAZISH */}
        <motion.div
          className="text-[7rem] leading-28 tracking-tight sm:leading-none sm:text-[14rem] md:text-[18rem] lg:text-[22rem] xl:text-[29rem]"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.75,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div>NAZISH</div>

          <div className="sm:hidden">
            PARVEZ
          </div>
        </motion.div>

      </div>


      {/* ========================================================= */}
      {/* 3. MAIN IMAGE                                             */}
      {/* ========================================================= */}

      <motion.img
        src="/profile-img.png"
        alt="Nazish Parvez"
        width={1080}
        height={1080}
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[50%] object-cover sm:h-[60%] md:h-[65%] lg:h-[68%] xl:h-[70%]"
      />


      {/* ========================================================= */}
      {/* 4. STAR — LEFT TO RIGHT + FLOAT                          */}
      {/* ========================================================= */}

      <motion.div
        className="absolute top-[11%] left-[5%] font-anton text-orange text-6xl sm:top-[12.5%] lg:left-[4%] xl:top-[14%] md:text-7xl xl:text-[5.8rem]"
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 3,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.span
          className="inline-block"
          animate={{
            y: [0, -6, 0, 5, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          *
        </motion.span>
      </motion.div>


      {/* ========================================================= */}
      {/* FRONTEND / BACKEND / EVERYTHING — FLOAT                  */}
      {/* ========================================================= */}

      <motion.div
        className="absolute bottom-[25%] left-[5%] font-anton text-white text-left text-lg leading-5 lg:text-xl xl:text-2xl xl:leading-6 md:bottom-[20%] lg:bottom-[16%] lg:left-[4%] xl:bottom-[32%]"
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 3.15,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.span
          className="inline-block"
          animate={{
            y: [0, -5, 0, 4, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          FRONTEND <br />
          BACKEND <br />
          <span className="text-orange">
            EVERYTHING
          </span>
        </motion.span>
      </motion.div>


      {/* ========================================================= */}
      {/* OPEN TO WORK — FLOAT                                     */}
      {/* ========================================================= */}

      <motion.div
        className="absolute top-[10%] right-[5%] font-anton text-white leading-5 text-right text-lg lg:text-xl xl:text-2xl xl:leading-6 sm:top-[12%] lg:right-[4%] lg:top-[14%] xl:top-[34%]"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 3.3,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.span
          className="inline-block"
          animate={{
            y: [0, 5, 0, -4, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          OPEN <br />
          TO <br />
          <span className="text-orange">
            WORK
          </span>
        </motion.span>
      </motion.div>


      {/* ========================================================= */}
      {/* LOCATION                                                  */}
      {/* ========================================================= */}

      <motion.div
        className="absolute z-10 bottom-[2%] left-[5%] font-inter text-white text-[0.55rem] lg:text-[0.7rem] lg:left-[4%]"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 3.45,
          duration: 0.6,
        }}
      >
        Based in <br />

        <span className="underline md:decoration-2 md:decoration-orange">
          Kurnool
        </span>
        , India
      </motion.div>


      {/* ========================================================= */}
      {/* SCROLL + ANIMATED ARROW                                  */}
      {/* ========================================================= */}

      <motion.div
        className="absolute z-10 bottom-[2%] right-[4%] font-inter text-white text-right text-[0.55rem] lg:text-[0.7rem] lg:right-[4%]"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 3.6,
          duration: 0.6,
        }}
      >
        <span>
          Scroll
        </span>{" "}

        <motion.span
          className="inline-block sm:text-orange font-bold"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>

        <br />

        The{" "}
        <span className="underline md:decoration-orange md:decoration-2">
          Story
        </span>{" "}
        Continues
      </motion.div>

    </section>
  );
};

export default Hero;