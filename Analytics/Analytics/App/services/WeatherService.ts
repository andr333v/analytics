/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../utils/Utils.ts" />

import http = require('plugins/http');
import Utils = require('utils/Utils');

export function GetCurrentWeatherInfo(cityIds: number[]) {
    var ids: string = Utils.ConcatIfNotEmpty(",", cityIds);
    return http.get("http://api.openweathermap.org/data/2.5/group",
        {
            id: ids,
            units: 'metric',
            APPID: Utils.Constants.APP_KEY
        });;
}

export function GetForecastWeatherInfo(cityId: number) {
    return http.get("http://api.openweathermap.org/data/2.5/forecast",
        {
            id: cityId,
            units: 'metric',
            APPID: Utils.Constants.APP_KEY
        });
}

export function GetHistoryWeatherInfo(cityId: number) {
    var today = new Date();
    var fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(today.getDate() - 5);
    var startDateAsNumeric = Date.parse(fiveDaysAgo) / 1000;
    var endDateAsNumeric = Date.parse(today) / 1000;
    return http.get("http://api.openweathermap.org/data/2.5/history/city",
        {
            id: cityId,
            start: startDateAsNumeric,
            end: endDateAsNumeric,
            APPID: Utils.Constants.APP_KEY
        });
}