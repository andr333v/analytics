/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../VMs/KendoChartViewModel.ts" />
/// <reference path="../dtos/CityTimeSpanWeatherInfoDto.ts" />
/// <reference path="../services/WeatherService.ts" />
define(["require", "exports", 'jquery', 'VMs/KendoChartViewModelFactory', 'services/WeatherService'], function(require, exports, jQuery, KendoChartViewModelFactory, WeatherService) {
    exports.Message = "Analytics Details";
    exports.forecastChartViewModel;
    exports.historyChartViewModel;
    exports.hasHistory;
    exports.noHistoryDataMessage;

    function activate(cityid) {
        var forecastWeatherInfoPromise = WeatherService.GetForecastWeatherInfo(cityid);
        var historyWeatherInfoPromise = WeatherService.GetHistoryWeatherInfo(cityid);

        return jQuery.when(forecastWeatherInfoPromise, historyWeatherInfoPromise).done(function (response1, response2) {
            var forecastCityTimeSpanDto = response1[0];
            var historyCityTimeSpanDto = response2[0];
            var cityNameAndCountry = forecastCityTimeSpanDto.city.name + ", " + forecastCityTimeSpanDto.city.country;
            exports.hasHistory = historyCityTimeSpanDto.list.length > 0;
            exports.noHistoryDataMessage = "No history data for " + cityNameAndCountry;

            exports.forecastChartViewModel = KendoChartViewModelFactory.CreateKendoChartViewModel(forecastCityTimeSpanDto, cityNameAndCountry, false);
            exports.historyChartViewModel = KendoChartViewModelFactory.CreateKendoChartViewModel(historyCityTimeSpanDto, cityNameAndCountry, true);
        });
    }
    exports.activate = activate;
});
