"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
export function LanguageSwitcher() {
  const pathName = usePathname();
  const t = useTranslations("Language");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Languages className="w-full h-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuCheckboxItem checked={pathName === "/" ? true : false}>
          <Link href="/" locale="en" className="text-center">
            {t("en")}
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={pathName.includes("ja") ? true : false}>
          <Link href="/" locale="ja">
            {t("ja")}
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
