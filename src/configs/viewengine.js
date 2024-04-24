import express from "express";

//cinfig view engine for an express app
let configviewengine = (app) => {
    app.use(express.static('./src.public'));
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}
module.exports = configviewengine;