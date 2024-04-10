import { NavBar } from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import { Filter, Search } from "lucide-react";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Recently Added",
      games: [
        {
          "id": 579,
          "title": "Project Apidom",
          "thumbnail": "https://www.freetogame.com/g/579/thumbnail.jpg",
          "short_description": "A free-to-play apocalyptic extraction RPG with MOBA-like combat.",
          "game_url": "https://www.freetogame.com/open/project-apidom",
          "genre": "MOBA",
          "platform": "PC (Windows)",
          "publisher": "Breach.gg, RedTigerPro",
          "developer": "Breach.gg",
          "release_date": "2024-03-29",
          "freetogame_profile_url": "https://www.freetogame.com/project-apidom"
        },
        {
          "id": 578,
          "title": "Predecessor",
          "thumbnail": "https://www.freetogame.com/g/578/thumbnail.jpg",
          "short_description": "A free-to-play MOBA shooter developed and published by Omeda Studios.",
          "game_url": "https://www.freetogame.com/open/predecessor",
          "genre": "MOBA",
          "platform": "PC (Windows)",
          "publisher": "Omeda Studios",
          "developer": "Omeda Studios",
          "release_date": "2024-03-28",
          "freetogame_profile_url": "https://www.freetogame.com/predecessor"
        },
        {
          "id": 575,
          "title": "One Punch Man: World",
          "thumbnail": "https://www.freetogame.com/g/575/thumbnail.jpg",
          "short_description": "A free-to-play multiplayer 3D action game from Crunchyroll Games.",
          "game_url": "https://www.freetogame.com/open/one-punch-man-world",
          "genre": "Action Game",
          "platform": "PC (Windows)",
          "publisher": "Perfect World Games",
          "developer": "Crunchyroll",
          "release_date": "2024-01-31",
          "freetogame_profile_url": "https://www.freetogame.com/one-punch-man-world"
        },
        {
          "id": 576,
          "title": "Battle Teams 2",
          "thumbnail": "https://www.freetogame.com/g/576/thumbnail.jpg",
          "short_description": "A multiplayer tactical shooter with an Eastern aesthetic.",
          "game_url": "https://www.freetogame.com/open/battle-teams-2",
          "genre": "Shooter",
          "platform": "PC (Windows)",
          "publisher": "Wizard Games Global",
          "developer": "Wizard Games Global",
          "release_date": "2024-01-31",
          "freetogame_profile_url": "https://www.freetogame.com/battle-teams-2"
        },
        {
          "id": 62,
          "title": "Kritika: Zero",
          "thumbnail": "https://www.freetogame.com/g/62/thumbnail.jpg",
          "short_description": "A free-to-play hack-and-slash MMORPG with both a single-player adventure combat from Valofe. ",
          "game_url": "https://www.freetogame.com/open/kritika",
          "genre": "MMORPG",
          "platform": "PC (Windows)",
          "publisher": "Valofe",
          "developer": "Valofe",
          "release_date": "2024-01-25",
          "freetogame_profile_url": "https://www.freetogame.com/kritika"
        },
      ]
    },
    {
      id: 2,
      name: "MMORPG",
      games: [
        {
          "id": 521,
          "title": "Diablo Immortal",
          "thumbnail": "https://www.freetogame.com/g/521/thumbnail.jpg",
          "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
          "game_url": "https://www.freetogame.com/open/diablo-immortal",
          "genre": "MMOARPG",
          "platform": "PC (Windows)",
          "publisher": "Blizzard Entertainment",
          "developer": "Blizzard Entertainment",
          "release_date": "2022-06-02",
          "freetogame_profile_url": "https://www.freetogame.com/diablo-immortal"
        },
        {
          "id": 517,
          "title": "Lost Ark",
          "thumbnail": "https://www.freetogame.com/g/517/thumbnail.jpg",
          "short_description": "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
          "game_url": "https://www.freetogame.com/open/lost-ark",
          "genre": "ARPG",
          "platform": "PC (Windows)",
          "publisher": "Amazon Games",
          "developer": "Smilegate RPG",
          "release_date": "2022-02-11",
          "freetogame_profile_url": "https://www.freetogame.com/lost-ark"
        },
        {
          "id": 475,
          "title": "Genshin Impact",
          "thumbnail": "https://www.freetogame.com/g/475/thumbnail.jpg",
          "short_description": "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
          "game_url": "https://www.freetogame.com/open/genshin-impact",
          "genre": "Action RPG",
          "platform": "PC (Windows)",
          "publisher": "miHoYo",
          "developer": "miHoYo",
          "release_date": "2020-09-28",
          "freetogame_profile_url": "https://www.freetogame.com/genshin-impact"
        },
        {
          "id": 11,
          "title": "Neverwinter",
          "thumbnail": "https://www.freetogame.com/g/11/thumbnail.jpg",
          "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
          "game_url": "https://www.freetogame.com/open/neverwinter",
          "genre": "MMORPG",
          "platform": "PC (Windows)",
          "publisher": "Perfect World Entertainment",
          "developer": "Cryptic Studios",
          "release_date": "2013-12-06",
          "freetogame_profile_url": "https://www.freetogame.com/neverwinter"
        },
        {
          "id": 380,
          "title": "Dark Orbit Reloaded",
          "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
          "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
          "game_url": "https://www.freetogame.com/open/darkorbit",
          "genre": "Shooter",
          "platform": "Web Browser",
          "publisher": "Bigpoint",
          "developer": "Bigpoint",
          "release_date": "2006-12-11",
          "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
        },
      ]
    },
    {
      id: 3,
      name: "Shooter",
      games: [
        {
          "id": 540,
          "title": "Overwatch 2",
          "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
          "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
          "game_url": "https://www.freetogame.com/open/overwatch-2",
          "genre": "Shooter",
          "platform": "PC (Windows)",
          "publisher": "Activision Blizzard",
          "developer": "Blizzard Entertainment",
          "release_date": "2022-10-04",
          "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
        },
        {
          "id": 516,
          "title": "PUBG: BATTLEGROUNDS",
          "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
          "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
          "game_url": "https://www.freetogame.com/open/pubg",
          "genre": "Shooter",
          "platform": "PC (Windows)",
          "publisher": "KRAFTON, Inc.",
          "developer": "KRAFTON, Inc.",
          "release_date": "2022-01-12",
          "freetogame_profile_url": "https://www.freetogame.com/pubg"
        },
        {
          "id": 508,
          "title": "Enlisted",
          "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
          "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
          "game_url": "https://www.freetogame.com/open/enlisted",
          "genre": "Shooter",
          "platform": "PC (Windows)",
          "publisher": "Gaijin Entertainment",
          "developer": "Darkflow Software",
          "release_date": "2021-04-08",
          "freetogame_profile_url": "https://www.freetogame.com/enlisted"
        },
        {
          "id": 380,
          "title": "Dark Orbit Reloaded",
          "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
          "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
          "game_url": "https://www.freetogame.com/open/darkorbit",
          "genre": "Shooter",
          "platform": "Web Browser",
          "publisher": "Bigpoint",
          "developer": "Bigpoint",
          "release_date": "2006-12-11",
          "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
        },
        {
          "id": 515,
          "title": "Halo Infinite",
          "thumbnail": "https://www.freetogame.com/g/515/thumbnail.jpg",
          "short_description": "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
          "game_url": "https://www.freetogame.com/open/halo-infinite",
          "genre": "Shooter",
          "platform": "PC (Windows)",
          "publisher": "Xbox Game Studios",
          "developer": "343 Industries",
          "release_date": "2021-11-15",
          "freetogame_profile_url": "https://www.freetogame.com/halo-infinite"
        },
      ]
    },
    // {
    //   id: 4,
    //   name: "Action",
    //   games: [
    //     {
    //       "id": 540,
    //       "title": "Overwatch 2",
    //       "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
    //       "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
    //       "game_url": "https://www.freetogame.com/open/overwatch-2",
    //       "genre": "Shooter",
    //       "platform": "PC (Windows)",
    //       "publisher": "Activision Blizzard",
    //       "developer": "Blizzard Entertainment",
    //       "release_date": "2022-10-04",
    //       "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    //     },
    //     {
    //       "id": 521,
    //       "title": "Diablo Immortal",
    //       "thumbnail": "https://www.freetogame.com/g/521/thumbnail.jpg",
    //       "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
    //       "game_url": "https://www.freetogame.com/open/diablo-immortal",
    //       "genre": "MMOARPG",
    //       "platform": "PC (Windows)",
    //       "publisher": "Blizzard Entertainment",
    //       "developer": "Blizzard Entertainment",
    //       "release_date": "2022-06-02",
    //       "freetogame_profile_url": "https://www.freetogame.com/diablo-immortal"
    //     },
    //     {
    //       "id": 517,
    //       "title": "Lost Ark",
    //       "thumbnail": "https://www.freetogame.com/g/517/thumbnail.jpg",
    //       "short_description": "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
    //       "game_url": "https://www.freetogame.com/open/lost-ark",
    //       "genre": "ARPG",
    //       "platform": "PC (Windows)",
    //       "publisher": "Amazon Games",
    //       "developer": "Smilegate RPG",
    //       "release_date": "2022-02-11",
    //       "freetogame_profile_url": "https://www.freetogame.com/lost-ark"
    //     },
    //     {
    //       "id": 516,
    //       "title": "PUBG: BATTLEGROUNDS",
    //       "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
    //       "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    //       "game_url": "https://www.freetogame.com/open/pubg",
    //       "genre": "Shooter",
    //       "platform": "PC (Windows)",
    //       "publisher": "KRAFTON, Inc.",
    //       "developer": "KRAFTON, Inc.",
    //       "release_date": "2022-01-12",
    //       "freetogame_profile_url": "https://www.freetogame.com/pubg"
    //     },
    //     {
    //       "id": 508,
    //       "title": "Enlisted",
    //       "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
    //       "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    //       "game_url": "https://www.freetogame.com/open/enlisted",
    //       "genre": "Shooter",
    //       "platform": "PC (Windows)",
    //       "publisher": "Gaijin Entertainment",
    //       "developer": "Darkflow Software",
    //       "release_date": "2021-04-08",
    //       "freetogame_profile_url": "https://www.freetogame.com/enlisted"
    //     },
    //   ]
    // },
  ]
  return (
    <main className="flex font-inter">
      <div id="navbar" className="">
        <NavBar active="freegames" />

      </div>
      <div className="flex flex-col justify-between h-full w-screen m-6">
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
            <div id="games" className="flex justify-between h-full">
              {category.games.map(game => (
                <div key={game.id} className="flex flex-col w-72 h-full">
                  <img
                    src={game.thumbnail}
                    alt="thumbnail"
                    className="rounded-primary"
                  />
                  <span className="text-2xl font-normal text-gray truncate">{game.title}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>

    </main>
  );
}
