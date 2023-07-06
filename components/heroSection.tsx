import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
type Props = {};

const HeroSection = (props: Props) => {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col p-0 m-0 h-full w-full justify-start align-middle top-0 text-white	text-center">
      <div className="w-full h-1/2 p-0 sm:p-2 md:p-10">
        <motion.div
          className="text2xl sm:text-3xl m-0 font-serif font-extralight"
          whileHover={{ scale: [null, 1.5, 1.3] }}
          transition={{ duration: 0.7 }}>
          {t("title-1")}
        </motion.div>
        <motion.div
          className="text-xl sm:text-4xl md:text-5xl font-extrabold m-0 max-[480]:m-1 sm:m-2 md:m-16 bg-clip-text bg-gradient-to-r text-transparent from-indigo-500 to-pink-500"
          initial={{
            opacity: 0,
            x: -200,
            scale: 0.4,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: [null, 1.5, 1.3] }}
          transition={{
            duration: 1.5,
            ease: "linear",
            type: "keyframes",
          }}
          viewport={{ once: false }}>
          {t("title-2")}
        </motion.div>
        <div className="text-lg sm:text-2xl md:text-3xl">X</div>
        <motion.div
          className="text-xl sm:text-4xl md:text-5xl font-extrabold m-0 sm:m-2 max-[480]:m-1 md:m-16 bg-clip-text bg-gradient-to-r text-transparent from-indigo-500 to-pink-500"
          initial={{
            opacity: 0,
            x: -200,
            scale: 0.4,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{
            duration: 1.5,
            ease: "circIn",
            type: "keyframes",
          }}
          viewport={{ once: false }}>
          {t("title-3")}
        </motion.div>
      </div>
      <motion.div
        className="text-black text-center bottom-0 top-2/3 h-1/3 p-4 md:p-8"
        initial={{
          opacity: 0,
          x: -200,
          scale: 0.4,
        }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "keyframes",
        }}
        viewport={{ once: false }}>
        <div className="text-5xl text-stone-600 font-medium md:mb-4">
          {t("title-4")}
        </div>
        <div className="text-xl text-dark/95 font-medium">{t("title-5")}</div>
        <div className="text-xl text-dark/95 font-medium md:mb-4">
          {t("title-6")}
        </div>
        <div className="text-lg text-dark/85 font-extralight font-sans">
          {t("title-end")}
        </div>
        <div className="container w- text-lg text-dark/85 font-extralight font-sans line-break">
          {t("title-end-1")}
        </div>
        <div className="text-lg text-dark/85 font-extralight font-sans container w-3/6">
          {t("title-end-2")}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
