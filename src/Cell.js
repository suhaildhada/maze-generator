import p5 from "p5";

export class Cell {
    constructor(p, i, j, width, height, rows, cols) {
        this.p = p;
        this.i = i;
        this.j = j;
        this.width = width;
        this.height = height;
        this.neighbors = [];
        this.canVisit = [];
        this.walls = [true, true, true, true];
        this.visited = false;
        this.rows = rows;
        this.cols = cols;
    }

    show(current = false) {
        /** @type {p5} */
        let p = this.p;

        p.stroke(8, 127, 140);
        p.strokeWeight(5);
        let x = this.i * this.width;
        let y = this.j * this.height;
        let width = this.width;
        let height = this.height;
        let walls = this.walls;
        if (walls[0]) p.line(x, y, x + width, y);
        if (walls[1]) p.line(x + width, y, x + width, y + height);
        if (walls[2]) p.line(x + width, y + height, x, y + height);
        if (walls[3]) p.line(x, y + height, x, y);

        // if (this.visited) {
        //     p.noStroke();

        //     p.fill(79, 119, 45);
        //     p.rect(x, y, width, height);
        // }
    }

    highlight() {
        /** @type {p5} */
        let p = this.p;
        let x = this.i * this.width;
        let y = this.j * this.height;
        let width = this.width;
        let height = this.height;

        p.noStroke();
        p.fill(0);
        p.rect(x, y, width, height);
    }

    checkNeighbors() {
        let out = [];
        for (let neighbor of this.neighbors) {
            if (!neighbor.visited) {
                out.push(neighbor);
            }
        }
        if (out.length > 0) {
            let idx = this.p.floor(this.p.random(0, out.length));
            return out[idx];
        }
        return undefined;
    }

    addNeighbors(grid) {
        let dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        for (const dir of dirs) {
            let newI = this.i + dir[0];
            let newJ = this.j + dir[1];

            if (newI < 0 || newJ < 0 || newI >= this.rows || newJ >= this.cols) continue;
            this.neighbors.push(grid[newI][newJ]);
        }
    }
}
