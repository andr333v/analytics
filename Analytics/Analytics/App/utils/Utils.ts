export class Constants {
    static APP_KEY: string = "93478fa1a9b8cf0c5ecfcc34ce86505b";

    static PngFileExtension: string = ".png";
    static ImagesUrl: string = "http://openweathermap.org/img/w/";
    static TempCelsius: string = " °C";
    static PressureHpa: string = " hpa";
    static HumidityPercent: string = " %";

    static CopenhagenCityId: number = 2618425;
    static SofiaCityId: number = 727011;
    static LondonCityId: number = 2643743;
    static PaloAltoCityId: number = 5380748;
    static BostonCityId: number = 4930956;
    static SydneyCityId: number = 2147714;
    static AustinCityId: number = 4671654;
    static GurgaonCityId: number = 1270642;
    static MunichCityId: number = 2867714;

    static CopenhagenOfficeAddress: string = "Vesterbrogade 149 Copenhagen DK - 1620 Copenhagen V";
    static SofiaOfficeAddress: string = "33 Alexander Malinov Blvd. Sofia 1729";
    static LondonOfficeAddress: string = "14 Austin Friars London EC2N 2HE";
    static PaloAltoOfficeAddress: string = "169 University Ave. Palo Alto 94301";
    static BostonOfficeAddress: string = "201 Jones Road Waltham MA 02451";
    static SydneyOfficeAddress: string = "Suite 705, 80 Mount St Sydney North Sydney, NSW 2060";
    static AustinOfficeAddress: string = "221 W 6th Street Suite 850 Austin TX 78701";
    static GurgaonOfficeAddress: string = "Unit No 505, Tower A Spaze iTech Park Gurgaon Sohna Road Sector 49 Gurgaon Haryana.122002";
    static MunichOfficeAddress: string = "Balanstrasse 73 Munich 81541 Munich";

    static CopenhagenTimeOffset: number = +1;
    static SofiaTimeOffset: number = +2;
    static LondonTimeOffset: number = 0;
    static PaloAltoTimeOffset: number = -8;
    static BostonTimeOffset: number = -5;
    static SydneyTimeOffset: number = +11;
    static AustinTimeOffset: number = -6;
    static GurgaonTimeOffset: number = +5.5;
    static MunichTimeOffset: number = +1;
}

export function ConcatIfNotEmpty(separator: string, array: any[]): string {
    var result: string = "";
    for (var i = 0; i < array.length; i++) {
        if (i > 0) {
            result += separator;
        }

        result += array[i];
    }

    return result;
}

export function GetOfficeAddress(cityId: number): string {
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

export function GetTimeOffset(cityId: number): number {
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

export function GetDateTimeAsString(cityId: number): string {
    var date = calculateTime(GetTimeOffset(cityId));
    var dateAsString = GetDateAsString(date);
    var timeAsString = GetTimeAsString(date);
    return dateAsString + "   " + timeAsString;
}

export function calculateTime(offset: number): Date {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * offset));
}

export function GetDateAsString(date: Date): string {
    return date.getFullYear() + "-" + (((date.getMonth() + 1) < 10) ? "0" : "") + (date.getMonth() + 1) + "-" + ((date.getDate() < 10) ? "0" : "") + date.getDate();
}

export function GetTimeAsString(date: Date): string {
    return ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
}