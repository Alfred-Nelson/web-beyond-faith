import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between fixed top-0 bg-foreground/40 backdrop-blur-md px-[var(--gutter-width)] text-accent z-10">
      <Link href={"/#home"}>
        <span className="font-dm text-lg">BeyondFaith</span>
      </Link>
      <nav className="flex items-center gap-x-10 font-inter text-sm">
        <Link href="/#home">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/#shop">Shop</Link>
      </nav>
      <Button variant="outline">Talk to Us</Button>
    </header>
  );
};

export default Header;
