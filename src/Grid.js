import { Cell } from "./Cell";

export class Grid {
    constructor(p, rows, cols) {
        this.p = p;
        this.rows = rows;
        this.cols = cols;
        this.width = p.width / cols;
        this.height = p.height / rows;
        this.grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this.build();
    }

    build() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = new Cell(this.p, i, j, this.width, this.height, this.rows, this.cols);
            }
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j].addNeighbors(this.grid);
            }
        }
    }

    show() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j].show();
            }
        }
    }

    log() {
        console.log(this.grid);
    }

    getRandomCell() {
        let p = this.p;

        let i = p.floor(p.random(0, this.rows - 1));
        let j = p.floor(p.random(0, this.cols - 1));
        return this.grid[i][j];
    }

    getGrid() {
        return this.grid;
    }
}
