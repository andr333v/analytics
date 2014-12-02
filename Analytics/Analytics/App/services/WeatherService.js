/// <reference path="../typings/durandal.d.ts" />
/// <reference path="../utils/Utils.ts" />
define(["require", "exports", 'plugins/http', 'utils/Utils'], function(require, exports, http, Utils) {
    function GetCurrentWeatherInfo(cityIds) {
        var ids = Utils.ConcatIfNotEmpty(",", cityIds);
        return http.get("http://api.openweathermap.org/data/2.5/group", {
            id: ids,
            units: 'metric',
            APPID: Utils.Constants.APP_KEY
        });
        ;
    }
    exports.GetCurrentWeatherInfo = GetCurrentWeatherInfo;

    function GetForecastWeatherInfo(cityId) {
        return http.get("http://api.openweathermap.org/data/2.5/forecast", {
            id: cityId,
            units: 'metric',
            APPID: Utils.Constants.APP_KEY
        });
    }
    exports.GetForecastWeatherInfo = GetForecastWeatherInfo;

    function GetHistoryWeatherInfo(cityId) {
        var today = new Date();
        var fiveDaysAgo = new Date();
        fiveDaysAgo.setDate(today.getDate() - 5);
        var startDateAsNumeric = Date.parse(fiveDaysAgo) / 1000;
        var endDateAsNumeric = Date.parse(today) / 1000;
        return http.get("http://api.openweathermap.org/data/2.5/history/city", {
            id: cityId,
            start: startDateAsNumeric,
            end: endDateAsNumeric,
            APPID: Utils.Constants.APP_KEY
        });
    }
    exports.GetHistoryWeatherInfo = GetHistoryWeatherInfo;
});
