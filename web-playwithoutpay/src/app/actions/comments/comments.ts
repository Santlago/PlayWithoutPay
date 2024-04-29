"use server"

export async function getLatest() {
    const resp = await fetch(`${process.env.API_BASE_URL}/comment/latest`, { next: { revalidate: 0 } })
    return await resp.json()
}
