'use client'

import {  
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export function DropDownActions(){
    return (
        <Dropdown>
        <DropdownTrigger>
            <ChevronDown className="w-9 h-9 mr-4" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit" startContent={<Pencil size={18} />} >
                Editar
            </DropdownItem>
            <DropdownItem key="delete" startContent={<Trash size={18} />} className="text-danger" color="danger">
                Apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}