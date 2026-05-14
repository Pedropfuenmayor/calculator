import Calculator from "./calculator";

export default function Home() {
  return (
    <div className="flex h-dvh flex-1 items-center justify-center overflow-hidden bg-zinc-50 px-4 py-4 font-sans dark:bg-black">
      <Calculator />
    </div>
  );
}
