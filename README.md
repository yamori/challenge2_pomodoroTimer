# CodeChallenge2 - Pomodoro Timer

NodeJS + Express + Materialize(CSS) app for the appDev challenge.  Deployed [here](https://np9a3yuood.execute-api.us-east-1.amazonaws.com) (still under construction).

## Thigns I Learned

- Set/Get cookies via JScript on the client, httpOnly=false ensures that `Document.cookie` API can access the cookie.  (Otherwise it's only allowed to be sent back to the server.)
- parsing cookie strings, and the `expires` tag

## Tagged

Serverless, NodeJS, HTML bare minimum, [tagged](https://github.com/yamori/challenge2_pomodoroTimer/releases/tag/v0.1_serverless_nodeJS_html).

... which is a slight modification of the template for Serverless, AWS, NodeJS: `serverless create --template aws-nodejs`