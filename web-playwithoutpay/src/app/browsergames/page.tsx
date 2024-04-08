import { NavBar } from "@/components/NavBar";

export default function BrowserGames() {
    return (
        <main className="flex">
          <NavBar active="browsergames"/>
          <div className="flex items-center justify-center h-screen w-full">
            <h1 className="text-white">Browser Games</h1>
          </div>
        </main>
      );
}