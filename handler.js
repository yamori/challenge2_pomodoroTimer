'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html'},
    body: "<html><body><h1>Serverless, NodeJS, HTML</h1></body></html>"
  };
};
