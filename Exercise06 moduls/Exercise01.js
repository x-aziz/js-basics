// ES6 Module = An external file that contains reusable code that can be imported into other Javascript files Write reusable code for many different apps.
//  Can contain variables, classes, functions .. and more Introduced as part of ECMAScript 2015 update
import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";
console.log(PI);
const Circumference = getCircumference(10);
const Area = getArea(10);
const Volume = getVolume(10);
console.log(`${Circumference.toFixed(2)}CM`);
console.log(`${Area.toFixed(2)}CM^2`);
console.log(`${Volume.toFixed(2)}CM^3`);
