import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";

const HomeMenu: React.FC = () => {
  return (
    <React.Fragment>
      <section>
        <div className={"mt-32"}>
          <div className={"absolute -left-6 top-[20px] text-left -z-10"}>
            <Image
              width={200}
              height={300}
              src={"/lettuce.png"}
              alt={"Salad"}
            ></Image>
          </div>
          <div className={"absolute right-6 top-[500px] text-left -z-10"}>
            <Image
              width={200}
              height={300}
              src={"/tomato.png"}
              alt={"Salad"}
              className="scale-x-[-1]"
            ></Image>
          </div>
          <div className={"text-center"}>
            <h3 className={"uppercase text-zinc-600 font-semibold leading-3"}>
              Checkout
            </h3>
            <h3 className={"text-primary font-bold text-5xl italic"}>Menu</h3>
          </div>
          <div className={"mt-8 grid grid-cols-3 gap-4"}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeMenu;
