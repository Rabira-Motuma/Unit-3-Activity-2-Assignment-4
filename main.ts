/**
* @author Rabira Motuma
* @version 1.0.0
* @date 2025-11-28
* @fileoverview This calculates the minimum amount of coins used to give change.
*/


// constants
const interest: number = 0.07;


// variables
let initialValueAsString: string;
let initialValueAsNumber: number;
let yr1InterestGained: number;
let yr2InterestGained: number;
let yr3InterestGained: number;
let yr4InterestGained: number;
let yr5InterestGained: number;
let yr6InterestGained: number;
let yr7InterestGained: number;
let yr8InterestGained: number;
let yr9InterestGained: number;
let yr10InterestGained: number;
let yr1CurrentValue: number;
let yr2CurrentValue: number;
let yr3CurrentValue: number;
let yr4CurrentValue: number;
let yr5CurrentValue: number;
let yr6CurrentValue: number;
let yr7CurrentValue: number;
let yr8CurrentValue: number;
let yr9CurrentValue: number;
let yr10CurrentValue: number;


// inputs
initialValueAsString = prompt("What is your initial value? ") || "0";


// process
initialValueAsNumber = parseInt(initialValueAsString);
yr1InterestGained = (initialValueAsNumber * interest);
yr1CurrentValue = (initialValueAsNumber + yr1InterestGained);
yr2InterestGained = (yr1CurrentValue * interest);
yr2CurrentValue = (yr1CurrentValue + yr2InterestGained);
yr3InterestGained = (yr2CurrentValue * interest);
yr3CurrentValue = (yr2CurrentValue + yr3InterestGained);
yr4InterestGained = (yr3CurrentValue * interest);
yr4CurrentValue = ( yr3CurrentValue + yr4InterestGained);
yr5InterestGained = (yr4CurrentValue * interest);
yr5CurrentValue = (yr4CurrentValue + yr5InterestGained);
yr6InterestGained = (yr5CurrentValue * interest);
yr6CurrentValue = (yr5CurrentValue + yr6InterestGained);
yr7InterestGained = (yr6CurrentValue * interest);
yr7CurrentValue = (yr6CurrentValue + yr7InterestGained);
yr8InterestGained = (yr7CurrentValue * interest);
yr8CurrentValue = (yr7CurrentValue + yr8InterestGained);
yr9InterestGained = (yr8CurrentValue * interest);
yr9CurrentValue = (yr8CurrentValue + yr9InterestGained);
yr10InterestGained = (yr9CurrentValue * interest);
yr10CurrentValue = (yr9CurrentValue + yr10InterestGained);

// outputs
console.log("\n")
console.log(
  `${"Year".padEnd(10)} ${"Initial Value".padStart(10)} ${"Interest Gained".padStart(20)} ${"Current Value".padStart(20)}`,
);
console.log(
  `${"1".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr1InterestGained.toFixed(2)).padStart(20)} ${("$" + yr1CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"2".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr2InterestGained.toFixed(2)).padStart(20)} ${("$" + yr2CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"3".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr3InterestGained.toFixed(2)).padStart(20)} ${("$" + yr3CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"4".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr4InterestGained.toFixed(2)).padStart(20)} ${("$" + yr4CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"5".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr5InterestGained.toFixed(2)).padStart(20)} ${("$" + yr5CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"6".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr6InterestGained.toFixed(2)).padStart(20)} ${("$" + yr6CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"7".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr7InterestGained.toFixed(2)).padStart(20)} ${("$" + yr7CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"8".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr8InterestGained.toFixed(2)).padStart(20)} ${("$" + yr8CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"9".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr9InterestGained.toFixed(2)).padStart(20)} ${("$" + yr9CurrentValue.toFixed(2)).padStart(20)}`,
);
console.log(
  `${"10".padEnd(10)} ${("$" + initialValueAsNumber.toFixed(0)).padStart(10)} ${("$" + yr10InterestGained.toFixed(2)).padStart(20)} ${("$" + yr10CurrentValue.toFixed(2)).padStart(20)}`,
);

console.log("\nDone.")
