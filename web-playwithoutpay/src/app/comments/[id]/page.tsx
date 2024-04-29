import { getById } from "@/app/actions/comments/get-by-id";
import { NavBar } from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";



export default async function EditComment({ params }: Params) {
    const { id } = params
    console.log(id)
    const comment: Comment = await getById(id)
    console.log(comment)

    return (
        <main className="flex">
            <NavBar />
            <div className="flex items-center justify-center h-screen w-full">
                <EditForm {...comment}/>
            </div>
        </main>
    )
}