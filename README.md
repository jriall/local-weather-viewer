# Current-Localised-Weather-App

https://jamesriall.co.uk/local-weather-viewer/

## The Project

The page displays current local weather to the user - city, temperature, wind direction and wind speed. Displays a different background based on the current weather type (e.g. rain, cloud, sun snow). Our American friends also have the ability to change the units displayed from celcius for temperature and kph for windspeed to fahrenheit and mph.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605316/weather-image_ruuryh.png)

## The Logic

Firstly I get geolocation data through the IP-API and use it to store the latitude and longitude in variables. I then use these values to construct a call to the Open Weather API to pull the local weather data in JSON format. Once I have these values stored, I am able to change the HTML on the past to display the values of each of the pieces of information I want to show. Wind direction is determined by placing the various wind directions into various bins in an else/if statement and returning the value which matches the location's current wind direction. The helpful 'weather type' data from Open Weather also allows me to get an overview of what the weather is (rainy, cloudy, sunny etc), which I use to change the background image on the page.