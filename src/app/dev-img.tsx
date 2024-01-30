import Image from "next/image";

import { BgShape } from "@/components/icons/bg-shape";

export function DevImg() {
  return (
    <>
      <BgShape className="absolute -z-10" />
      <Image
        src="/assets/hero/developer.png"
        height={462}
        width={508}
        className="object-contain"
        priority
        alt="Johan Villamil"
      />
    </>
  );
}
