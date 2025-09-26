import {formatCurrency} from "../utils/money.js";

console.log("test suite: formatCurrency");

console.log("converts cents into dollars");

if (formatCurrency(2095) === "20.95") {
    console.log("Test passed: formatCurrency(2095) === '20.95'");
} else {
    console.error("Test failed: formatCurrency(2095) !== '20.95'");
}

console.log("works with 0");

if (formatCurrency(0) === "0.00") {
    console.log("Test passed: formatCurrency(0) === '0'");
} else {
    console.error("Test failed: formatCurrency(0) !== '0'");
}

console.log("rounds up to the nearest cent");

if (formatCurrency(2000.5) === "20.01") {
    console.log("Test passed: formatCurrency(2000.5) === '20.01'");
} else {
    console.error("Test failed: formatCurrency(2000.5) !== '20.01'");
}