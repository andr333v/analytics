define(["require", "exports"], function(require, exports) {
    var Constants = (function () {
        function Constants() {
        }
        Constants.APP_KEY = "93478fa1a9b8cf0c5ecfcc34ce86505b";

        Constants.PngFileExtension = ".png";
        Constants.ImagesUrl = "http://openweathermap.org/img/w/";
        Constants.TempCelsius = " °C";
        Constants.PressureHpa = " hpa";
        Constants.HumidityPercent = " %";

        Constants.CopenhagenCityId = 2618425;
        Constants.SofiaCityId = 727011;
        Constants.LondonCityId = 2643743;
        Constants.PaloAltoCityId = 5380748;
        Constants.BostonCityId = 4930956;
        Constants.SydneyCityId = 2147714;
        Constants.AustinCityId = 4671654;
        Constants.GurgaonCityId = 1270642;
        Constants.MunichCityId = 2867714;

        Constants.CopenhagenOfficeAddress = "Vesterbrogade 149 Copenhagen DK - 1620 Copenhagen V";
        Constants.SofiaOfficeAddress = "33 Alexander Malinov Blvd. Sofia 1729";
        Constants.LondonOfficeAddress = "14 Austin Friars London EC2N 2HE";
        Constants.PaloAltoOfficeAddress = "169 University Ave. Palo Alto 94301";
        Constants.BostonOfficeAddress = "201 Jones Road Waltham MA 02451";
        Constants.SydneyOfficeAddress = "Suite 705, 80 Mount St Sydney North Sydney, NSW 2060";
        Constants.AustinOfficeAddress = "221 W 6th Street Suite 850 Austin TX 78701";
        Constants.GurgaonOfficeAddress = "Unit No 505, Tower A Spaze iTech Park Gurgaon Sohna Road Sector 49 Gurgaon Haryana.122002";
        Constants.MunichOfficeAddress = "Balanstrasse 73 Munich 81541 Munich";

        Constants.CopenhagenTimeOffset = +1;
        Constants.SofiaTimeOffset = +2;
        Constants.LondonTimeOffset = 0;
        Constants.PaloAltoTimeOffset = -8;
        Constants.BostonTimeOffset = -5;
        Constants.SydneyTimeOffset = +11;
        Constants.AustinTimeOffset = -6;
        Constants.GurgaonTimeOffset = +5.5;
        Constants.MunichTimeOffset = +1;
        return Constants;
    })();
    exports.Constants = Constants;

    function ConcatIfNotEmpty(separator, array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            if (i > 0) {
                result += separator;
            }

            result += array[i];
        }

        return result;
    }
    exports.ConcatIfNotEmpty = ConcatIfNotEmpty;

    function GetOfficeAddress(cityId) {
        switch (cityId) {
            case Constants.CopenhagenCityId:
                return Constants.CopenhagenOfficeAddress;
            case Constants.SofiaCityId:
                return Constants.SofiaOfficeAddress;
            case Constants.LondonCityId:
                return Constants.LondonOfficeAddress;
            case Constants.PaloAltoCityId:
                return Constants.PaloAltoOfficeAddress;
            case Constants.BostonCityId:
                return Constants.BostonOfficeAddress;
            case Constants.SydneyCityId:
                return Constants.SydneyOfficeAddress;
            case Constants.AustinCityId:
                return Constants.AustinOfficeAddress;
            case Constants.GurgaonCityId:
                return Constants.GurgaonOfficeAddress;
            case Constants.MunichCityId:
                return Constants.MunichOfficeAddress;
        }
    }
    exports.GetOfficeAddress = GetOfficeAddress;

    function GetTimeOffset(cityId) {
        switch (cityId) {
            case Constants.CopenhagenCityId:
                return Constants.CopenhagenTimeOffset;
            case Constants.SofiaCityId:
                return Constants.SofiaTimeOffset;
            case Constants.LondonCityId:
                return Constants.LondonTimeOffset;
            case Constants.PaloAltoCityId:
                return Constants.PaloAltoTimeOffset;
            case Constants.BostonCityId:
                return Constants.BostonTimeOffset;
            case Constants.SydneyCityId:
                return Constants.SydneyTimeOffset;
            case Constants.AustinCityId:
                return Constants.AustinTimeOffset;
            case Constants.GurgaonCityId:
                return Constants.GurgaonTimeOffset;
            case Constants.MunichCityId:
                return Constants.MunichTimeOffset;
        }
    }
    exports.GetTimeOffset = GetTimeOffset;

    function GetDateTimeAsString(cityId) {
        var date = exports.calculateTime(exports.GetTimeOffset(cityId));
        var dateAsString = exports.GetDateAsString(date);
        var timeAsString = exports.GetTimeAsString(date);
        return dateAsString + "   " + timeAsString;
    }
    exports.GetDateTimeAsString = GetDateTimeAsString;

    function calculateTime(offset) {
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000 * offset));
    }
    exports.calculateTime = calculateTime;

    function GetDateAsString(date) {
        return date.getFullYear() + "-" + (((date.getMonth() + 1) < 10) ? "0" : "") + (date.getMonth() + 1) + "-" + ((date.getDate() < 10) ? "0" : "") + date.getDate();
    }
    exports.GetDateAsString = GetDateAsString;

    function GetTimeAsString(date) {
        return ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
    }
    exports.GetTimeAsString = GetTimeAsString;
});
