export class CityCurrentWeatherInfoDto {
    id: number;
    name: string;
    dt: number;
    dt_txt: string;
    coord: Coordinates;
    main: MainInfo;
    sys: SystemInfo;
    weather: Weather[];
    wind: Wind;
}

export class Coordinates {
    lat: number;
    lon: number;
}

export class MainInfo {
    humidity: number;
    pressure: number;
    temp: number;
}

export class Weather {
    main: string;
    description: string;
    icon: string;
}

export class SystemInfo {
    country: string;
}

export class Wind {
    deg: number;
    speed: number;
}