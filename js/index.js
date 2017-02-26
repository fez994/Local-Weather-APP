// THIS APP WORKS WITH FIREFOX ONLY! THIS IS A PROBLEM OF THE FREE API (ALLOW ONLY HTTP REQUEST)/CHROME THAT DOESN'T ALLOW HTTP REQUEST, HTTPS ONLY. PLEASE USE FIREFOX 



$(document).ready(function() {
    

 alert("This app works with firefox only! This is a problem of the free API (that allows only http request) and chrome that doesn't allow http request; chrome allows https only. Please use firefox");



   
// Getting geolocalization

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {



  	// setting lat and lon variable based on the geolocalization

  	var lat = position.coords.latitude;
	var lon = position.coords.longitude;


	

	var myApi ='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=735124465b106ee2def7cd7533415e27';

	// get JSON

	$.getJSON(myApi, function(data){


	var city = data.name;	
	var weatherType = data.weather[0].description;
	var wind = data.wind.speed;
	var tempK = (data.main.temp);
	var ceTemp = Math.round(tempK - 273.15);
	var faTemp = Math.round(ceTemp * 9/5 +32);
	var id = data.weather[0].id;



	$("#city").text(city);

	$("#weather").html(weatherType);

	$("#wind").html("WS " + wind + " knot");

	$("#temperature").html(ceTemp + " C" + "°");


	// $("#prova").html(id);


   // Changing Temperature div from Celsius to Fahrenheit after you click on the div

	$("#temperature").click(function() {
		var $this = $(this);
		$this.toggleClass('#temperature');

		if($this.hasClass('#temperature')) {
			$this.html(faTemp + "° F");
		
		} else {
			$this.html(ceTemp +"° C");
		}


	}); // end click function


		//Changing background color based on weather condition 
	function changeBg(){


	if (id >= 700 && id <= 781) {
        $('#container').addClass('fog'); //FOG
    }

    else if (id >= 200 && id <= 232) {
    	$('#container').addClass('thunderstorm'); // Thunderstorm
    }

    else if (id >= 300 && id <= 531) {
    	$('#container').addClass('rain'); // Rain
    }

    else if(id >= 600 && id <= 622) {
    	$('#container').addClass('snow'); // Snow
    }

    
    else if(id === 800) {
    	$('#container').addClass('sunny');  // Sunny
    }


    else if(id >= 801 && id <= 804) {
    	$('#container').addClass('cloud'); // Cloud
    }


    else if(id >= 951 && id <= 962) {
    	$('#container').addClass('wind');
    }

    
    else {
        $('container').addClass('red'); // Other
    }



	}


	
	changeBg();





	}); // end getJSON







    
  }); // End get geolocalization

	} // End If navigator geolocalization

}); // Document Ready fucntion 

