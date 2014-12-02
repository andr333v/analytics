/// <reference path="../models/City.ts" />

import CityImport = require('models/City');
import CityCurrentWeatherInfoDtoImport = require('dtos/CityCurrentWeatherInfoDto');
import Utils = require('utils/Utils');

import City = CityImport.City;

export class CityViewModel {
    city: City;

    constructor(city: City) {
        this.city = city;
    }

    getFullName(): string {
        return this.city.name + ", " + this.city.countryCode;
    }

    getWeatherInfo(): string {
        var temp: string = this.city.temp + Utils.Constants.TempCelsius;
        var weather: string = " (" + this.city.weatherDesc + ")";
        return temp + weather;
    }

    getPressure(): string {
        return this.city.pressure + Utils.Constants.PressureHpa;
    }

    getHumidity(): string {
        return this.city.humidity + Utils.Constants.HumidityPercent;
    }

    getWeatherImageUrl(): string {
        return Utils.Constants.ImagesUrl + this.city.weatherIcon +
            Utils.Constants.PngFileExtension;
    }

    copyPropertiesFrom(cwi: CityCurrentWeatherInfoDtoImport.CityCurrentWeatherInfoDto): void {
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
    }
}