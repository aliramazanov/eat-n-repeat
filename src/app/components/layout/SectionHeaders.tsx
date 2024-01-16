import { SectionTypes } from "@/types/Types";
import React from "react";

export const SectionHeaders: React.FC<SectionTypes> = ({
  subHeader,
  mainHeader,
}) => {
  return (
    <section>
      <h3 className={"uppercase text-zinc-600 font-semibold leading-3 pb-2"}>
        {subHeader}
      </h3>
      <h3 className={"text-primary font-bold text-5xl italic"}>{mainHeader}</h3>
    </section>
  );
};
