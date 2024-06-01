import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { amrTableData } from "@/data/amrData";
import { agvTableData } from "@/data/agvData";

export default function ProductsHome() {
    return (
        <main className="px-[9rem] pt-12">
            {/* Table 1 AMRs */}
            <Table>
                <TableCaption>
                    Automous Mobile Robots
                    <div className="text-[1rem] font-medium text-gray-600">
                        Powerful, self sustaining, high quality robots.
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Model Name</TableHead>
                        <TableHead>Max Lifting Height (mm)</TableHead>
                        <TableHead>Max Payload Weight (kg)</TableHead>
                        <TableHead>Pallet Size (mm)</TableHead>
                        <TableHead>Navigation</TableHead>
                        <TableHead>Driving Type</TableHead>
                        <TableHead>Motor Type</TableHead>
                        <TableHead>Obstacle Avoidance</TableHead>
                        <TableHead>L/W/H (mm)</TableHead>
                        {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {amrTableData.map((robot) => (
                        <TableRow key={robot.id}>
                            <TableCell className="font-semibold">
                                {robot.name}
                            </TableCell>
                            <TableCell>{robot.liftHeight}</TableCell>
                            <TableCell>{robot.liftWeight}</TableCell>
                            <TableCell>{robot.palletSize}</TableCell>
                            <TableCell>{robot.navigation}</TableCell>
                            <TableCell>{robot.drivingType}</TableCell>
                            <TableCell>{robot.motorType}</TableCell>
                            <TableCell>{robot.obstacleAvoidance}</TableCell>
                            <TableCell>{robot.measurements}</TableCell>
                            <TableCell>
                                <Link href={`/products/${robot.id}`}>
                                    <Button variant="outline" size="icon">
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Table 2 AGVs */}
            <Table className="mt-12">
                <TableCaption>
                    Automous Guided Vehicles
                    <div className="text-[1rem] font-medium text-gray-600">
                        Easy to operate, intuitive controls, and reliable.
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Model Name</TableHead>
                        <TableHead>Max Lifting Height</TableHead>
                        <TableHead>Max Payload Weight</TableHead>
                        <TableHead>Aisle Width</TableHead>
                        {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agvTableData.map((robot) => (
                        <TableRow key={robot.id}>
                            <TableCell className="font-semibold">
                                <Link href={`/products/${robot.id}`}>
                                    {robot.name}
                                </Link>
                            </TableCell>
                            <TableCell>{robot.liftHeight}</TableCell>
                            <TableCell>{robot.liftWeight}</TableCell>
                            <TableCell>{robot.aisleWidth}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
}
