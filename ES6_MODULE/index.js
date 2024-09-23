import {PI, getCircumference,getArea,getVolume} from  "./mathutil.js";

 console.log(PI);
 const circumference = getCircumference(10);
 const Area = getArea(10);
 const Volume = getVolume(10);

 console.log(`${circumference.toFixed(2)} cm`);
 
 console.log(`${Area.toFixed(2)} cm^2`);
 
 console.log(`${Volume.toFixed(2)} cm^3`);