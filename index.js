const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = (array, init) => {
//     return array.reduce((previousValue, currentValue) => (previousValue + currentValue), init);
// };

// console.log(totalBatteries(batteryBatches, 0));

let totalBatteries = batteryBatches.reduce((previousValue, currentValue) => (previousValue + currentValue), 0);

console.log(totalBatteries);

// function batteries(array, init){
//     let totalBatteries = array.reduce(
//         (previousValue, currentValue) => previousValue + currentValue, init)
//     return totalBatteries;
// };

// console.log(batteries(batteryBatches, 0));