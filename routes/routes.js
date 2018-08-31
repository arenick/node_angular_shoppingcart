"use strict";

const express = require("express");
const list = express.Router();
const pool = require("../pg_connections_pool");

list.get("/list/all", (req, res) => {
    pool.query("SELECT * FROM ShoppingCart").then((results) => {
        console.log("text");
        // console.log(results.rows);
        res.send(results.rows);
    });
});

list.post("/list/all", (req, res) => {
    pool.query("INSERT INTO ShoppingCart(product, price, quanity)", [req.body.products, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM ShoppinCart").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        });
    });
});

list.put("/list/:id", (req,res) => {
    pool.query("UPDATE ShoppingCart SET quantity=$1::int WHERE id=$2::int", [req.body.item, parseInt(req.params.id)]).then(() => {
    });
});

list.delete("/list/:id", (req, res) => {
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int" [parseInt (req.params.id)]).then(() => {
        pool.query("SELECT * FROM ShoppingCart").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        });
    });
});

module.exports = list;