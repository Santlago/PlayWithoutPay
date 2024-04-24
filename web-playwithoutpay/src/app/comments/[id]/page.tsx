"use client"

import { getById } from "@/app/actions/comments/get-by-id";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";



export default async function EditComment({params}: Params) {
    const { id } = params
    console.log(id)
    // const comment: Comment = await getById(id)
    // console.log(comment)

    return (
        <div>
            <h1></h1>
        </div>
    )
}