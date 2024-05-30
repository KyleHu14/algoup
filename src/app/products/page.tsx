import TableData from "@/components/Table/TableData";

export default function ProductsHome() {
    return (
        <main className="relative">
            {/* Table 1 : AMRs */}
            <table className="m-auto mt-10 table-auto text-sm">
                <caption className="mb-4 text-left text-2xl font-bold">
                    Automous Mobile Robots (AMRs)
                </caption>

                <tbody>
                    <tr id="row1">
                        <TableData
                            title="Model Name"
                            links={[
                                "pgt800",
                                "pgt1215",
                                "pgst1",
                                "pgst2",
                                "pgst3",
                            ]}
                            values={[
                                "PG-T 800",
                                "PG-T1200 & 1500",
                                "PG-ST",
                                "PG-ST",
                                "PG-ST",
                            ]}
                        />
                    </tr>
                    <tr id="row2" className="row colPadding">
                        <TableData
                            links={[]}
                            title="Max. Lifting Height (mm)"
                            values={["60", "60", "60", "60", "60"]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Max. Payload Weight (kg)"
                            values={[
                                "800",
                                "1200-1500",
                                "3000/5000",
                                "5000/10000",
                                "10000/50000",
                            ]}
                        />
                    </tr>
                    {/* Hi im going to explain everything here */}
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Pallet Size (mm)"
                            values={[
                                "L1200*W1000",
                                "L1200*W1000",
                                "Customized",
                                "Customized",
                                "Customized",
                            ]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Navigation"
                            values={["SLAM", "SLAM", "SLAM", "SLAM", "SLAM"]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Driving Type"
                            values={[
                                "Tow Steering Wheel Differential Driving",
                                "Tow Steering Wheel Differential Driving",
                                "Omnibearing Steering Wheel Differential Driving",
                                "Omnibearing Steering Wheel Differential Driving",
                                "Omnibearing Steering Wheel Differential Driving",
                            ]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Motor Type"
                            values={[
                                "--",
                                "--",
                                "Servo Motor",
                                "Servo Motor",
                                "Servo Motor",
                            ]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Obstacle Avoidance"
                            values={[
                                "Safety Lidar",
                                "Safety Lidar",
                                "Safety Lidar",
                                "Safety Lidar",
                                "Safety Lidar",
                            ]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="L/W/H (mm)"
                            values={[
                                "980/680/245",
                                "1160/860/245",
                                "Customized",
                                "Customized",
                                "Customized",
                            ]}
                        />
                    </tr>
                </tbody>
            </table>

            {/* Table 2 : AGVs */}
            <table className="m-auto mt-10 table-auto text-sm">
                <caption className="mb-4 text-left text-2xl font-bold">
                    Automous Guided Vehicles
                </caption>

                <tbody>
                    <tr id="row1">
                        <TableData
                            title="Model Name"
                            links={[]}
                            values={[
                                "PG-CD",
                                "PG-S",
                                "PG-CR",
                                "PG-L",
                                "PG-CP",
                                "PG-R",
                                "PG-CQD",
                            ]}
                        />
                    </tr>
                    <tr id="row2" className="row colPadding">
                        <TableData
                            links={[]}
                            title="Max. Lifting Height (mm)"
                            values={[
                                "120",
                                "1600",
                                "3000-5000",
                                "3800",
                                "3000",
                                "4500-8550",
                                "4500-8550",
                            ]}
                        />
                    </tr>
                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Max. Payload Weight (kg)"
                            values={[
                                "2000-3000",
                                "1400",
                                "1500-2000",
                                "1400-1600",
                                "1500-2000",
                                "1400-1600",
                                "2000",
                            ]}
                        />
                    </tr>

                    <tr className="row colPadding">
                        <TableData
                            links={[]}
                            title="Aisle Width(mm)"
                            values={[
                                "2900",
                                "2400",
                                "2900",
                                "2900",
                                "3100",
                                "3200",
                                "2830",
                            ]}
                        />
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
