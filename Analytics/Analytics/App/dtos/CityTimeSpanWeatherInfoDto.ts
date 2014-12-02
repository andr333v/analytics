import CityCurrentWeatherInfoDtoImport = require('dtos/CityCurrentWeatherInfoDto');

export class CityTimeSpanWeatherInfoDto {
    cnt: number;
    city: CityDto;
    list: CityCurrentWeatherInfoDtoImport.CityCurrentWeatherInfoDto[];
}

export class CityDto {
    name: string;
    country: string;
}