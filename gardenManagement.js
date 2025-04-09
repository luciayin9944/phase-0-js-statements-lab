const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// if-else statement
if (temperature > 80){
    console.log("Watering on");
} else {
    console.log("Watering off");
}

// if-else statement
if (timeOfDay=== "evening" | timeOfDay==="night"){
    console.log("Lights on");
} else {
    console.log("Lights off")
}

// while loop
while (soilMoisture<=40){
    console.log(soilMoisture);
    soilMoisture = soilMoisture + 5;
}