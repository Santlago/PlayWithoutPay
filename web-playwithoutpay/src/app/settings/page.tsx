import { NavBar } from "@/components/NavBar";

export default function Settings() {
    return (
        <main className="flex">
          <NavBar active="settings"/>
          <div className="flex items-center justify-center h-screen w-full">
            <h1 className="text-white">Settings</h1>
          </div>
        </main>
      );
}