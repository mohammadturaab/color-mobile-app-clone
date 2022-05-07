const path = require("path")
require("dotenv").config({path: "../.env"})

/* ==== External Modules ==== */
const express = require("express");
const cors = require("cors")
/* ==== Internal Modules ==== */

/* ==== Instanced Modules  ==== */
const app = express();
// const routes = require("./routes");
/* ==== Configuration ==== */
// const config = require("@react/config");

/* ==== Middleware ==== */

app.use(express.static(path.join("build")))

app.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(cors())

/* ====  Routes & Controllers  ==== */
app.use("/api", routes)
app.all("/api/*", (req, res, next) => {
 	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
 })

app.use((req, res, next) => {
//res.sendFile(path.join(__dirname, "build", "index.html"))
})


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(
		`reaxion is live at http://localhost:${config.PORT}.`
	);
})