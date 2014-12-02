/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../services/WeatherService.ts" />
/// <reference path="../models/City.ts" />
/// <reference path="../VMs/CityViewModel.ts" />
/// <reference path="../dtos/CityCurrentWeatherInfoDto.ts" />
/// <reference path="../dtos/CitiesCurrentWeatherInfoDto.ts" />
define(["require", "exports", 'plugins/router', 'knockout', 'models/City', 'VMs/CityViewModel', 'services/WeatherService', 'utils/Utils'], function(require, exports, router, ko, CityImport, CityViewModelImport, WeatherService, Utils) {
    var City = CityImport.City;
    var CityViewModel = CityViewModelImport.CityViewModel;

    exports.message = "Analytics";
    exports.cityViewModels = ko.observableArray([]);
    exports.cityIds = [
        Utils.Constants.CopenhagenCityId,
        Utils.Constants.SofiaCityId,
        Utils.Constants.LondonCityId,
        Utils.Constants.PaloAltoCityId,
        Utils.Constants.BostonCityId,
        Utils.Constants.SydneyCityId,
        Utils.Constants.AustinCityId,
        Utils.Constants.GurgaonCityId,
        Utils.Constants.MunichCityId];

    function activate() {
        if (this.cityViewModels() && this.cityViewModels().length > 0) {
            return;
        }

        return WeatherService.GetCurrentWeatherInfo(this.cityIds).done(function (response) {
            var citiesCurrentWeatherInfoDto = response;
            exports.OnCitiesWeatherInfoDtosRetrieved(citiesCurrentWeatherInfoDto);
        });
    }
    exports.activate = activate;

    function goToDetails(cityViewModel) {
        router.navigate('#analyticsdetails/' + encodeURIComponent(cityViewModel.city.id.toString()));
    }
    exports.goToDetails = goToDetails;

    function OnCitiesWeatherInfoDtosRetrieved(citiesCurrentWeatherInfoDto) {
        for (var i = 0; i < citiesCurrentWeatherInfoDto.list.length; i++) {
            var cityDto = citiesCurrentWeatherInfoDto.list[i];
            var city = new City(cityDto.id);
            city.address = Utils.GetOfficeAddress(city.id);
            city.dateTimeStr = Utils.GetDateTimeAsString(city.id);
            var cityViewModel = new CityViewModel(city);
            cityViewModel.copyPropertiesFrom(cityDto);
            this.cityViewModels().push(cityViewModel);
        }
    }
    exports.OnCitiesWeatherInfoDtosRetrieved = OnCitiesWeatherInfoDtosRetrieved;
});
