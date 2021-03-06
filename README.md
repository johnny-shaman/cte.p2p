# cte.pvp
## It's a usecase about ...
- [Category Theory Environment](https://www.npmjs.com/package/cte)
- [$(dsand).$()](https://www.npmjs.com/package/dsand)

~~~bash
npm i cte.pvp.like
~~~

### server example
~~~javascript
const http = require("http");
const express = require("express");
const app = express();
const sv = http.createServer(app);
require("cte.pvp.like")(sv).listen(process.env.PORT, process.env.IP);
~~~

### Creat a public folder and make in a index.html
You use it tags
~~~html
  <script src="https://cdn.jsdelivr.net/npm/cte@1.1.12/cte.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.7.7/dsand.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dsand@0.7.7/pvp.js"></script>
  <script>
    _($.role).put({
      pvpCE (channel) {
        /* Anything do when connection Established
           Channel is WebRTC Data Channel 
        */
        $(channel).class("hear").on("message");
      },
      hear (e) {
        alert(e.data);
      }
    });
    PvP()()();
  </script>
~~~

~~~bash
node server.js
~~~

and access the two clients;

## Usage on BrowserSide PvP function
~~~javascript
PvP({
  // 1st Negotiation info
  blockedUserList: [],
  gameRating: 1000,
  friendOnry: true
})(
  // 2nd Custom Origin
  "https://test.io/"
)(
  // 3rd STUN Address or TURNServer Authentication info Object
  {
    url: "stun:l.google..."
  },
  {
    url: "turn:...",
    credential: "...",
    username: ""
  }
)

// $.pvp get's WebRTC DataChannel Object
$.pvp.send("hello");
~~~
