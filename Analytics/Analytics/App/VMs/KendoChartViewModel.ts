/// <reference path="../models/kendochart/ChartArea.ts" />
/// <reference path="../models/kendochart/ValueAxis.ts" />
/// <reference path="../models/kendochart/Tooltip.ts" />
/// <reference path="../models/kendochart/Title.ts" />
/// <reference path="../models/kendochart/Serie.ts" />
/// <reference path="../models/kendochart/Legend.ts" />
/// <reference path="../models/kendochart/CategoryAxis.ts" />

import TitleImport = require('models/kendochart/Title');
import LegendImport = require('models/kendochart/Legend');
import SerieImport = require('models/kendochart/Serie');
import ValueAxisImport = require('models/kendochart/ValueAxis');
import CategoryAxisImport = require('models/kendochart/CategoryAxis');
import TooltipImport = require('models/kendochart/Tooltip');
import CityTimeSpanWeatherInfoDtoImport = require('dtos/CityTimeSpanWeatherInfoDto');
import ChartAreaImport = require('models/kendochart/ChartArea');

import Title = TitleImport.Title;
import Legend = LegendImport.Legend;
import Serie = SerieImport.Serie;
import ValueAxis = ValueAxisImport.ValueAxis;
import CategoryAxis = CategoryAxisImport.CategoryAxis;
import Tooltip = TooltipImport.Tooltip;
import CityTimeSpanWeatherInfoDto = CityTimeSpanWeatherInfoDtoImport.CityTimeSpanWeatherInfoDto;
import ChartArea = ChartAreaImport.ChartArea;

export class KendoChartViewModel {
    title: Title;
    legend: Legend;
    series: Serie[];
    valueAxes: ValueAxis[];
    categoryAxis: CategoryAxis;
    tooltip: Tooltip;
    chartArea: ChartArea;

    constructor(title: Title, legend: Legend, series: Serie[],
        valueAxes: ValueAxis[], categoryAxis: CategoryAxis,
        tooltip: Tooltip, chartArea: ChartArea) {
        this.title = title;
        this.legend = legend;
        this.series = series;
        this.valueAxes = valueAxes;
        this.categoryAxis = categoryAxis;
        this.tooltip = tooltip;
        this.chartArea = chartArea;
    }
}