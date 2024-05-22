// Import an installed module from npm
import p5 from "p5";
import { mySketch } from "./sketch.js";
import "./index.css";

console.log("Hello from javascript!");

new p5(mySketch, document.getElementById("sketch"));
