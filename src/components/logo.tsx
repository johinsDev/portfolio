import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        width={54}
        height={54}
        priority
        alt="Logo"
      />
    </Link>
  );
}
