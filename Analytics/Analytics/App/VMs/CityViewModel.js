/// <reference path="../models/City.ts" />
define(["require", "exports", 'utils/Utils'], function(require, exports, Utils) {
    var CityViewModel = (function () {
        function CityViewModel(city) {
            this.city = city;
        }
        CityViewModel.prototype.getFullName = function () {
            return this.city.name + ", " + this.city.countryCode;
        };

        CityViewModel.prototype.getWeatherInfo = function () {
            var temp = this.city.temp + Utils.Constants.TempCelsius;
            var weather = " (" + this.city.weatherDesc + ")";
            return temp + weather;
        };

        CityViewModel.prototype.getPressure = function () {
            return this.city.pressure + Utils.Constants.PressureHpa;
        };

        CityViewModel.prototype.getHumidity = function () {
            return this.city.humidity + Utils.Constants.HumidityPercent;
        };

        CityViewModel.prototype.getWeatherImageUrl = function () {
            return Utils.Constants.ImagesUrl + this.city.weatherIcon + Utils.Constants.PngFileExtension;
        };

        CityViewModel.prototype.copyPropertiesFrom = function (cwi) {
            this.city.name = cwi.name;
            this.city.countryCode = cwi.sys.country;
            this.city.latitude = cwi.coord.lat;
            this.city.longitude = cwi.coord.lon;
            this.city.humidity = cwi.main.humidity;
            this.city.pressure = cwi.main.pressure;
            this.city.temp = cwi.main.temp;
            this.city.weather = cwi.weather[0].main;
            this.city.weatherDesc = cwi.weather[0].description;
            this.city.weatherIcon = cwi.weather[0].icon;
        };
        return CityViewModel;
    })();
    exports.CityViewModel = CityViewModel;
});
