"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
// import { usePathname } from 'next/navigation';

const Header = () => {
  // const pathname = usePathname()
  // const dashboardNav = pathname === '/dashboard'

  return (
    <div className="max-w-7xl 2xl:max-w-[92vw] mx-auto flex justify-between py-6 px-4 md:px-12 lg:px-16 md:py-12 items-center">
      <div className="hidden cursor-pointer border border-white lg:flex lg:items-center gap-3 p-2 rounded-xl">
        <Link href="https://github.com/Mahich123/weshrink">
          <Github className="text-white" size={30} />
        </Link>
      </div>
      <div className="">
        <Image src="/Logo.svg" width={100} height={100} alt="logo" />
      </div>

      <Button
        className="rounded-lg text-xs bg-[#3B82F6]"
        variant="default"
        asChild
      >
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default Header;
