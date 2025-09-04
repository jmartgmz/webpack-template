// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import catimage from "./cat.jpg";

console.log(greeting);
   
const image = document.createElement("img");
image.src = catimage;
   
document.body.appendChild(image);
