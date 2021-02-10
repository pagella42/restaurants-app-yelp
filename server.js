let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const request = require("request");
const path = require('path')

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))


//allow foregin requests (ONLY FOR DEV MODE)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.get("/restaurants/:limit/:location/:category", function (req, res) {
  try {
    const headers = {
      Authorization:
        `Bearer ${PROCESS.ENV.YELP_API_KEY}`,
    };
    let URL = `https://api.yelp.com/v3/businesses/search?limit=${req.params.limit}`;
    if (req.params.location != "null") {
      URL = URL + `&location=${req.params.location}`;
    } 
    if (req.params.category != "null") {
      URL = URL + `&categories=${req.params.category}`;
    }
    console.log(URL)
    request({ headers: headers, url: URL, method: "GET" }, (err, response) => {
      console.log(response.body)
      if (err) res.send({ status: 400, error: err });
      const data = JSON.parse(response.body).businesses;
      res.send({ status: 200, data });
    });
  } catch (error) {
    res.send({ status: 400, error });
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
