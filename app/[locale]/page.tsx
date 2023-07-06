"use client";
import { CardWithForm } from "@/components/card";
import { useRef } from "react";
import HeroSection from "@/components/heroSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Home() {
  const { inView, entry, ref } = useInView();
  const t = useTranslations("DesignSprint");
  const t1 = useTranslations("SDTR");
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>
        <div className="card">
          <div className="absolute w-full aspect-video h-1/2 left-0 top-0 object-cover filter:brightness-50">
            <Image src="/hero.jpg" alt="image" fill />
          </div>
          <div className="card-content">
            <HeroSection />
          </div>
        </div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            x: -300,
            scale: 0.5,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            type: "tween",
          }}>
          <div className="absolute w-full h-full flex justify-center align-middle bg-white gap-4 rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full rounded-3xl">
              <div className="grid rounded-3xl">
                <div className="container max-w-lg flex flex-col items-end justify-center">
                  <div
                    className="flex flex-col items-center justify-center gap-6"
                    ref={ref}>
                    <motion.div
                      className="text-xl sm:text-2xl text-black md:text-5xl h-full p-4 text-transparent font-sans text-center font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                      initial={{
                        opacity: 0,
                        x: 100,
                        scale: 0.4,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1.5 }}
                      transition={{
                        duration: 1.5,
                        ease: "circIn",
                        type: "spring",
                      }}
                      ref={ref}
                      viewport={{ once: false }}>
                      {t("title")}
                    </motion.div>
                    {/* <div className="text-lg text-black font-sans text-justify font-thin">
                      {t("desc")}
                    </div> */}
                    <motion.div
                      className="text-lg text-black font-sans text-justify font-thin break-normal"
                      initial={{
                        opacity: 0,
                        x: 300,
                        scale: 0.2,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: "circIn",

                        type: "tween",
                      }}
                      viewport={{ once: false }}>
                      {t("desc")}
                    </motion.div>
                    <motion.div
                      className="text-lg text-black font-sans text-justify font-thin break-normal"
                      initial={{
                        opacity: 0,
                        x: 200,
                        scale: 0.2,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: "circIn",

                        type: "tween",
                      }}
                      viewport={{ once: false }}>
                      {t("desc1")}
                    </motion.div>
                    <motion.div
                      className="text-lg font-sans text-justify font-thin break-normal"
                      initial={{
                        opacity: 0,
                        x: 200,
                        scale: 0.2,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 1.2,
                        type: "tween",
                      }}
                      viewport={{ once: false }}>
                      {t("desc2")}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="grid rounded-3xl">
                <motion.div className="relative rounded-l-2xl top-0 right-0 aspect-auto w-full max-h-fit">
                  <Image
                    src="/designsprint.jpg"
                    alt="image"
                    fill
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      borderRadius: "24px 24px 24px 24px",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            x: -300,
            scale: 0.5,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            type: "keyframes",
          }}>
          <div className="absolute w-full h-full flex justify-center align-middle bg-white p-0 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
              <div className="grid">
                <div className="relative rounded-l-2xl top-0 right-0 aspect-auto w-full max-h-fit">
                  <Image
                    src="/sdtr.jpg"
                    alt="image"
                    fill
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      borderRadius: "24px 0 24px 24px",
                    }}
                  />
                </div>
              </div>
              <div className="grid">
                <div className="container max-w-lg flex flex-col items-end justify-center">
                  <div
                    className="flex flex-col items-center justify-end gap-6"
                    ref={ref}>
                    <motion.div
                      className="text-xl sm:text-3xl md:text-5xl text-transparent font-sans text-center font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                      initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0.5,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                      }}
                      viewport={{ once: false }}>
                      {t1("title")}
                    </motion.div>
                    <motion.div
                      className="text-lg font-sans text-justify font-thin break-normal"
                      initial={{
                        opacity: 0,
                        x: -200,
                        scale: 0.5,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 1,
                        type: "tween",
                      }}
                      viewport={{ once: false }}>
                      {t1("desc")}
                    </motion.div>
                    <motion.div
                      className="text-lg font-sans text-justify font-thin break-normal"
                      initial={{
                        opacity: 0,
                        x: -200,
                        scale: 0.5,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 1,
                        type: "tween",
                      }}
                      viewport={{ once: false }}>
                      {t1("desc1")}
                    </motion.div>
                    {pathname.includes("ja") && (
                      <motion.div
                        className="w-full flex align-middle justify-end text-[8px] font-sans text-justify font-extralight break-normal"
                        initial={{
                          opacity: 0,
                          x: -200,
                          scale: 0.5,
                        }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          duration: 1,
                          type: "tween",
                        }}
                        viewport={{ once: false }}>
                        <div>
                          * CTO: 技術責任者　PM: プロジェクトマネージャー　SE:
                          ソフトウェアエンジニア
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
