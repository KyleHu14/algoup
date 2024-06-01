export const amrTableData = [
    {
        id: "pgt-800",
        name: "PG-T 800",
        liftHeight: "60",
        liftWeight: "80",
        palletSize: "L1200*W1000",
        navigation: "SLAM",
        drivingType: "Tow Steering Wheel Differential Driving",
        motorType: "N/A",
        obstacleAvoidance: "Safety Lidar",
        measurements: "960/680/245",
    },
    {
        id: "pgt-1200-1500",
        name: "PG-T1200/1500",
        liftHeight: "60",
        liftWeight: "1200-1500",
        palletSize: "L1200*W1000",
        navigation: "SLAM",
        drivingType: "Tow Steering Wheel Differential Driving",
        motorType: "N/A",
        obstacleAvoidance: "Safety Lidar",
        measurements: "1160/860/ 245",
    },
    {
        id: "pgst-1",
        name: "PG-ST",
        liftHeight: "60",
        liftWeight: "3000/5000",
        palletSize: "Custom",
        navigation: "SLAM",
        drivingType: "Omnibearing Steering Wheel Driving",
        motorType: "Servo Motor",
        obstacleAvoidance: "Safety Lidar",
        measurements: "Custom",
    },
    {
        id: "pgst-2",
        name: "PG-ST",
        liftHeight: "60",
        liftWeight: "5000/10000",
        palletSize: "Custom",
        navigation: "SLAM",
        drivingType: "Omnibearing Steering Wheel Driving",
        motorType: "Servo Motor",
        obstacleAvoidance: "Safety Lidar",
        measurements: "Custom",
    },
    {
        id: "pgst-3",
        name: "PG-ST",
        liftHeight: "60",
        liftWeight: "10000/50000",
        palletSize: "Custom",
        navigation: "SLAM",
        drivingType: "Omnibearing Steering Wheel Driving",
        motorType: "Servo Motor",
        obstacleAvoidance: "Safety Lidar",
        measurements: "Custom",
    },
];

interface Product {
    name: string;
    subTitle: string;
    description: string;
    parameters: any[];
}

interface AMRProductData {
    [key: string]: Product;
}

export const amrProductData: AMRProductData = {
    "pgt-800": {
        name: "PG-T 800",
        subTitle: "AMR product subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis velit in mattis tincidunt. Vestibulum iaculis, felis vehicula pellentesque commodo, neque lorem dignissim orci, mollis rhoncus orci massa consequat libero. Nulla ac posuere tellus, nec ultricies enim. Etiam in finibus diam. Aliquam erat volutpat. Nullam interdum, justo sed scelerisque dignissim, tellus arcu aliquet metus, vitae varius lectus arcu in magna. Duis fermentum scelerisque arcu, ut pretium elit euismod vel. Ut tellus eros, hendrerit sed pellentesque a, iaculis in dolor. In pulvinar est velit, at fermentum augue congue nec. Quisque ut ipsum eu nisi iaculis ultricies eget eget mauris. Ut nec vestibulum orci, et auctor augue. ",
        parameters: [],
    },
    "pgt-1200-1500": {
        name: "PG-T1200/1500",
        subTitle: "AMR product subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis velit in mattis tincidunt. Vestibulum iaculis, felis vehicula pellentesque commodo, neque lorem dignissim orci, mollis rhoncus orci massa consequat libero. Nulla ac posuere tellus, nec ultricies enim. Etiam in finibus diam. Aliquam erat volutpat. Nullam interdum, justo sed scelerisque dignissim, tellus arcu aliquet metus, vitae varius lectus arcu in magna. Duis fermentum scelerisque arcu, ut pretium elit euismod vel. Ut tellus eros, hendrerit sed pellentesque a, iaculis in dolor. In pulvinar est velit, at fermentum augue congue nec. Quisque ut ipsum eu nisi iaculis ultricies eget eget mauris. Ut nec vestibulum orci, et auctor augue. ",
        parameters: [],
    },
    "pgst-1": {
        name: "PG-ST",
        subTitle: "AMR product subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis velit in mattis tincidunt. Vestibulum iaculis, felis vehicula pellentesque commodo, neque lorem dignissim orci, mollis rhoncus orci massa consequat libero. Nulla ac posuere tellus, nec ultricies enim. Etiam in finibus diam. Aliquam erat volutpat. Nullam interdum, justo sed scelerisque dignissim, tellus arcu aliquet metus, vitae varius lectus arcu in magna. Duis fermentum scelerisque arcu, ut pretium elit euismod vel. Ut tellus eros, hendrerit sed pellentesque a, iaculis in dolor. In pulvinar est velit, at fermentum augue congue nec. Quisque ut ipsum eu nisi iaculis ultricies eget eget mauris. Ut nec vestibulum orci, et auctor augue. ",
        parameters: [],
    },
    "pgst-2": {
        name: "PG-ST",
        subTitle: "AMR product subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis velit in mattis tincidunt. Vestibulum iaculis, felis vehicula pellentesque commodo, neque lorem dignissim orci, mollis rhoncus orci massa consequat libero. Nulla ac posuere tellus, nec ultricies enim. Etiam in finibus diam. Aliquam erat volutpat. Nullam interdum, justo sed scelerisque dignissim, tellus arcu aliquet metus, vitae varius lectus arcu in magna. Duis fermentum scelerisque arcu, ut pretium elit euismod vel. Ut tellus eros, hendrerit sed pellentesque a, iaculis in dolor. In pulvinar est velit, at fermentum augue congue nec. Quisque ut ipsum eu nisi iaculis ultricies eget eget mauris. Ut nec vestibulum orci, et auctor augue. ",
        parameters: [],
    },
    "pgst-3": {
        name: "PG-ST",
        subTitle: "AMR product subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis velit in mattis tincidunt. Vestibulum iaculis, felis vehicula pellentesque commodo, neque lorem dignissim orci, mollis rhoncus orci massa consequat libero. Nulla ac posuere tellus, nec ultricies enim. Etiam in finibus diam. Aliquam erat volutpat. Nullam interdum, justo sed scelerisque dignissim, tellus arcu aliquet metus, vitae varius lectus arcu in magna. Duis fermentum scelerisque arcu, ut pretium elit euismod vel. Ut tellus eros, hendrerit sed pellentesque a, iaculis in dolor. In pulvinar est velit, at fermentum augue congue nec. Quisque ut ipsum eu nisi iaculis ultricies eget eget mauris. Ut nec vestibulum orci, et auctor augue. ",
        parameters: [],
    },
};
