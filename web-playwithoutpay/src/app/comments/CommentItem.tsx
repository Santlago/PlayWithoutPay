"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { destroy } from "../actions/comments/destroy"
import { Textarea } from "@nextui-org/react"
import { OptionActions } from "@/components/OptionsActions"

interface CommentItemProps {
    comment: Comment
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

    const formatTimeAgo = (commentDate: string): string => {
        const now = new Date();
        const datePosted = new Date(commentDate);
        const diff = now.getTime() - datePosted.getTime();
    
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
    
        if (weeks > 0) {
          return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
          return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
          return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
          return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
          return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        }
      };

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
                            {formatTimeAgo(comment.date)}
                        </span> 
                        <OptionActions onEdit={() => router.push(`/comments/${comment.id}`)} onDelete={handleDelete} />
                    </div>
                }
            />
        </div>
      );
}