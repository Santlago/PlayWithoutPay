import Link from "next/link";

interface NavBarProps {
    active: "profile" | "freegames" | "browsergames" | "pcgames" | "settings"
}

export function NavBar(props: NavBarProps) {

    const { active } = props

    const classActive = "bg-active"

    return(
        <nav className="max-w-80 text-color font-inter flex min-h-screen flex-col justify-between flex-grow border-border border-r-2">
            <h1 className="text-4xl font-logo pt-10 pr-24 pb-4 pl-8">Play Without Pay</h1>
            <Link href="/profile">
            <div className={`${active === "profile" ? classActive : ""} flex hover:bg-hover pt-4 pb-4 pl-8 text-2xl font-medium text-profile-text`}>
                <img className="w-9 rounded-full overflow-hidden mr-3" src="https://i.pravatar.cc/300" alt="avatar do usuario" />
                <span className="pt-1">
                    Profile
                </span>
            </div>
            </Link>
            <ul className="flex flex-col justify-between flex-grow max-h-64 text-2xl font-medium">
                <Link href="/">
                    <li className={`${active === "freegames" ? classActive : ""} hover:bg-hover pt-4 pb-4 pl-8`}>
                        Free Games
                    </li>
                </Link>
                <Link href="/browsergames">
                    <li className={`${active === "browsergames" ? classActive : ""} hover:bg-hover pt-4 pb-4 pl-8`}>
                        Browser Games
                    </li>
                </Link>
                <Link href="/pcgames">
                    <li className={`${active === "pcgames" ? classActive : ""} hover:bg-hover pt-4 pb-4 pl-8`}>
                        PC Games
                    </li>
                </Link>
            </ul>
            <Link href="/settings">
                <div className={`${active === "settings" ? classActive : ""} mt-24 hover:bg-hover pt-4 pb-4 pl-8 text-2xl font-bold text-settings-text`}>
                    Settings
                </div>
            </Link>
        </nav>
    )
}