export class Serie {
    type: string;
    data: number[];
    name: string;
    color: string;
    axis: string;

    constructor(type: string, data: number[], name: string,
                color: string, axis: string) {
        this.type = type;
        this.data = data;
        this.name = name;
        this.color = color;
        this.axis = axis;
    }
}