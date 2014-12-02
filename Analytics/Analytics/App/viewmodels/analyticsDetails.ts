/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../VMs/KendoChartViewModel.ts" />
/// <reference path="../dtos/CityTimeSpanWeatherInfoDto.ts" />
/// <reference path="../services/WeatherService.ts" />

import jQuery = require('jquery');
import CityTimeSpanWeatherInfoDtoImport = require('dtos/CityTimeSpanWeatherInfoDto');
import KendoChartViewModelImport = require('VMs/KendoChartViewModel');
import KendoChartViewModelFactory = require('VMs/KendoChartViewModelFactory');
import WeatherService = require('services/WeatherService');

import CityTimeSpanWeatherInfoDto = CityTimeSpanWeatherInfoDtoImport.CityTimeSpanWeatherInfoDto;
import KendoChartViewModel = KendoChartViewModelImport.KendoChartViewModel;

export var Message: string = "Analytics Details";
export var forecastChartViewModel: KendoChartViewModel;
export var historyChartViewModel: KendoChartViewModel;
export var hasHistory: boolean;
export var noHistoryDataMessage;

export function activate(cityid: number) {
    var forecastWeatherInfoPromise = WeatherService.GetForecastWeatherInfo(cityid);
    var historyWeatherInfoPromise = WeatherService.GetHistoryWeatherInfo(cityid);

    return jQuery.when(forecastWeatherInfoPromise, historyWeatherInfoPromise)
        .done(function (response1, response2) {
            var forecastCityTimeSpanDto: CityTimeSpanWeatherInfoDto =
                <CityTimeSpanWeatherInfoDto>response1[0];
            var historyCityTimeSpanDto: CityTimeSpanWeatherInfoDto =
                <CityTimeSpanWeatherInfoDto>response2[0];
            var cityNameAndCountry = forecastCityTimeSpanDto.city.name + ", " +
                forecastCityTimeSpanDto.city.country;
            hasHistory = historyCityTimeSpanDto.list.length > 0;
            noHistoryDataMessage = "No history data for " + cityNameAndCountry;

            forecastChartViewModel = KendoChartViewModelFactory.CreateKendoChartViewModel(
                forecastCityTimeSpanDto, cityNameAndCountry, false);
            historyChartViewModel = KendoChartViewModelFactory.CreateKendoChartViewModel(
                historyCityTimeSpanDto, cityNameAndCountry, true);
        });
}