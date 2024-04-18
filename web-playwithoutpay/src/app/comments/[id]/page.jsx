"use client"

import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/comments/update";



export function EditForm({ params }) {
    const commentId = params.id == 0 ? '' : params.id

    return (
        <div>
            <h1>{commentId}</h1>
        </div>
        // <form action={update} className="flex flex-col gap-3 bg-slate-900 p-6 m-6 rounded min-w-[500px]">
        //     <input type="hidden" name="id" value={categoria.id} />
        //     <h2 className="text-2xl font-bold">Editar Categoria {categoria.nome}</h2>
        //     <Input
        //         key="nome"
        //         label="Nome"
        //         name="nome"
        //         defaultValue={categoria.nome}
        //         variant="bordered"
        //         labelPlacement={"outside"}
        //     />

            

        //     <div className="flex justify-around mt-4">
        //         <Link href="/categorias">
        //             <Button variant="bordered" startContent={<ArrowLeft />} >cancelar</Button>
        //         </Link>
        //         <SubmitButton />
        //     </div>
        // </form>
    )
}