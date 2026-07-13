"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Home() {
  const h2Ref = useRef(null);
  const imageRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      const Split = SplitText.create(h2Ref.current, {
        type: "lines",
        linesClass: "lineH2",
        mask: "lines",
      });
      gsap.from(Split.lines, {
        yPercent: 100,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 90%",
        },
      });
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          scale: 1.05,
        },

        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          yPercent: 0,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5,
        },
      );
      gsap.utils.toArray(".border-line").forEach((el) => {
        gsap.from(el as Element, {
          width: "0%",
          duration: 1.5,
          ease: "power1.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el as Element,
          },
        });
      });
    },
    {
      scope: container,
    },
  );

  return (
    <main ref={container}>
      <section className="flex flex-col justify-end h-screen gap-12 px-5 py-24 overflow-hidden sm:px-10 sm:gap-32 sm:py-36 sm:pb-4">
        <div className="flex flex-col items-end w-full h-fit">
          <div className="flex flex-col items-start w-full gap-8 sm:grid sm:grid-cols-6">
            <div className="flex justify-center w-full overflow-hidden sm:justify-start ">
              <div className="relative w-full max-w-[300px] aspect-3/4">
                <Image
                  ref={imageRef}
                  src="/portrait.png"
                  fill
                  className="object-cover object-center"
                  alt="hero image"
                />
              </div>
            </div>
            <div className="flex flex-col col-start-3 gap-4">
              <p ref={h2Ref}>
                Independent designer and developer based in Rotterdam with an
                obsession for simplicity. I make complex things simple and
                beautiful, and I love to create digital experiences that are
                both functional and aesthetically pleasing.
              </p>
            </div>
            <h3 className="w-full text-right sm:col-start-6 sm:justify-self-end">
              2026
            </h3>
          </div>
          <div className="flex flex-col w-full">
            <div className="border-line" />
            <div className="grid grid-cols-3">
              <h1 className="col-start-2">Independent</h1>
            </div>
            <div className="border-line" />
            <div className="grid grid-cols-6">
              <h1>Designer</h1>
            </div>
            <div className="border-line" />
            <div className="flex justify-end">
              <h1>Developer</h1>
            </div>
            <div className="border-line" />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 px-5 py-40 overflow-hidden sm:px-10">
        {/* Top section with grid layout */}
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-3">
          <h3>002</h3>
          <h3>Selected works.</h3>
          <h3 className="flex items-end">/26</h3>
        </div>

        {/* Bottom section with grid layout */}
        <div className="flex flex-col items-end gap-4 sm:grid sm:grid-cols-6">
          <h3 className="col-span-2">22/26</h3>
          <div className="relative flex flex-col items-center justify-center w-full h-full col-span-4 overflow-hidden aspect-16/10 bg-foreground/3">
            {/* <Image
              ref={imageRef}
              src="/portrait2.png"
              fill
              className="absolute inset-0 object-cover object-center"
              alt="hero image"
            /> */}
            <div className="relative aspect-16/10 w-[60%] gap-2">
              <Image
                src="/olaf.png"
                fill
                className="object-cover"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 px-5 py-40 overflow-hidden sm:px-10">
        {/* Top section with grid layout */}
        <div className="grid items-center grid-cols-1 gap-4 sm:grid sm:grid-cols-3">
          <h3>003</h3>
          <h3>Process</h3>
          <h3 className="flex justify-end">Read more</h3>
        </div>

        {/* Bottom section with grid layout */}
        <div className="grid grid-cols-6 gap-y-4">
          <div className="grid items-stretch col-span-6 gap-4 grid-cols-subgrid">
            <div className="flex flex-col justify-between col-span-2">
              <h3>A</h3>
              <h1>Define</h1>
            </div>
            <div className="relative col-span-1 col-start-3 aspect-3/4">
              <Image
                src="/define.png"
                fill
                className="object-cover"
                alt="define process image"
              />
            </div>
            <div className="flex flex-col justify-between col-span-1">
              <p>
                We define the problem and constraints for each project. A clear
                understanding of the challenge is essential for effective
                solution development.
              </p>
            </div>

            <div className="flex flex-col items-end justify-between col-span-1 col-start-6">
              <h3>Capabilities</h3>
              <ul className="flex flex-col items-end">
                <li className="flex justify-between gap-2">
                  <h3>Discovery workshop</h3>
                </li>
                <li className="flex justify-between gap-2">
                  <h3>Research</h3>
                </li>
                <li className="flex justify-between gap-2">
                  <h3>Competitive analysis</h3>
                </li>
              </ul>
            </div>
          </div>
          {/* Row 2 — separate component, same tracks */}
          <div className="grid items-stretch col-span-6 gap-4 grid-cols-subgrid">
            <div className="flex flex-col justify-between col-span-2">
              <h3>B</h3>
              <h1>Design</h1>
            </div>
            <div className="relative col-span-1 col-start-3 aspect-3/4">
              <Image
                src="/portrait3.png"
                fill
                className="object-cover"
                alt="design process image"
              />
            </div>
            <div className="flex flex-col col-span-1">
              <p>
                We design each project with a focus on user experience and
                functionality. My goal is to create intuitive and visually
                appealing interfaces that enhance the user's interaction with
                the product.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-screen px-5 py-40 overflow-hidden sm:px-10">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid sm:grid-cols-3">
          <h3>004</h3>
          <h3>Thoughts</h3>
          <h3 className="flex justify-end">Read more</h3>
        </div>
      </section>
    </main>
  );
}
