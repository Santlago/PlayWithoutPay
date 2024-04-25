import { NavBar } from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import { Filter, Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {

  const shooterResponse = await fetch(`https://www.freetogame.com/api/games?category=shooter`);
  const shooterData = await shooterResponse.json();

  const mmorpgResponse = await fetch(`https://www.freetogame.com/api/games?category=mmorpg`);
  const mmorpgData = await mmorpgResponse.json();

  const recentlyAddedResponse = await fetch(`https://www.freetogame.com/api/games?sort-by=release-date`);
  const recentlyAddedData = await recentlyAddedResponse.json();

  // Error handling
  try {
    // Your rendering logic here
  } catch (error) {
    console.error('Error fetching or rendering data:', error);
  }
  const categories = [
    {
      id: 1,
      name: "Recently Added",
      games: recentlyAddedData,
    },
    {
      id: 2,
      name: "MMORPG",
      games: mmorpgData,
    },
    {
      id: 3,
      name: "Shooter",
      games: shooterData,
    }
  ]

  return (
    <main className="flex font-inter w-screen">
      <div id="navbar" className="">
        <NavBar active="freegames" />

      </div>
      <div className="flex flex-col justify-between h-screen pt-6 pr-6 pb-6 overflow-x-hidden ml-[22rem]">
        <section >
          <div className="flex justify-center items-end">
            <Input
              key="search"
              label="Search..."
              name="search"
              labelPlacement={"outside"}
              endContent={<Search />}
              className="mr-16"
            />
            <Button color="primary"><Filter />Filter</Button>

          </div>
        </section>
        {categories.map(category => (
          <section key={category.id} className="flex flex-col mt-10">
            <span className="text-2xl font-semibold text-gray">{category.name}</span>
            <div id="games" className="flex justify-between snap-x overflow-x-auto h-full gap-6">
              {category.games.map((game: any) => (
                <Link key={game.id} href={`/game/${game.id}`} target="blank">
                  <div className="flex flex-col w-72 snap-center">
                    <img
                      src={game.thumbnail}
                      alt="thumbnail"
                      className="rounded-primary"
                    />
                    <span className="text-2xl font-normal text-gray truncate">{game.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}


      </div>

    </main>
  );
}
