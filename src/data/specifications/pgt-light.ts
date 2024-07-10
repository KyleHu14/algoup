export const columnHeaders: string[] = ["PG-T 800", "PG-T 1200", "PG-T 1500"]

interface ParameterType {
    keyName: string
    displayName: string
}

export const parameters: ParameterType[] = [
    { keyName: "maxLiftingHeight", displayName: "Max. Lifting Height" },
    { keyName: "maxPayloadWeight", displayName: "Max. Payload Weight" },
    { keyName: "palletSize", displayName: "Pallet Size" },
    { keyName: "navigation", displayName: "Navigation" },
    { keyName: "drivingType", displayName: "Driving Type" },
    { keyName: "motorType", displayName: "Motor Type" },
    { keyName: "obstacleAvoidance", displayName: "Obstacle Avoidance" },
    { keyName: "dimensions", displayName: "Dimensions" },
]

export const pgtLightSpecs = [
    {
        id: "pgt-800",
        name: "PG-T 800",
        maxLiftingHeight: "60",
        maxPayloadWeight: "80",
        palletSize: "L1200*W1000",
        navigation: "SLAM",
        drivingType: "Tow Steering Wheel Differential Driving",
        motorType: "N/A",
        obstacleAvoidance: "Safety Lidar",
        dimensions: "960/680/245",
    },
    {
        id: "pgt-1200",
        name: "PG-T1200/1500",
        maxLiftingHeight: "60",
        maxPayloadWeight: "1200-1500",
        palletSize: "L1200*W1000",
        navigation: "SLAM",
        drivingType: "Tow Steering Wheel Differential Driving",
        motorType: "N/A",
        obstacleAvoidance: "Safety Lidar",
        dimensions: "1160/860/ 245",
    },
    {
        id: "pgt-1500",
        name: "PG-T1200/1500",
        maxLiftingHeight: "60",
        maxPayloadWeight: "1200-1500",
        palletSize: "L1200*W1000",
        navigation: "SLAM",
        drivingType: "Tow Steering Wheel Differential Driving",
        motorType: "N/A",
        obstacleAvoidance: "Safety Lidar",
        dimensions: "1160/860/ 245",
    },
]
