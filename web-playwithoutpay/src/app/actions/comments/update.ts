"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))

    const id = formData.get("id")

    const currentDate = new Date();

    const dateString = currentDate.toISOString();

    const gameId = formData.get("gameId")
    
    const data = {
      comment: formData.get("comment"),
      date: dateString,
      gameId: gameId
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/comment/${id}`, options)
    
    if (resp.ok){
      redirect(`/game/${gameId}`)
    }

    if (resp.status == 400){
      return {
        messageNome: "Validação falhou"
      }
    }

    if (resp.status == 404){
      return {
        messageNome: "Categoria não encontrada"
      }
    }
    
  }
