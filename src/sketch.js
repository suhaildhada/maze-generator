import p5 from "p5";
import { Generator } from "./Generator";
import { Grid } from "./Grid";

let grid;
let cols = 15;
let rows = 15;

let width = 700;
let height = 700;
let canvas;
let generator;
/**
 *
 * @param {p5} p
 */
export const mySketch = (p) => {
    p.setup = () => {
        canvas = p.createCanvas(width, height);
        p.background(236, 243, 158);

        let canvasX = p.windowWidth / 2 - p.width / 2;
        let canvasY = p.windowHeight / 2 - p.height / 2;
        canvas.position(canvasX, canvasY);
        grid = new Grid(p, rows, cols);
        generator = new Generator(grid.grid[0][0]);
        generator.generate();
        // grid.log();
    };

    p.draw = () => {
        grid.show();
    };
};
