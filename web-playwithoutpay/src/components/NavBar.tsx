import { Settings } from "lucide-react";
import Link from "next/link";
import { DropDownActions } from "./DropDownActions";

interface NavBarProps {
    active: "profile" | "freegames" | "browsergames" | "pcgames" | "settings"
}

export function NavBar(props: NavBarProps) {

    const { active } = props

    const classActive = "bg-active"

    return (
        <nav className="max-w-80 text-color font-inter flex min-h-screen flex-col justify-between flex-grow border-border border-r-2 fixed z-50">
            <Link href="/">
                <h1 className="text-4xl font-logo pt-10 pr-24 pb-4 pl-8 font-normal">
                    Play Without Pay
                </h1>
            </Link>
            <Link href="/profile">
                <div className={`${active === "profile" ? classActive : ""} flex hover:bg-hover pt-4 pb-4 pl-8 text-2xl font-medium text-profile-text`}>
                    <img className="w-10 rounded-full overflow-hidden mr-3" src="https://i.pravatar.cc/300" alt="avatar do usuario" />
                    <span className="pt-1">
                        Profile
                    </span>
                </div>
            </Link>
            <ul className="flex flex-col justify-between flex-grow max-h-64 text-2xl font-medium">
                <div className={`${active === "freegames" ? classActive : ""} flex justify-between items-center hover:bg-hover`}>
                    <Link href="/" className="w-full">
                        <li className="pt-4 pb-4 pl-8">
                            Free Games
                        </li>
                    </Link>
                    <span className="">
                        <DropDownActions />
                    </span>
                </div>
                <div className={`${active === "browsergames" ? classActive : ""} flex justify-between items-center hover:bg-hover`}>
                    <Link href="/browsergames" className="w-full">
                        <li className="pt-4 pb-4 pl-8">
                            Browser Games
                        </li>
                    </Link>
                    <span className="">
                        <DropDownActions />
                    </span>
                </div>
                <div className={`${active === "pcgames" ? classActive : ""} flex justify-between items-center hover:bg-hover`}>
                    <Link href="/pcgames" className="w-full">
                        <li className="pt-4 pb-4 pl-8">
                            PC Games
                        </li>
                    </Link>
                    <span className="">
                        <DropDownActions />
                    </span>
                </div>
            </ul>
            <Link href="/settings">
                <div className={`${active === "settings" ? classActive : ""} flex items-center mt-24 hover:bg-hover pt-4 pb-4 pl-8 text-2xl font-bold text-settings-text`}>
                    <Settings className="mr-3" />Settings
                </div>
            </Link>
        </nav>
    )
}