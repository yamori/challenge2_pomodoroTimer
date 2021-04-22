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
    <style>
        .centering {
            text-align: center;
        }
    </style>
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h3 class="centering">Pomodoro Timer</h3>
                <p class="centering"><a class="waves-effect waves-light btn-large" onclick="startPomodoro();"><i class="material-icons left">build</i><i class="material-icons right">access_time</i>start pomodoro</a></p>
                <p class="centering">
                    <label>
                        <input id="seconds_checkbox" type="checkbox" />
                        <span>seconds (instead of mins, for debug/test)</span>
                    </label>
                </p>
                <h2 id="mode" class="centering"></h2>
                <p class="centering"><span id="mins"></span> <span id="secs"></span></p>
            </div>
        </div>
    </div>
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h1 id="modal_subject" class="centering"></h1>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onclick="startPomodoro();">let's go</a>
        </div>
    </div>
    <script>
        $(document).ready(function(){
            $('.modal').modal();
        });

        var dev_in_seconds = false;
        const POMODORO_CYCLE = [
            {mode: 'focus', duration: 25},
            {mode: 'break', duration: 5},
            {mode: 'focus', duration: 25},
            {mode: 'break', duration: 5},
            {mode: 'focus', duration: 25},
            {mode: 'break', duration: 5},
            {mode: 'focus', duration: 25},
            {mode: 'break', duration: 15}
        ];

        var pomodoro_cycle_position = 0;
        var countDownDate = null;
        var intervalledTimer = null;
        function startPomodoro() {
            if ($("#seconds_checkbox").prop('checked')) {
                dev_in_seconds = true;
            }
            var duration_int = POMODORO_CYCLE[pomodoro_cycle_position].duration;
            var mode = POMODORO_CYCLE[pomodoro_cycle_position].mode;
            pomodoro_cycle_position = (pomodoro_cycle_position+1) % POMODORO_CYCLE.length;

            countDownDate = new Date();
            if (dev_in_seconds) {
                countDownDate.setSeconds( countDownDate.getSeconds() + duration_int );
            } else  {
                countDownDate.setMinutes( countDownDate.getMinutes() + duration_int );
            }
            $("#mode").text(mode);
            updateTickers();
            intervalledTimer = setInterval(function() {updateTickers();}, 1000);
        }

        function updateTickers() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance < 0) {
                var mode = POMODORO_CYCLE[pomodoro_cycle_position].mode;
                $("#modal_subject").text("time for " + mode);
                $('.modal').modal('open');
                clearInterval(intervalledTimer);
                return;
            }
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $("#mins").text(minutes + "m");
            $("#secs").text(seconds + "s");
        }
            

        // for parsing cookie string
        const parseCookie = str =>
            str
            .split(';')
            .map(v => v.split('='))
            .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
            }, {});
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
