'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html'},
    body: 
`
<html>
  <head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <div class="container">
        <h1>Serverless, NodeJS, HTML</h1>
        <a class="waves-effect waves-light btn" onclick="startPomodoro();"><i class="material-icons left">build</i><i class="material-icons right">access_time</i>start pomodoro</a>
        <h2>timer</h2>
        <span id="mins"></span>
        <span id="secs"></span>
    </div>
    <script>
        // for parsing cookie string
        const parseCookie = str =>
            str
            .split(';')
            .map(v => v.split('='))
            .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
            }, {});
            

        var countDownDate = null;
        var intervalledTimer = null;
        function startPomodoro() {
            countDownDate = new Date();
            countDownDate.setMinutes( countDownDate.getMinutes() + 25 );
            updateTickers();
            intervalledTimer = setInterval(function() {updateTickers();}, 1000);
        }

        function updateTickers() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(intervalledTimer);
                $("#mins").text("-");
                $("#secs").text("-");
                return;
            }
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $("#mins").text(minutes + "m");
            $("#secs").text(seconds + "s");
        }
            

        // Code for setting demo cookies
        // console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));
        // var now = new Date();
        // now.setDate( now.getDate() + 19 );
        // console.log(now.toUTCString());
        // document.cookie = "parse_date=" + now.toUTCString() + ";expires=" + now.toUTCString() + ";"; 
        // console.log(parseCookie(document.cookie));
        // var cookieObj = parseCookie(document.cookie);
        // var date = new Date(Date.parse(cookieObj.parse_date));
        // console.log(date);
    </script>
  </body>
</html>
`
  };
};
