import { NavBar } from "@/components/NavBar";

export default function PcGames() {
    return (
        <main className="flex">
          <NavBar active="pcgames"/>
          <div className="flex items-center justify-center h-screen w-full">
            <h1 className="text-white">Pc Games</h1>
          </div>
        </main>
      );
}