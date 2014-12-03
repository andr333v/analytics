/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../services/WeatherService.ts" />
/// <reference path="../models/City.ts" />
/// <reference path="../VMs/CityViewModel.ts" />
/// <reference path="../dtos/CityCurrentWeatherInfoDto.ts" />
/// <reference path="../dtos/CitiesCurrentWeatherInfoDto.ts" />

import router = require('plugins/router');
import ko = require('knockout');
import CityCurrentWeatherInfoDtoImport = require('dtos/CityCurrentWeatherInfoDto');
import CitiesCurrentWeatherInfoDtoImport = require('dtos/CitiesCurrentWeatherInfoDto');
import CityImport = require('models/City');
import CityViewModelImport = require('VMs/CityViewModel');
import WeatherService = require('services/WeatherService');
import Utils = require('utils/Utils');

import CityCurrentWeatherInfoDto = CityCurrentWeatherInfoDtoImport.CityCurrentWeatherInfoDto;
import CitiesCurrentWeatherInfoDto = CitiesCurrentWeatherInfoDtoImport.CitiesCurrentWeatherInfoDto;
import City = CityImport.City;
import CityViewModel = CityViewModelImport.CityViewModel;

export var message = "Analytics";
export var cityViewModels: KnockoutObservableArray<CityViewModel> = ko.observableArray([]);
export var cityIds: number[] = [
    Utils.Constants.SofiaCityId,
    Utils.Constants.LondonCityId,
    Utils.Constants.PaloAltoCityId,
    Utils.Constants.BostonCityId,
    Utils.Constants.MunichCityId,
    Utils.Constants.AustinCityId,
    Utils.Constants.CopenhagenCityId,
    Utils.Constants.SydneyCityId,
    Utils.Constants.GurgaonCityId];

export function activate() {
    if (this.cityViewModels() && this.cityViewModels().length > 0) {
        return;
    }

    return WeatherService.GetCurrentWeatherInfo(this.cityIds)
        .done(function (response) {
            var citiesCurrentWeatherInfoDto: CitiesCurrentWeatherInfoDto = <CitiesCurrentWeatherInfoDto>response;
            OnCitiesWeatherInfoDtosRetrieved(citiesCurrentWeatherInfoDto);
        });
}

export function goToDetails(cityViewModel: CityViewModel) {
    router.navigate('#analyticsdetails/' + encodeURIComponent(cityViewModel.city.id.toString()));
}

export function OnCitiesWeatherInfoDtosRetrieved(
    citiesCurrentWeatherInfoDto: CitiesCurrentWeatherInfoDto): void {
    for (var i = 0; i < citiesCurrentWeatherInfoDto.list.length; i++) {
        var cityDto: CityCurrentWeatherInfoDto = citiesCurrentWeatherInfoDto.list[i];
        var city: City = new City(cityDto.id);
        city.address = Utils.GetOfficeAddress(city.id);
        city.dateTimeStr = Utils.GetDateTimeAsString(city.id);
        var cityViewModel = new CityViewModel(city);
        cityViewModel.copyPropertiesFrom(cityDto);
        this.cityViewModels().push(cityViewModel);
    }
}