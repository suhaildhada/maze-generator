import { sleep } from "./sleep";

export class Generator {
    constructor(startingCell) {
        this.startingCell = startingCell;
        startingCell.visited = true;
        this.stack = [];
        this.stack.push(startingCell);
    }

    removeWalls(curr, next) {
        let x = curr.i - next.i;
        if (x === 1) {
            curr.walls[3] = false;
            next.walls[1] = false;
        } else if (x === -1) {
            curr.walls[1] = false;
            next.walls[3] = false;
        }

        let y = curr.j - next.j;
        if (y === 1) {
            curr.walls[0] = false;
            next.walls[2] = false;
        } else if (y === -1) {
            curr.walls[2] = false;
            next.walls[0] = false;
        }
    }

    async generate() {
        while (this.stack.length > 0) {
            let current = this.stack.pop();
            current.highlight();
            let next = current.checkNeighbors();
            if (next) {
                this.stack.push(current);
                this.removeWalls(current, next);
                next.visited = true;
                this.stack.push(next);
                current.canVisit.push(next);
            }
            await sleep(100);
        }
    }
}
