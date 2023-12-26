import Image from "next/image";
import React from "react";
import Cart from "../icons/Cart";

const MenuItem: React.FC = () => {
  return (
    <section>
      <div
        className={
          "bg-zinc-50 hover:bg-zinc-100 hover:cursor-pointer hover:shadow-lg transition-all py-6 mb-4 rounded-2xl flex flex-col items-center justify-center"
        }
      >
        <Image
          className="rounded-xl"
          width={200}
          height={150}
          src={"/margherita.jpg"}
          alt={"Pizza"}
        />
        <h4 className={"font-semibold mt-4 mb-2 text-xl"}>Margherita</h4>
        <p className={"text-sm max-w-[200px] text-zinc-600"}>
          Margherita is a typical Neapolitan pizza, made with San Marzano
          tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive
          oil.
        </p>
        <button
          className={
            "bg-primary px-4 py-2 rounded-full text-white mt-4 flex items-center gap-2"
          }
          type={"button"}
        >
          Add to cart
          <Cart className={"w-4 h-4"} />
        </button>
      </div>
    </section>
  );
};

export default MenuItem;
