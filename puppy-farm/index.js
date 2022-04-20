const http = require("http");
const url = require("url");
const fs = require("fs");
const replaceTemplate = require("./modules/replaceTemplate");

// load data and pages on first load
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

// replace data
// const replaceTemplate = (template, puppyData) => {
//   let output = template.replace(/%DOGBREED%/g, puppyData.dogBreed);
//   output = output.replace(/{%IMAGE%}/g, puppyData.image);
//   output = output.replace(/{%ORIGIN%}/g, puppyData.origin);
//   output = output.replace(/{%OTHER_NAMES%}/g, puppyData.otherNames);
//   output = output.replace(/{%TEMPERAMENT%}/g, puppyData.temperament);
//   output = output.replace(/{%DEMEANOR%}/g, puppyData.demeanor);
//   output = output.replace(/{%FAMILY_DOG%}/g, puppyData.familyDog);
//   output = output.replace(/{%COST%}/g, puppyData.cost);
//   output = output.replace(/{%CARD_DESCRIPTION%}/g, puppyData.description);
//   output = output.replace(/{%ID%}/g, puppyData.id);

// if (!puppyData.familyDog)
//   output = output.replace(/{%FAMILY_DOG%}/g, "not a family dog");

//   return output;
// };

// *** Server ***
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    // basic setup to ensure server is running
    res.writeHead(200, {
      // "Content-type": "application/json",
      "Content-type": "text/html",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(templateCard, el))
      .join("");
    // console.log(cardsHtml);
    const output = templateOverview.replace("{%PUPPY_CARDS%}", cardsHtml);
    res.end(output);
    // ***End of Overview***
  } else if (pathname === "/puppy") {
    // Puppy page
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const puppy = dataObj[query.id];
    const output = replaceTemplate(templatePuppy, puppy);

    res.end(output);
  } else {
    // ***Start Not Found***
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }

  // res.end(data);
  //   console.log(data);
});
server.listen(5500, "127.0.0.1", () => {
  console.log("Listening to requests on port 5500");
});
