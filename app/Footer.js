import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-[var(--gutter-width)] py-6">
      <h2 className="text-lg font-dm">BeyondFaith</h2>
      <div className="flex items-center gap-x-12">
        <Link href="#">
          <Image
            src="/images/instagram.svg"
            alt="instagram"
            width={32}
            height={32}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/linkedIn.svg"
            alt="linkedIn"
            width={32}
            height={32}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/whatsapp.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <span className="opacity-40 hidden tablet:flex text-sm">
        © 2024 BeyondFaith
      </span>
    </footer>
  );
};

export default Footer;
