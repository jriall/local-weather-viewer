$(document).ready(function() {

    //variable setting

    var unitSwap = false;
    var long;
    var lat;
    var far;
    var cel;
    var kelvin;
    var weatherType;
    var windSpeed;
    var windDir;
    var kph;
    var mph;
    var city;

    //get geolocation data

    $.getJSON("https://crossorigin.me/http://ip-api.com/json", function(dataLoc) {
        lat = dataLoc.lat;
        long = dataLoc.lon;

        //api call, variable setting and basic data mapping

        var api = "http://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=95cb066d694049e32c48e0101817e622";
        $.getJSON(api, function(data) {
            city = data.name;
            kelvin = data.main.temp;
            far = (kelvin) * (9 / 5) - 459.67;
            cel = kelvin - 273;
            weatherType = data.weather[0].main;
            windSpeed = data.wind.speed;
            kph = (windSpeed * 3600) / 1000;
            mph = kph * 0.621371;
            windDir = data.wind.deg;
            $("#location").html("City: " + city);
            $("#temp").html("Temp: " + Math.round(cel) + "&degC");
            $("#windspeed").html("Wind Speed: " + Math.round(kph) + " kph");
            $("#tempSwapButton").click(function() {

                //change temp and windspeed to imperial or back

                if (unitSwap === false) {
                    $("#temp").html("Temp: " + Math.round(far) + "&degF");
                    $("#windspeed").html("Wind Speed: " + Math.round(mph) + " mph");
                    unitSwap = true;
                    $("#tempSwapButton").html("Change to  Metric");
                } else {
                    $("#temp").html("Temp: " + Math.round(cel) + "&degC");
                    $("#windspeed").html("Wind Speed: " + Math.round(kph) + " kph");
                    unitSwap = false;
                    $("#tempSwapButton").html("Change to Imperial");
                }
            });

            //set wind direction

            if (windDir > 348.75 || windDir < 11.25) {
                $("#windDir").html("Wind Direction: N");
            } else if (windDir > 11.25 && windDir <= 33.75) {
                $("#windDir").html("Wind Direction: NNE");
            } else if (windDir > 33.75 && windDir <= 56.25) {
                $("#windDir").html("Wind Direction: NE");
            } else if (windDir > 56.25 && windDir <= 78.75) {
                $("#windDir").html("Wind Direction: ENE");
            } else if (windDir > 78.75 && windDir <= 101.25) {
                $("#windDir").html("Wind Direction: E");
            } else if (windDir > 101.25 && windDir <= 123.75) {
                $("#windDir").html("Wind Direction: ESE");
            } else if (windDir > 123.75 && windDir <= 146.25) {
                $("#windDir").html("Wind Direction: SE");
            } else if (windDir > 146.25 && windDir <= 168.75) {
                $("#windDir").html("Wind Direction: SSE");
            } else if (windDir > 168.75 && windDir <= 191.25) {
                $("#windDir").html("Wind Direction: S");
            } else if (windDir > 191.25 && windDir <= 213.75) {
                $("#windDir").html("Wind Direction: SSW");
            } else if (windDir > 213.75 && windDir <= 236.25) {
                $("#windDir").html("Wind Direction: SW");
            } else if (windDir > 236.25 && windDir <= 258.75) {
                $("#windDir").html("Wind Direction: WSW");
            } else if (windDir > 258.75 && windDir <= 281.25) {
                $("#windDir").html("Wind Direction: W");
            } else if (windDir > 281.25 && windDir <= 303.75) {
                $("#windDir").html("Wind Direction: WNW");
            } else if (windDir > 303.75 && windDir <= 326.25) {
                $("#windDir").html("Wind Direction: NW");
            } else if (windDir > 326.25 && windDir <= 348.75) {
                $("#windDir").html("Wind Direction: NNW");
            }

            //change background based on weather.

            switch (true) {
                case (weatherType === "Clear Sky"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135819/Clear_Sky_itra20.jpg)");
                    break;
                case (weatherType === "Few Clouds"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135798/Few_clouds_kjrw5a.jpg)");
                    break;
                case (weatherType === "Clouds" || weatherType === "Scattered Clouds" || weatherType === "Broken Clouds"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135798/Cloudy_ciqkng.jpg)");
                    break;
                case (weatherType === "Shower Rain"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135798/Rain_Showers_qwl6hx.jpg)");
                    break;
                case (weatherType === "Rain"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135798/Heavy_Rain_kafosc.jpg)");
                    break;
                case (weatherType === "Thunderstorm"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135808/Thunderstorm_xephng.jpg)");
                    break;
                case (weatherType === "Snow"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135825/Snow_wxdfy5.jpg)");
                    break;
                case (weatherType === "Mist"):
                    $("#background").css("background-image", "url(http://res.cloudinary.com/jamesriall/image/upload/v1467135839/Mist_jmtkbk.png)");
                    break;
                default:
                    break;
            }
        });
    });
});