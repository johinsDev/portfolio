import Image from "next/image";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import { Button, buttonVariants } from "@/components/ui/button";
import { BgShape } from "@/components/icons/bg-shape-2";

import { DevImg } from "./dev-img";
import { Socials } from "./socials";

export function Hero() {
  return (
    <section className="relative h-[84vh] py-12 xl:py-24 xl:pt-28 dark:bg-none">
      <Image
        src="/assets/hero/hero-bg.png"
        alt="Hero background"
        fill
        className="-z-10 object-cover object-bottom dark:hidden"
        priority
      />
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-screen-sm flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="text-primary tracking-40 mb-4 text-sm font-semibold uppercase">
              Web Developer
            </div>
            <h1 className="mb-4">Hello, my name is Johan Villamil</h1>
            <p className="max-w-128 mx-auto xl:mx-0">
              I am a web developer based in Bogotá, Colombia. I have a passion
              for web development and love to create for web and mobile devices.
            </p>

            <div className="mx-auto mb-12 flex flex-col gap-3 md:flex-row xl:mx-0">
              <Link
                href="/contact"
                className={buttonVariants({ className: "gap-x-2" })}
                aria-label="Contact me"
              >
                Contact me <Send size={18} />
              </Link>

              <Button
                className="gap-x-2"
                aria-label="Download CV"
                variant="secondary"
              >
                Download CV <Download size={18} />
              </Button>
            </div>

            <Socials />
          </div>

          <div className="relative hidden xl:flex">
            <BgShape className="absolute -top-1 right-8 -z-10 text-[#FE705A] dark:text-[#7779ac]" />

            <DevImg />
          </div>
        </div>

        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-primary text-3xl" />
        </div>
      </div>
    </section>
  );
}
