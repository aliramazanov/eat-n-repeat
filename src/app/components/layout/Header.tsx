import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header className={"flex justify-between items-center mt-10"}>
        <Link className={"text-primary font-bold text-6xl"} href={""}>
          Eat & Repeat
        </Link>
        <nav className={"flex items-center gap-8 font-semibold text-zinc-500"}>
          <Link className={"hover:text-primary transition-all"} href={"/"}>
            Home
          </Link>
          <Link className={"hover:text-primary transition-all"} href={"/"}>
            Menu
          </Link>
          <Link className={"hover:text-primary transition-all"} href={"/"}>
            About
          </Link>
          <Link className={"hover:text-primary transition-all"} href={"/"}>
            Contact
          </Link>
          <Link
            className={"bg-primary px-6 py-2 rounded-full text-white"}
            href="/"
          >
            Login
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
