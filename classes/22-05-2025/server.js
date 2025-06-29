console.log("server.js");

const http = require("node:http");
const { json } = require("node:stream/consumers");

const todoDummyData = {
  result: [
    {
      userid: 1,
      name: "Azit",
    },
    {
      userid: 2,
      name: "Rana",
    },
  ],
};
const userDummyData = {
  result: [
    {
      userid: 1,
      name: "Ajeet",
    },
    {
      userid: 2,
      name: "Rana",
    },
  ],
};

const serverFn = (req, res) => {
  console.log(req.url);
  console.log("Request received");

  if (req.url == "/todos") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (req.method == "GET") {
      res.end(JSON.stringify(todoDummyData));
    } else if (req.method == "POST") {
      res.end(JSON.stringify({ message: "Dummy Post Todo API" }));
    }
  } else if (req.url == "/users") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(userDummyData));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        result: [],
      })
    );
  }
};

const server = http.createServer(serverFn);

server.listen(8080, () =>
  console.log("Rana server is up and running at port 8000")
);
