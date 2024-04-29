"use client"

import { update } from "@/app/actions/comments/update"
import { SubmitButton } from "@/components/SubmitButton"
import { Input } from "@nextui-org/react"
import { useFormState } from "react-dom"

const initialState = {
    messageNome: '',
}

export function EditForm(comment: Comment) {
    const [state, formAction] = useFormState(update, initialState)

    return(
        <form action={formAction}>
            <input type="hidden" name="id" value={comment.id} />
            <h2>Editar comentário</h2>
            <input type="hidden" key="gameId" name="gameId" value={comment.gameId}></input>
            <Input 
                key="comment"
                name="comment"
                defaultValue={comment.comment}
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
            />
            <SubmitButton/>
        </form>
    )
}