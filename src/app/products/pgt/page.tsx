import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import Link from "next/link"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { amrTableData } from "../../../../data/amrTableData"

export default function PGSTpage() {
    return (
        <main className="py-12 xl:px-[7rem] 2xl:px-[9rem]">
            <h1 className="mb-3 font-bold 2xl:text-4xl">PG-T</h1>
            <h2 className="max-w-[45rem] text-zinc-600 2xl:text-xl">
                Our PG-T autonomous mobile robots are perfect for scenarios
                where you need something that is fast and efficient. We offer 3
                variations of the PG-ST.
            </h2>
        </main>
    )
}
