export class City {
    id: number;
    name: string;
    address: string;
    dateTimeStr: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    humidity: number;
    pressure: number;
    temp: number;
    weather: string;
    weatherDesc: string;
    weatherIcon: string;
    time: string;

    constructor(id: number) {
        this.id = id;
    }
}