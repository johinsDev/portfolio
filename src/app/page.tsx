import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
        "bg-gradient-to-b from-blue-400 to-blue-500",
        "text-white",
        "font-bold",
        "text-6xl",
        "space-y-8",
        "text-center",
        "transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110",
      )}
    >
      <h1>UPDATE</h1>
    </main>
  );
}
