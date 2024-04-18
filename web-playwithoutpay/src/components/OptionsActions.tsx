'use client'

import {  
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown, Ellipsis, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface OptionActionProps {
    onEdit: MouseEventHandler,
    onDelete: MouseEventHandler
}

export function OptionActions({onEdit, onDelete}: OptionActionProps){

    return (
        <Dropdown>
        <DropdownTrigger>
            <Ellipsis />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            {/* <Link href={`/comments${commentId.id}`}> */}
            <DropdownItem key="edit" startContent={<Pencil size={18} onClick={onEdit} />} >
                Editar
            </DropdownItem>
            {/* </Link> */}
            <DropdownItem key="delete" startContent={<Trash size={18} />} onClick={onDelete} className="text-danger" color="danger">
                Apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}