"use client";
import React from "react";
import { Icons } from "./icons";
import { Facebook, Linkedin } from "lucide-react";
import { PhoneForwarded } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
type Props = {};

const SiteFooter = (props: Props) => {
  const t = useTranslations("footer");
  return (
    <div className=" bg-gray-900 mt-4">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">{t("title")}</h3>
          <Button variant="outline" className="text-black gap-2" size="lg">
            <PhoneForwarded className="h-4 w-4" />
            {t("btn")}
          </Button>
        </div>
        <div className="mt-12 flex flex-col md:justify-center items-center text-sm text-gray-400">
          <div className="flex flex-row h-10 justify-center align-middle self-center">
            <Button variant="ghost">
              <Facebook className="h-8 w-8" />
            </Button>
            <Separator orientation="vertical" />
            <Button variant="ghost">
              <Linkedin className="h-8 w-8" />
            </Button>
            <Separator orientation="vertical" />
            <div className="text-justify text-lg font-light font-sans self-center break-words">
              <Button variant="ghost" className="break-normal">
                {t("privacy")}
              </Button>
            </div>
          </div>
          <div className="pt-4">
            <p className="mt-8 md:mt-0">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
