//core modules 
const fs = require("fs");
//custom modules
const { logger : log, logger2 } = require("./utils");
// Third party modules <node package manger>
const express = require("express");

const newTask = process.argv[2]
const [,,newTask] = process.argv

// const tasks = JSON.parse(fs.readFileSync("./database.json"))
// tasks.push({task : newTask})

// fs.writeFileSync("database.json", JSON.stringify(tasks))

log("hello")