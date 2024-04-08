import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex">
      <NavBar active="freegames"/>
      <div className="flex items-center justify-center h-screen w-full">
        <h1 className="text-white">Free Games</h1>
      </div>
    </main>
  );
}
