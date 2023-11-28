import { querySelector } from "./misc";

export const svgns = "http://www.w3.org/2000/svg";

export const cx0 = 50;
export const cy0 = 50;
export const r0 = 45;
export const r = 1;

export const step: number = parseFloat(
  querySelector(".command .multiplicationFactor input").getAttribute("step") ??
    "0.01"
);
console.log("step: ", step);

export const max: number = parseFloat(
  querySelector(".command .multiplicationFactor input").getAttribute("max") ??
    "100"
);
console.log("max: ", max);
