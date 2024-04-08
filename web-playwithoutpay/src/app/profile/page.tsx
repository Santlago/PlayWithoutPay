import { NavBar } from "@/components/NavBar";

export default function Profile() {
    return (
        <main className="flex">
          <NavBar active="profile"/>
          <div className="flex items-center justify-center h-screen w-full">
            <h1 className="text-white">Profile</h1>
          </div>
        </main>
      );
}