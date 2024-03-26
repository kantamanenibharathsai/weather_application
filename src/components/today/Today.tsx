import { Box, Stack, Typography } from "@mui/material";
import todayStyles from "./Today.Styles";
import { Weather } from "../../utils/typescript/Data";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import sunnyImage from "../../assets/sunnyImage.png";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


interface IState {
    weatherData: Weather | null;
    position: { latitude: number, longitude: number };
    fiveDaysThreeHrsForecast: {
        dt_txt: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
            id: number;
        }[];
    }[];

}



const Today = () => {
    const ApiKey = "95db215ad5e31e5e2b56bccc7cf0aa8e";
    const [weatherData, setWeatherData] = useState<IState["weatherData"]>(null);
    const [position, setPosition] = useState<IState["position"]>({ latitude: 0, longitude: 0 });
    const [fiveDaysThreeHrsForecast, setfiveDaysThreeHrsForecast] = useState<
        IState["fiveDaysThreeHrsForecast"]
    >([]);
    const now = new Date();
    const dateString = dateFormat(now, "h:MM tt");


    const getThreeHourForecastData = async () => {
        try {
            const JSONData = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${ApiKey}`,
                { method: "GET" }
            );
            const response = await JSONData.json();
            console.log(response.list);
            setfiveDaysThreeHrsForecast(response.list);
        } catch (error) {
            throw error;
        }
    };




    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    const fetchTodayWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${ApiKey}`);
        const data = await response.json();
        // console.log(data);
        setWeatherData(data);
    };

    useEffect(() => {
        if (position.latitude !== 0 && position.longitude !== 0) {
            fetchTodayWeather();
            getThreeHourForecastData();
        }
    }, [position]);


    return (
        <Box sx={todayStyles.todaysContainer}>
            <Box sx={todayStyles.mainContainer}>
                <Box sx={todayStyles.topContainer}>
                    <Typography sx={todayStyles.locationNameText}>{weatherData?.name}, Telangana, India</Typography>
                </Box>
                <Box sx={todayStyles.downContainer}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"}>
                        <Stack direction={"row"} flexDirection={"column"} gap={1.5}>
                            <Typography sx={todayStyles.temperature}>{weatherData && (weatherData.main.temp - 273.15).toFixed()}
                                <Box sx={todayStyles.degreeStyle} component={"sup"}>o</Box>
                            </Typography>
                            <Typography sx={todayStyles.weatherTypeText}>{weatherData && weatherData.weather[0].description}</Typography>
                            <Typography sx={todayStyles.weatherTypeText}>Day {weatherData && (weatherData.main.temp_max - 273.15).toFixed()}° . Night {weatherData && (weatherData.main.temp_min - 273.15).toFixed()}°</Typography>
                        </Stack>
                        <Box component="img" alt="sunny-image" src={sunnyImage} sx={todayStyles.sunnyImage} />
                    </Stack>
                </Box>
            </Box>
            <Box sx={todayStyles.todaysForecastContainer}>
                <Typography sx={todayStyles.todaysForecastHeading}>5 Days 3 Hours Forecast for {weatherData?.name}, Telangana, India</Typography>
                <Box component={"ul"} sx={todayStyles.unorderedListContainer}>
                    {fiveDaysThreeHrsForecast.map(eachForecast => (
                        <Box component={"li"} key={fiveDaysThreeHrsForecast.indexOf(eachForecast)} sx={todayStyles.unorderedListItem}>
                            <Typography>{eachForecast.dt_txt.slice(0, 10)}</Typography>
                            <Typography>{eachForecast.dt_txt.slice(11, 16)}</Typography>
                            <Typography>{(eachForecast.main.temp - 273.15).toFixed(0)}°</Typography>
                            <ThunderstormIcon />
                        </Box>))}
                </Box>
            </Box>
        </Box>
    )

}


export default Today