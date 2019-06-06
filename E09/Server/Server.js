"use strict";
/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 */
exports.__esModule = true;
var Http = require("http");
var Url = require("url");
var Database = require("./Database"); // von Mongo
console.log("Server starting");
var port = Number(process.env.PORT);
if (!port)
    port = 8100;
var server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    var query = Url.parse(_request.url, true).query;
    var command = query["command"]; // Command wird als variable für die URL abgespeichert
    var searchedMat = query["searchedMat"];
    switch (command) {
        case "insert":
            var student = {
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"])
            };
            Database.insert(student);
            respond(_response, "storing data");
            break;
        case "search":
            Database.search(searchedMat, findCallback);
            // respond(_response, "the following documents contain your configured matrikel");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        console.log("reached callback");
        console.log("response: " + _response + "  json: " + json);
        respond(_response, json);
    }
}
function respond(_response, _json) {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_json); // Storing data wird als text übergeben
    _response.end();
}
