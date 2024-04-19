import { create } from "@/app/actions/comments/create"
import { NavBar } from "@/components/NavBar"
import { SubmitButton } from "@/components/SubmitButton"
import { Button, Image, Input, Textarea } from "@nextui-org/react"
import Link from "next/link"
import { getComments } from "../../actions/comments/get"

interface Comment {
    id: number,
    comment: String,
    date: string
}

export default async function Game() {
    const gameId = params.id == 0 ? '' : params.id

    const gamePromise = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`)
    const gameData = await gamePromise.json()

    const comments: Comment[] = await getComments()

    return (
        <main className="flex font-inter w-full">
            <div>
                <NavBar />
            </div>
            <div id="main" className="flex justify-center gap-12 h-full w-screen pt-5 ml-[22rem]">
                <div className="flex flex-col gap-5">
                    <Image
                        src={gameData.thumbnail}
                        className="min-w-[20rem]"
                    />
                    <Link href={gameData.game_url} target="blank">
                        <Button className="w-full">Play</Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-12 max-w-[45rem]">
                    <h2 className="text-5xl font-semibold text-color">{gameData.title}</h2>
                    <div className="text-xl font-normal text-gray">
                        <p className="text-color font-semibold text-2xl">{gameData.short_description}</p>
                        <p>Status: {gameData.status}</p>
                        <p>Genre: {gameData.genre}</p>
                        <p>Platform: {gameData.platform}</p>
                        <p>Publisher: {gameData.publisher}</p>
                        <p>Release date: {gameData.release_date}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-color">What do you think about {gameData.title}?</h3>
                        <form action={create} className="flex gap-4">
                            <div className="flex justify-center items-center">
                                <img className="w-14 rounded-full overflow-hidden" src="https://i.pravatar.cc/300" alt="avatar do usuario" />
                            </div>
                            <Input
                                key="comment"
                                name="comment"
                                placeholder={`Write a review for ${gameData.title}! Share your thoughts with our community.`}
                            />
                            <SubmitButton />
                        </form>

                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-color">{gameData.title} Screenshots</h3>
                        <div className="flex gap-5">
                            {gameData.screenshots.map(screenshot => (
                                <div key={screenshot.id}>
                                    <Image
                                        src={screenshot.image}
                                        className="w-[12rem] rounded-[.3rem]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-color">About {gameData.title}</h3>
                        <p className="text-base font-normal text-gray">{gameData.description}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-color">Minimum System Requirements (Windows)</h3>
                        <div className="flex justify-between text-base font-normal text-gray">
                            <div className="flex flex-col">
                                <p>OS<br /><span className="text-color">{gameData.minimum_system_requirements?.os || ''}</span></p>
                                <p>Memory<br /><span className="text-color">{gameData.minimum_system_requirements?.memory || ''}</span></p>
                                <p>Storage<br /><span className="text-color">{gameData.minimum_system_requirements?.storage || ''}</span></p>
                            </div>
                            <div className="flex flex-col">
                                <p>Processor<br /><span className="text-color">{gameData.minimum_system_requirements?.processor || ''}</span></p>
                                <p>Graphics<br /><span className="text-color">{gameData.minimum_system_requirements?.graphics || ''}</span></p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-2xl font-semibold text-color">User Reviews</h3>
                        <div className="flex flex-col gap-5 justify-center">
                            {comments.map(comment => (
                                <div key={comment.id} className="flex items-center">
                                    <img className="w-20 rounded-full overflow-hidden" src="https://i.pravatar.cc/300" alt="avatar do usuario" />
                                    <Textarea
                                        isReadOnly
                                        label="Autor"
                                        labelPlacement="outside"
                                        defaultValue={comment.comment}
                                        // endContent={<OptionActions onDelete={handleDelete(comment.id)}/>}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}