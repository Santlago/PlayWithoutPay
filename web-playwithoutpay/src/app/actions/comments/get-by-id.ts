"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_BASE_URL}/comment/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        throw new Error("comment not found")
    }

    return await resp.json()

}