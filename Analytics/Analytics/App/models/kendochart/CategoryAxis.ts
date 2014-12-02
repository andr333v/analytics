/// <reference path="Labels.ts" />

import LabelsImport = require('models/kendochart/Labels');

export class CategoryAxis {
    categories: string[];
    labels: LabelsImport.Labels;
    axisCrossingValues: number[];
    justified: boolean;

    constructor(categories: string[], labels: LabelsImport.Labels,
            axisCrossingValues: number[], justified: boolean) {
        this.categories = categories;
        this.labels = labels;
        this.axisCrossingValues = axisCrossingValues;
        this.justified = justified;
    }
}