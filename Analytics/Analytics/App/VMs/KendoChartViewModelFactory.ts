import KendoChartViewModelImport = require('VMs/KendoChartViewModel');
import CityTimeSpanWeatherInfoDtoImport = require('dtos/CityTimeSpanWeatherInfoDto');
import CityCurrentWeatherInfoDtoImport = require('dtos/CityCurrentWeatherInfoDto');
import TitleImport = require('models/kendochart/Title');
import LegendImport = require('models/kendochart/Legend');
import SerieImport = require('models/kendochart/Serie');
import ValueAxisImport = require('models/kendochart/ValueAxis');
import CategoryAxisImport = require('models/kendochart/CategoryAxis');
import LabelsImport = require('models/kendochart/Labels');
import TooltipImport = require('models/kendochart/Tooltip');
import ChartAreaImport = require('models/kendochart/ChartArea');
import Utils = require('utils/Utils');

import KendoChartViewModel = KendoChartViewModelImport.KendoChartViewModel;
import CityTimeSpanWeatherInfoDto = CityTimeSpanWeatherInfoDtoImport.CityTimeSpanWeatherInfoDto;
import CityCurrentWeatherInfoDto = CityCurrentWeatherInfoDtoImport.CityCurrentWeatherInfoDto;
import Title = TitleImport.Title;
import Legend = LegendImport.Legend;
import Serie = SerieImport.Serie;
import ValueAxis = ValueAxisImport.ValueAxis;
import CategoryAxis = CategoryAxisImport.CategoryAxis;
import Labels = LabelsImport.Labels;
import Tooltip = TooltipImport.Tooltip;
import ChartArea = ChartAreaImport.ChartArea;

export function CreateKendoChartViewModel(cityTimeSpanWeatherInfoDto: CityTimeSpanWeatherInfoDto,
    cityNameAndCountry: string, isHistory: boolean): KendoChartViewModel {
    var title: Title = new Title(GetTitle(cityNameAndCountry, isHistory));
    var legend: Legend = new Legend("bottom");

    var tempSerie: Serie = new Serie("line", GetTemperatureData(cityTimeSpanWeatherInfoDto, isHistory), "Temperature [&deg;C]", "#ff1c1c", "temp");
    var windSerie: Serie = new Serie("line", GetWindData(cityTimeSpanWeatherInfoDto), "Wind Speed [m/s]", "#73c100", "wind");
    var series: Serie[] = [tempSerie, windSerie];

    var windValueAxis = new ValueAxis("wind", "#73c100", 0, 15);
    var tempValueAxis = new ValueAxis("temp", "#ff1c1c", -10, 40);
    var valueAxes: ValueAxis[] = [windValueAxis, tempValueAxis];

    var categories: string[] = GetCategories(cityTimeSpanWeatherInfoDto, isHistory);
    var labels: Labels = new Labels(45);
    var categoryAxis = new CategoryAxis(categories, labels, [0, categories.length + 1], true);

    var tooltip: Tooltip = new Tooltip(true, "{0}", "#= category #: #= value #");
    var chartArea: ChartArea = new ChartArea(1200, 800);

    return new KendoChartViewModel(title, legend, series, valueAxes, categoryAxis, tooltip, chartArea);
}

export function GetTitle(cityNameAndCountry: string, isHistory: boolean) {
    if (isHistory) {
        return "5 days history weather info for " + cityNameAndCountry;
    }
    else {
        return "5 days weather forecast for " + cityNameAndCountry;
    }
}

export function GetTemperatureData(cityTimeSpanDto: CityTimeSpanWeatherInfoDto, isHistory: boolean): number[] {
    var result: number[] = [];
    for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
        var temp: number = cityTimeSpanDto.list[i].main.temp;
        if (isHistory) {
            result[i] = GetTempAsCelsius(temp);
        }
        else {
            result[i] = temp;
        }
    }

    return result;
}

export function GetTempAsCelsius(tempAsKelvin: number) {
    return tempAsKelvin - 273.15;
}

export function GetWindData(cityTimeSpanDto: CityTimeSpanWeatherInfoDto): number[] {
    var result: number[] = [];
    for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
        result[i] = cityTimeSpanDto.list[i].wind.speed;
    }

    return result;
}

export function GetCategories(cityTimeSpanDto: CityTimeSpanWeatherInfoDto, isHistory: boolean): string[] {
    var result: string[] = [];
    for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
        result[i] = GetCategory(cityTimeSpanDto.list[i], isHistory);
    }

    return result;
}

export function GetCategory(cityWeatherInfoDto: CityCurrentWeatherInfoDto, isHistory: boolean): string {
    if (isHistory) {
        var date: Date = new Date(cityWeatherInfoDto.dt * 1000);
        var dateStr = Utils.GetDateAsString(date);
        var timeStr = Utils.GetTimeAsString(date);
        return dateStr + " " + timeStr;
    }
    else {
        var dateAsText = cityWeatherInfoDto.dt_txt;
        //strip seconds
        return dateAsText.substr(0, dateAsText.length - 3);
    }
}