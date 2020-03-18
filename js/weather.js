document.addEventListener("DOMContentLoaded", function(){
    const weather = document.querySelector(".weather");
    let weather_id;

    const API_KEY = "616f398b32f29ba755111251497a696e";
    const COORDS = 'coords';

    function getWeather(lat, lng){
        fetch(
            //'api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}'
            'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lng + '&appid=' + API_KEY
        ).then(function(response){
            return response.json();
            console.log(response.json);
        }).then(function(json){
            //console.log(json);
            var temperature = json.main.temp;
            var weath = json.weather[0].main;

            var place = json.name;
            if(place == 'Ch’ungch’ŏng-namdo'){
                place = '충청남도';
            }
            if(weath =='Clear'){
              var weather_ico = document.createElement('div');
              weather_ico.className = 'material-icons';
              weather_ico.innerText = 'cloud';
              weather.append(weather_ico);
              weather.innerText = "<i class='material-icons'> cloud </i>";
            }
            weather.innerText = weath +  "  " + place;

        })
        // 데이터가 완전히 들어온 다음 함수 호출 (then)
    }

    function saveCoords(coordsObj){
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }

    function handleGeoSuccess(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const coordsObj = {
            latitude, longitude
        };

        saveCoords(coordsObj);
        getWeather(latitude, longitude);
        console.log(coordsObj);
    }

    function handleGeoError(){
        console.log("ERROR");
    }

    function askForCoords(){
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    }

    function loadCoords(){
        const loadedCoords = localStorage.getItem(COORDS);

        if(loadedCoords == null){
            askForCoords();
        }
        else{
            const parseCoords = JSON.parse(loadedCoords);
            console.log(parseCoords);
            getWeather(parseCoords.latitude, parseCoords.longitude);
        }
    }

    function init(){
        loadCoords();
    }

    init();
});
