/// <reference path="Labels.ts" />
define(["require", "exports"], function(require, exports) {
    var CategoryAxis = (function () {
        function CategoryAxis(categories, labels, axisCrossingValues, justified) {
            this.categories = categories;
            this.labels = labels;
            this.axisCrossingValues = axisCrossingValues;
            this.justified = justified;
        }
        return CategoryAxis;
    })();
    exports.CategoryAxis = CategoryAxis;
});
