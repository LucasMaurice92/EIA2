"use strict";
exports.__esModule = true;
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
var Mongo = require("mongodb");
console.log("Database starting");
// let databaseURL: string = "mongodb://localhost:27017";
var databaseURL = "mongodb+srv://user1:user123@eiatest-8zhhe.mongodb.net/EIAE08";
var databaseName = "EIAE08";
var db;
var students;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://user1:user123@eiatest-8zhhe.mongodb.net/EIAE08";
    databaseName = "EIAE08";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName); // Bei erfolgreicher Verbingdung werden  daten ausgelesen und in der Datenbank gespeichert
        students = db.collection("Students"); // nimmt die collection Students aus der db EIAE08
    }
}
function search(_searchedMat, _callback) {
    var numbersearchedMat;
    numbersearchedMat = parseInt(_searchedMat);
    var cursor = students.find({ "matrikel": numbersearchedMat });
    cursor.toArray(returnSearch);
    console.log("WORKS :)");
    function returnSearch(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            // stringify creates a json-string, passed it back to _callback
            console.log(JSON.stringify(studentArray));
            _callback(JSON.stringify(studentArray));
        }
    }
}
exports.search = search;
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert); // Führt handleInsert aus
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = students.find(); // Zeiger auf alle gefundenen Dokumente
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer); // fügt alle mit students.find() gefundenen Dokumente in ein Array hinzu // toArray erwartet callback Funktion
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
exports.findAll = findAll;
