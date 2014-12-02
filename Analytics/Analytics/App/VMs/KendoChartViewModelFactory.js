define(["require", "exports", 'VMs/KendoChartViewModel', 'models/kendochart/Title', 'models/kendochart/Legend', 'models/kendochart/Serie', 'models/kendochart/ValueAxis', 'models/kendochart/CategoryAxis', 'models/kendochart/Labels', 'models/kendochart/Tooltip', 'models/kendochart/ChartArea', 'utils/Utils'], function(require, exports, KendoChartViewModelImport, TitleImport, LegendImport, SerieImport, ValueAxisImport, CategoryAxisImport, LabelsImport, TooltipImport, ChartAreaImport, Utils) {
    var KendoChartViewModel = KendoChartViewModelImport.KendoChartViewModel;

    var Title = TitleImport.Title;
    var Legend = LegendImport.Legend;
    var Serie = SerieImport.Serie;
    var ValueAxis = ValueAxisImport.ValueAxis;
    var CategoryAxis = CategoryAxisImport.CategoryAxis;
    var Labels = LabelsImport.Labels;
    var Tooltip = TooltipImport.Tooltip;
    var ChartArea = ChartAreaImport.ChartArea;

    function CreateKendoChartViewModel(cityTimeSpanWeatherInfoDto, cityNameAndCountry, isHistory) {
        var title = new Title(exports.GetTitle(cityNameAndCountry, isHistory));
        var legend = new Legend("bottom");

        var tempSerie = new Serie("line", exports.GetTemperatureData(cityTimeSpanWeatherInfoDto, isHistory), "Temperature [&deg;C]", "#ff1c1c", "temp");
        var windSerie = new Serie("line", exports.GetWindData(cityTimeSpanWeatherInfoDto), "Wind Speed [m/s]", "#73c100", "wind");
        var series = [tempSerie, windSerie];

        var windValueAxis = new ValueAxis("wind", "#73c100", 0, 15);
        var tempValueAxis = new ValueAxis("temp", "#ff1c1c", -10, 40);
        var valueAxes = [windValueAxis, tempValueAxis];

        var categories = exports.GetCategories(cityTimeSpanWeatherInfoDto, isHistory);
        var labels = new Labels(45);
        var categoryAxis = new CategoryAxis(categories, labels, [0, categories.length + 1], true);

        var tooltip = new Tooltip(true, "{0}", "#= category #: #= value #");
        var chartArea = new ChartArea(1200, 800);

        return new KendoChartViewModel(title, legend, series, valueAxes, categoryAxis, tooltip, chartArea);
    }
    exports.CreateKendoChartViewModel = CreateKendoChartViewModel;

    function GetTitle(cityNameAndCountry, isHistory) {
        if (isHistory) {
            return "5 days history weather info for " + cityNameAndCountry;
        } else {
            return "5 days weather forecast for " + cityNameAndCountry;
        }
    }
    exports.GetTitle = GetTitle;

    function GetTemperatureData(cityTimeSpanDto, isHistory) {
        var result = [];
        for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
            var temp = cityTimeSpanDto.list[i].main.temp;
            if (isHistory) {
                result[i] = exports.GetTempAsCelsius(temp);
            } else {
                result[i] = temp;
            }
        }

        return result;
    }
    exports.GetTemperatureData = GetTemperatureData;

    function GetTempAsCelsius(tempAsKelvin) {
        return tempAsKelvin - 273.15;
    }
    exports.GetTempAsCelsius = GetTempAsCelsius;

    function GetWindData(cityTimeSpanDto) {
        var result = [];
        for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
            result[i] = cityTimeSpanDto.list[i].wind.speed;
        }

        return result;
    }
    exports.GetWindData = GetWindData;

    function GetCategories(cityTimeSpanDto, isHistory) {
        var result = [];
        for (var i = 0; i < cityTimeSpanDto.list.length; i++) {
            result[i] = exports.GetCategory(cityTimeSpanDto.list[i], isHistory);
        }

        return result;
    }
    exports.GetCategories = GetCategories;

    function GetCategory(cityWeatherInfoDto, isHistory) {
        if (isHistory) {
            var date = new Date(cityWeatherInfoDto.dt * 1000);
            var dateStr = Utils.GetDateAsString(date);
            var timeStr = Utils.GetTimeAsString(date);
            return dateStr + " " + timeStr;
        } else {
            var dateAsText = cityWeatherInfoDto.dt_txt;

            //strip seconds
            return dateAsText.substr(0, dateAsText.length - 3);
        }
    }
    exports.GetCategory = GetCategory;
});
