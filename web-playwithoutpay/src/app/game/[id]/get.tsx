export async function getComments() {
    const resp = await fetch(`${process.env.API_BASE_URL}/comment`, { next: { revalidate: 0 } })
    return await resp.json()
}