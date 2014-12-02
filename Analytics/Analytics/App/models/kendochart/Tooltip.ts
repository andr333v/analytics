export class Tooltip {
    visible: boolean;
    format: string;
    template: string;

    constructor(visible: boolean, format: string, template: string) {
        this.visible = visible;
        this.format = format;
        this.template = template;
    }
}