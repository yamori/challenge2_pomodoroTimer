'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html'},
    body: 
`
<html>
  <head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Serverless, NodeJS, HTML</h1>
  </body>
</html>
`
  };
};
