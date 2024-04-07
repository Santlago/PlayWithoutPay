import Link from "next/link";

export function NavBar() {
    return(
        <nav className="max-w-80 text-color font-mono flex min-h-screen flex-col justify-between flex-grow border-border border-r-2">
            <h1 className="text-4xl font-bold pt-4 pr-32 pb-4 pl-8">Play Without Pay</h1>
            <Link href="/profile">
                <div className="mb-12 hover:bg-hover pt-4 pr-32 pb-4 pl-8">
                    Profile
                </div>
            </Link>
            <ul className="flex flex-col justify-between flex-grow max-h-64 ">
                <Link href="/">
                    <li className="hover:bg-hover pt-4 pr-32 pb-4 pl-8">
                        Free Games
                    </li>
                </Link>
                <Link href="/browsergames">
                    <li className="hover:bg-hover pt-4 pr-32 pb-4 pl-8">
                        Browser Games
                    </li>
                </Link>
                <Link href="/pcgames">
                    <li className="hover:bg-hover pt-4 pr-32 pb-4 pl-8">
                        PC Games
                    </li>
                </Link>
            </ul>
            <Link href="/settings">
                <div className="mt-24 hover:bg-hover pt-4 pr-32 pb-4 pl-8">
                    Settings
                </div>
            </Link>
        </nav>
    )
}