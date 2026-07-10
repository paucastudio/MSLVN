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
    },
    {
      scope: container,
    },
  );

  return (
    <main ref={container}>
      <section className="h-screen overflow-hidden flex flex-col px-5 sm:px-10 sm:gap-32 gap-12 sm:py-36 py-24 sm:pb-4 justify-end">
        <div className="flex flex-col items-end  w-full h-fit">
          <div className="sm:grid sm:grid-cols-6 flex flex-col items-start gap-8 w-full h-fit ">
            <div className="flex flex-col gap-4">
              <h3 ref={h2Ref}>001</h3>
            </div>
            <div className="w-full flex justify-center col-start-3 sm:justify-start overflow-hidden ">
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
            <div className="flex flex-col gap-4">
              <h3 ref={h2Ref}>
                Independent designer and developer based in Rotterdam with an
                obsession for simplicity. I make complex things simple and
                beautiful, and I love to create digital experiences that are
                both functional and aesthetically pleasing.
              </h3>
            </div>
            <h3 className="w-full text-right sm:col-start-6 sm:justify-self-end">
              2026
            </h3>
          </div>
          <div className="flex flex-col w-full">
            <div className="border-line" />

            <div className="grid grid-cols-3">
              <h1 className="col-start-2">INDEPENDENT</h1>
            </div>

            <div className="border-line" />

            <div className="grid grid-cols-6">
              <h1>Designer</h1>
            </div>

            <div className="border-line" />

            <div className="flex justify-end">
              <h1>DEVELOPER</h1>
            </div>

            <div className="border-line" />
          </div>
        </div>
      </section>
      <section className="overflow-hidden flex flex-col gap-16 py-40 px-5 sm:px-10">
        {/* Top section with grid layout */}
        <div className="sm:grid sm:grid-cols-3  flex flex-col items-center gap-4">
          <h3>002</h3>
          <h3>Selected works.</h3>
          <h3 className="flex items-end">/26</h3>
        </div>

        {/* Bottom section with grid layout */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex flex-col bg-foreground/5 w-full p-64 ">
            <div className="relative aspect-16/10 gap-2">
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
    </main>
  );
}
