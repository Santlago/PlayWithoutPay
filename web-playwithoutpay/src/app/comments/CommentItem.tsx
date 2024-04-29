"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { destroy } from "../actions/comments/destroy"
import { Textarea } from "@nextui-org/react"
import { OptionActions } from "@/components/OptionsActions"

interface CommentItemProps {
    comment: Comment
    gameId: number
}

export default function CommentItem(props: CommentItemProps) {

    const router = useRouter()
    const { comment } = props

    function handleDelete() {
        toast.promise(
            destroy(comment.id),
            {
                loading: 'excluindo...',
                success: "Excluída com sucesso!",
                error: "Erro ao excluir.",
            }
        )
    }

   

    return (
        <div key={comment.id} className="flex items-center">
            <img className="w-20 rounded-full overflow-hidden" src="https://i.pravatar.cc/300" alt="avatar do usuario" />
            <Textarea
                isReadOnly
                label="Autor"
                labelPlacement="outside"
                defaultValue={comment.comment}
                endContent={
                    <div className="flex gap-5">
                        <span className="text-base text-[.9rem] font-normal text-gray">
                            {comment.date}
                        </span> 
                        <OptionActions onEdit={() => router.push(`/comments/${comment.id}`)} onDelete={handleDelete} />
                    </div>
                }
            />
        </div>
      );
}