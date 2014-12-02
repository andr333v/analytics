export class ValueAxis {
    name: string;
    color: string;
    min: number;
    max: number;

    constructor(name: string, color: string, min: number, max: number) {
        this.name = name;
        this.color = color;
        this.min = min;
        this.max = max;
    }
}