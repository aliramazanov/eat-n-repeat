import Image from "next/image";
import React from "react";
import ClickOn from "../icons/ClickOn";
import ArrowRight from "../icons/ArrowRight";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <section>
        <div className="flex mt-16 justify-center items-center gap-16">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl mb-4">
              Everything is better with a
              <span className={"text-primary"}>&nbsp;Pizza!🍕</span>
            </h1>
            <p className={"text-zinc-500 max-w-[650px] mb-8"}>
              Embark on a culinary journey with our authentic Italian pizza, a
              perfect blend of tradition and taste. Crafted with passion, each
              bite is a celebration of Italy&apos;s rich culinary heritage.
              Immerse yourself in time-honored recipes, ensuring every slice
              reflects the essence of our culinary artistry. From the wood-fired
              oven to your plate, our commitment to tradition shines through,
              delivering an unparalleled experience that beckons both
              connoisseurs and novices alike.
            </p>
            <div className={"flex gap-4"}>
              <button
                className={
                  "flex gap-2 items-center justify-center bg-primary px-5 py-3 rounded-full text-white font-semibold"
                }
                aria-label="Button"
                type={"button"}
              >
                Order now
                <ClickOn className={"w-5 h-5"} />
              </button>
              <button
                aria-label="Button"
                type={"button"}
                className={"flex gap-2 items-center justify-center "}
              >
                Learn more
                <ArrowRight className={"w-5 h-5"} />
              </button>
            </div>
          </div>
          <div>
            <Image
              className={"rounded-[50%]"}
              width={460}
              height={300}
              priority={true}
              src={"/pizza.jpg"}
              alt={"Pizza"}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
