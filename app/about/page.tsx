import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="min-h-screen pt-[10vw] px-[6vw]">
        <div className="border bg-blue rounded-3xl px-[1vw] py-[0.5vw] w-fit">
          <p className="text-yellow font-bold">About Colossal</p>
        </div>

        <div className="mt-[2vw] grid grid-cols-2 gap-[5vw]">
          <div>
            <h1 className="font-bold text-[3vw]">
              Transforming Grand Visions into Masterpieces of{" "}
              <span className="text-yellow italic"> Art and Craftsmanship</span>
            </h1>
          </div>
          <div>
            <p className="text-blue text-[1vw] leading-[2vw] mb-[2vw]">
              At Colossal Art Indonesia, we specialize in bringing ambitious
              ideas to life through exceptional design and production. With
              expertise in wood, metal, fiber, and craft, our team delivers
              innovative solutions for interior and architectural projects,
              exhibitions, decorations, and more. Backed by integrated
              management systems and skilled professionals in every workshop, we
              ensure every masterpiece reflects precision, creativity, and
              unparalleled craftsmanship.
            </p>
            <a
              href=""
              className="font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-yellow rounded-lg text-blue "
            >
              Free Consultation
            </a>
          </div>
        </div>

        <div className="flex mt-[8vw] relative mb-[12vw] items-center">
          <div className="bg-yellow px-[4vw] py-[5vh] absolute w-[45%] rounded-xl ">
            <h2 className="text-blue font-bold text-[2vw] mb-[1.4vw]">
                Where Creativity Meets Precision in Every Detail
            </h2>
            <p className="text-blue text-[0.8vw] leading-[1.4vw] mb-[2vw]">
            Every project at Colossal Art Indonesia is a harmonious blend of artistry and meticulous execution. From custom woodwork and metal fabrication to intricate fiber modeling, our team ensures that each piece not only meets but exceeds expectations. By combining innovative design concepts with expert craftsmanship, we deliver results that are both visually stunning and functionally superior, tailored to elevate your vision to the next level.
            </p>
            <a
              href=""
              className="font-raleway font-bold px-[1.4vw] text-[0.8vw] py-[1.2vh] bg-blue rounded-lg text-white inline-block"
            >See Project</a>
          </div>
          <Image
            src="/bnr-ovr.png"
            width={500}
            height={500}
            alt=""
            className="w-[70%] ml-auto rounded-xl object-cover"
          />
        </div>
      </section>
    </>
  );
}