import CityCurrentWeatherInfoDtoImport = require('dtos/CityCurrentWeatherInfoDto');

export class CitiesCurrentWeatherInfoDto {
    cnt: number;
    list: CityCurrentWeatherInfoDtoImport.CityCurrentWeatherInfoDto[];
}