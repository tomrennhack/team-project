$("#search-country").on("click", function () {

    // Split input to get country & city name
    var userInput = $('#country-input').val();
    var cityName = userInput.substr(0, userInput.indexOf(',')).trim();
    var countryName = userInput.substr(userInput.indexOf(',') + 1).trim();

    // RETURN YOUTUBE RESULTS
    var infoVideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+info+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    var musicvideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+music+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"
    var newsvideoURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + countryName + "+news+video&type=video&videoDefinition=high&key=AIzaSyBLL2tHYwaiSDhxVoFeqHUjOqhUbuV3HRY"

    // YOUTUBE INFO API RESULTS
    $.ajax({
        url: infoVideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");


            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);


            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-results").append(imgDiv);
        }
    });

    // RETURN MUSIC VIDEOS
    $.ajax({
        url: musicvideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-music-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");

            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);


            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-music-results").append(imgDiv);
        }
    });

    // RETURN NEWS VIDEOS
    $.ajax({
        url: newsvideoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response.items.length)
        $("#youtube-news-results").empty();

        for (var i = 0; i < response.items.length; i++) {

            var imgURL = response.items[i].snippet.thumbnails.default.url;
            var videoURL = response.items[i].id.videoId;

            // create var for thumbnail image
            var imgDiv = $("<div>");

            // Storing the result title
            var Title = response.items[i].snippet.title;

            // Creating a paragraph tag with the result item's rating
            var a = $("<a>").text("Title: " + Title);

            // Creating an image tag

            var videoImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            videoImage.attr("src", response.items[i].snippet.thumbnails.default.url);
            videoImage.attr("href", "https://www.youtube.com/watch?v=" + videoURL);
            a.attr("href", "https://www.youtube.com/watch?v=" + videoURL);


            // Appending the paragraph and image to div created
            imgDiv.append(videoImage);
            imgDiv.append(a);

            // Appending the results to appear to div created
            $("#youtube-news-results").append(imgDiv);
        }
    });


    // GET GENERAL COUNTRY INFO
    var countryInfoURL = "https://restcountries.eu/rest/v2/name/" + countryName

    $.ajax({
        url: countryInfoURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        $("#currency-results").empty();
        $("#flag-results").empty();

        // Create variables from response
        var currencyCode = response[0].currencies[0].code;
        var flagURL = response[0].flag;

        // create var for thumbnail image
        var textDiv = $("<div>");

        // Creating an image tag
        var flagImage = $("<img>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Currency Code: " + currencyCode);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        flagImage.attr("src", flagURL);
        flagImage.attr("style", "height: 100px");
        textDiv.append(p);

        // Appending the paragraph and image to div created
        flagImage.append(flagImage);
        textDiv.append(p);

        // Appending the results to appear to div created
        $("#currency-results").append(textDiv);
        $("#flag-results").prepend(flagImage);

    });

    // GET EXCHANGE RATE
    var exchangeRateURL = "http://data.fixer.io/api/latest?access_key=95ada76d8a2c4471a5bcd88b4baa463c&format=1"

    $.ajax({
        url: exchangeRateURL,
        method: "GET"
    }).then(function (response) {

        var exchangeRate = response.rates.AUD;

        // create var for thumbnail image
        var textDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Current Exchange Rate: " + exchangeRate);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        textDiv.append(p);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        textDiv.append(p);

        // Appending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#currency-results").append(textDiv);

    });

    // GET WEATHER
    var weatherURL = url = "https://api.aerisapi.com/observations/" + userInput + "?client_id=2nCwoHULlzXQ8LvHXCfym&client_secret=TQO1Nn2BIkEADjcZmwrAiAL2mxmFOFinkdJosh4R"

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).done(function (json) {
        if (json.success == true) {
            var ob = json.response.ob;
            $('#weather-results').html('The current weather is ' + ob.weather + ' <br> Fahrenheit temperature of ' + ob.tempF + '&deg;' + '<br> Celsius temperature of ' + ob.tempC + '&deg;' + '<br> The Humidity is: ' + ob.humidity + '%');
        }
        else {
            alert('An error occurred: ' + json.error.description);
        }
    });
})


