import * as Http from "http"; 			//Node wird importiert

namespace L05_Server { 					//Server.ts wird ein Namespace  zugewiesen
	console.log("Starting server");		//Starting Server wird in die console ausgegeben
	let port: number = Number(process.env.PORT); // Die Variable port wird deklariert, sie besitzt den Typ number und wird zur number umgewandelt
	if (!port)										//Abfrage ob port false ist
		port = 8100;								//dann setze port auf 8100

	let server: Http.Server = Http.createServer();	//Variable Server vom Typ Http.server wird deklariert und somit ein Server erstellt
	server.addListener("request", handleRequest);	//Ein listener wird dem Server zugewiesen und handleRequest wird aufgerufen. Der listener hört auf eingehende daten
	server.addListener("listening", handleListen);	//Ein listener wird dem Server zugewiesen und handleListen wird aufgerufen
	server.listen(port);							//Der Server hört nun auf eingehende verbindungen am port

	function handleListen(): void {					//Die function handleListen wird erstellt, sie hat keinen Rückgabewert
		console.log("Listening");					//Ausgabe Listening in die Konsole
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {	//Die funktion handleRequest mit den übergabewerten _request und _response vom Typ Http.IncomingMessage bzw Http.ServerResponse wird erstellt
		console.log("I hear voices!");																//Ausgabe I hear voices in die Konsole

		_response.setHeader("content-type", "text/html; charset=utf-8");							//Hinzufügen eines Headers zu _response, text verwendet utf-8 Zeichen
		_response.setHeader("Access-Control-Allow-Origin", "*");									//Der Server kann nun anderweitig als von der Hauptseite aufgerufen werden

		_response.write(_request.url);																//Der Inhalt von _request.url wird in _response geschrieben

		_response.end();																			//_repsonse wird an client weitergegeben und beendet
	}
}