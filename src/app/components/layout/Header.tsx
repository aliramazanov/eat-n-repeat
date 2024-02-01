import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header
        className={
          "max-w-5xl mx-auto pt-5 flex justify-between items-center mt-10"
        }
      >
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
        </nav>
        <nav className={"flex items-center gap-4 font-semibold text-zinc-500"}>
          <Link
            className={"hover:text-primary transition-all"}
            href={"/register"}
          >
            Register
          </Link>
          <Link
            className={
              "bg-white px-6 py-2 rounded-full text-black border border-gray-500 hover:transition-all hover:shadow-md hover:bg-primary hover:text-white hover:border-transparent"
            }
            href={"/login"}
          >
            Login
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
