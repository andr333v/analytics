/// <reference path="../models/kendochart/ChartArea.ts" />
/// <reference path="../models/kendochart/ValueAxis.ts" />
/// <reference path="../models/kendochart/Tooltip.ts" />
/// <reference path="../models/kendochart/Title.ts" />
/// <reference path="../models/kendochart/Serie.ts" />
/// <reference path="../models/kendochart/Legend.ts" />
/// <reference path="../models/kendochart/CategoryAxis.ts" />
define(["require", "exports"], function(require, exports) {
    var KendoChartViewModel = (function () {
        function KendoChartViewModel(title, legend, series, valueAxes, categoryAxis, tooltip, chartArea) {
            this.title = title;
            this.legend = legend;
            this.series = series;
            this.valueAxes = valueAxes;
            this.categoryAxis = categoryAxis;
            this.tooltip = tooltip;
            this.chartArea = chartArea;
        }
        return KendoChartViewModel;
    })();
    exports.KendoChartViewModel = KendoChartViewModel;
});
