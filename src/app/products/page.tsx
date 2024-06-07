import { ChevronRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import Link from "next/link"

// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";

// import { amrTableData } from "../../../data/amrTableData";
// import { agvTableData } from "../../../data/agvTableData";

import {
    amrCategories,
    agvCategories,
    ProductCategoryType,
} from "../../../data/productCategories"

import ProductCard from "./ProductCard"

export default function ProductsHome() {
    return (
        <main className="flex flex-col gap-16 xl:px-28 xl:py-12">
            {/* AMV Section */}
            <CategoryDisplay
                title="Autonomous Mobile Robots"
                subTitle="Powerful, self sustaining, high quality robots."
                categoryData={amrCategories}
            />

            {/* AGV Section */}
            <CategoryDisplay
                title="Autonomous Guided Vehicles"
                subTitle="Easy to operate, intuitive controls, and reliable."
                categoryData={agvCategories}
            />
        </main>
    )

    // return (
    //     <main className="py-12 xl:px-[7rem] 2xl:px-[9rem]">
    //         {/* Table 1 AMRs */}
    //         <Table>
    //             <TableCaption>
    //                 Automous Mobile Robots
    //                 <div className="text-[1rem] font-medium text-gray-600">
    //                     Powerful, self sustaining, high quality robots.
    //                 </div>
    //             </TableCaption>
    //             <TableHeader>
    //                 <TableRow>
    //                     <TableHead>Model Name</TableHead>
    //                     <TableHead>Max Lifting Height (mm)</TableHead>
    //                     <TableHead>Max Payload Weight (kg)</TableHead>
    //                     <TableHead>Pallet Size (mm)</TableHead>
    //                     <TableHead>Navigation</TableHead>
    //                     <TableHead>Driving Type</TableHead>
    //                     <TableHead>Motor Type</TableHead>
    //                     <TableHead>Obstacle Avoidance</TableHead>
    //                     <TableHead>L/W/H (mm)</TableHead>
    //                     {/* <TableHead className="text-right">Amount</TableHead> */}
    //                 </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //                 {amrTableData.map((robot) => (
    //                     <TableRow key={robot.id}>
    //                         <TableCell className="font-semibold">
    //                             {robot.name}
    //                         </TableCell>
    //                         <TableCell>{robot.liftHeight}</TableCell>
    //                         <TableCell>{robot.liftWeight}</TableCell>
    //                         <TableCell>{robot.palletSize}</TableCell>
    //                         <TableCell>{robot.navigation}</TableCell>
    //                         <TableCell>{robot.drivingType}</TableCell>
    //                         <TableCell>{robot.motorType}</TableCell>
    //                         <TableCell>{robot.obstacleAvoidance}</TableCell>
    //                         <TableCell>{robot.measurements}</TableCell>
    //                         <TableCell>
    //                             <Link href={`/products/${robot.id}`}>
    //                                 <Button variant="outline" size="icon">
    //                                     <ChevronRight className="h-4 w-4" />
    //                                 </Button>
    //                             </Link>
    //                         </TableCell>
    //                     </TableRow>
    //                 ))}
    //             </TableBody>
    //         </Table>
    //         {/* Table 2 AGVs */}
    //         <Table className="mt-12">
    //             <TableCaption>
    //                 Automous Guided Vehicles
    //                 <div className="text-[1rem] font-medium text-gray-600">
    //                     Easy to operate, intuitive controls, and reliable.
    //                 </div>
    //             </TableCaption>
    //             <TableHeader>
    //                 <TableRow>
    //                     <TableHead>Model Name</TableHead>
    //                     <TableHead>Max Lifting Height</TableHead>
    //                     <TableHead>Max Payload Weight</TableHead>
    //                     <TableHead>Aisle Width</TableHead>
    //                     <TableHead>Pallet Type 1</TableHead>
    //                     <TableHead>Pallet Type 2</TableHead>
    //                     <TableHead>Pallet Type 3</TableHead>
    //                     <TableHead>Pallet Type 4</TableHead>
    //                     <TableHead>Pallet Type 5</TableHead>
    //                     <TableHead>Horizontal Sorting</TableHead>
    //                     <TableHead>Ground Storage</TableHead>
    //                     <TableHead>Racking Storage</TableHead>
    //                     <TableHead>High Racking Storage</TableHead>
    //                     {/* <TableHead className="text-right">Amount</TableHead> */}
    //                 </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //                 {agvTableData.map((robot) => (
    //                     <TableRow key={robot.id}>
    //                         <TableCell className="font-semibold">
    //                             {robot.name}
    //                         </TableCell>
    //                         <TableCell>{robot.liftHeight}</TableCell>
    //                         <TableCell>{robot.liftWeight}</TableCell>
    //                         <TableCell>{robot.aisleWidth}</TableCell>
    //                         <BooleanTableCell value={robot.palletType1} />
    //                         <BooleanTableCell value={robot.palletType2} />
    //                         <BooleanTableCell value={robot.palletType3} />
    //                         <BooleanTableCell value={robot.palletType4} />
    //                         <BooleanTableCell value={robot.palletType5} />
    //                         <BooleanTableCell value={robot.horizontalSorting} />
    //                         <BooleanTableCell value={robot.groundStorage} />
    //                         <BooleanTableCell value={robot.rackingStorage} />
    //                         <BooleanTableCell
    //                             value={robot.highRackingStorage}
    //                         />
    //                         <TableCell>
    //                             <Link href={`/products/${robot.id}`}>
    //                                 <Button variant="outline" size="icon">
    //                                     <ChevronRight className="h-4 w-4" />
    //                                 </Button>
    //                             </Link>
    //                         </TableCell>
    //                     </TableRow>
    //                 ))}
    //             </TableBody>
    //         </Table>
    //     </main>
    // );
}

interface ProductHeaderProps {
    title: string
    subTitle: string
}

function ProductHeader({ title, subTitle }: ProductHeaderProps) {
    return (
        <div>
            <h1 className="font-semibold xl:text-2xl">{title}</h1>
            <h2 className="text-[1rem] font-normal text-gray-500">
                {subTitle}
            </h2>
        </div>
    )
}

interface CategoryDisplayProps {
    title: string
    subTitle: string
    categoryData: ProductCategoryType[]
}

function CategoryDisplay({
    title,
    subTitle,
    categoryData,
}: CategoryDisplayProps) {
    return (
        <div className="flex flex-col gap-5">
            <ProductHeader title={title} subTitle={subTitle} />
            {/* AMV Category Card Display */}
            <div className="flex flex-wrap xl:gap-20">
                {categoryData.map((categoryObj, index) => {
                    return (
                        <div key={index}>
                            <ProductCard
                                name={categoryObj.name}
                                description={categoryObj.description}
                                imageSrc={categoryObj.imageSrc}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// Renders a table cell if the value is a boolean value
// function BooleanTableCell({ value }: { value: boolean | null }) {
//     if (value !== null && value) {
//         return (
//             <TableCell>
//                 <Check />
//             </TableCell>
//         );
//     } else if (value !== null && !value) {
//         return (
//             <TableCell className="text-center">
//                 <X />
//             </TableCell>
//         );
//     } else {
//         return <TableCell>N/A</TableCell>;
//     }
// }
