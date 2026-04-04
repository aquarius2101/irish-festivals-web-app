require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Festival = require("./models/festival");

//create the Express app
const app = express();

//instruction with the view engine to be used
app.set("view engine", "ejs");

//connection to MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

//middleware to allow access to static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/*--------------------- Routing ---------------------*/
// index page
app.get("/", (request, response) => {
  Festival.find({
      "startDate": {"$lte": new Date()},
      "endDate": {"$gte": new Date()}
    })
    .sort({ startDate: 1 })
    .then((result) =>
      response.render("index", { title: "Home", festivals: result })
    )
    .catch((error) => console.log(error));
});

// create page (add new festival)
app.get("/create", (request, response) => {
  response.render("create", { title: "Add new festival" });
});

//list page
app.get("/list", (request, response) => {
  Festival.find()
    .sort({ startDate: 1})
    .then((result) =>
      response.render("list", { title: "Festivals", festivals: result })
    )
    .catch((error) => console.log(error));
});

//single festival page
app.get("/:id", (request, response) => {
  const id = request.params.id;
  Festival.findById(id)
    .then((result) =>
      response.render("festival", { festival: result, title: "Single festival details" })
    )
    .catch((error) => console.log(error));
});

/*------------------ Form handlers (CRUD) ------------------*/
// delete
app.delete("/:id", (request, response) => {
  const id = request.params.id;
  Festival.findByIdAndDelete(id)
    .then((result) => {
      response.json({ redirect: "/" });
    })
    .catch((error) => console.log(error));
});

// create a new festival
app.post("/", (request, response) => {
  //retrieve the new festival details
  const festival = new Festival(request.body);

  festival
    .save()
    .then((result) => {
      response.render("festival", { festival: result, title: "Single festival details" });
    })
    .catch((error) => console.log(error));
});

// update a festival
app.post("/edit", (request, response) => {
  //retrieve the new festival details
  const festival = new Festival(request.body);

  //parse it into two separate objects: the festival new details and the ID
  const newFestivalData = {
    title: festival.title,
    startDate: festival.startDate,
    endDate: festival.endDate,
    county: festival.county,
    website: festival.website, 
    shortDesc: festival.shortDesc
  };
  const id = request.body.id;

  Festival.findByIdAndUpdate(id, newFestivalData, {new : true})
    .then((result) => 
      response.render("festival", { festival: result, title: "Single festival details" })
    )
    .catch((error) => console.log(error));
});

/*--------------------- Charts ---------------------*/
// Pie chart API: return festival counts by county
app.get("/api/pie-chart", async (req, res) => {
  try {
    const countyResult = await Festival.aggregate([
      { $group: { _id: "$county", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json(countyResult);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

// Bar chart API: return festival counts by month
app.get("/api/bar-chart", async (req, res) => {
  try {
    const monthResult = await Festival.aggregate([
      
      {$match: { startDate: {             // filter only festivals starting in 2026
            $gte: new Date("2026-01-01"),
            $lt: new Date("2027-01-01")
          }
        }
      },
      { $group: { _id: { $month: "$startDate" }, count: { $sum: 1 } } },
      { $sort:  { _id: 1 }  }
    ]);

    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    // Fill in missing months with count 0
    const filled = monthNames.map((name, index) => {
      const match = monthResult.find(r => r._id === index + 1);
      return {
        month: name,
        count: match ? match.count : 0
      };
    });

    res.json(filled);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching month data");
  }
});

// Render the main page
app.get("/", (req, res) => {
  res.render("index"); // no data injected directly
});

//404 page
app.use((request, response) => {
  response.status(404).render("404", { title: "Error" });
});
