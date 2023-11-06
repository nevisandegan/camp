import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex justify-between  max-conrainer padding-container relative z-30 py-5 lg:flex lg:justify-between">
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer lg:hidden"
      />
      <div className=" flex items-center gap-12">
        <Link href="/">
          <Image
            
            src="/logo.jpeg"
            alt="logo"
            width={74}
            height={74}
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex mt-3">
          {NAV_LINKS.map((link) => (
            <Link
              className="flexCenter transition-all hover:font-bold cursor-pointer pb-1.5 regular-16 text-gray-50"
              key={link.key}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          icon="/user.svg"
          variant="btn_dark_green"
          text={"ورود"}
        />
      </div>
    </nav>
  );
}

export default Navbar;
