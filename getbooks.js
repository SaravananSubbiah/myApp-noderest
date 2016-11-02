function printMessage(username,badgeCount,points)
{
	var message = username + " has " + badgeCount + " total badges(s) and " + points + " points in javascript";
	console.log(message);
}
function printError(error)
{
	var message = error;
	console.error(message);
}
function getbooks()
{

		//printMessage("Saravanan", 6, 3434);
		//var http = http.get("http://teamtreehouse.com" + username + ".json", 
		var http = require("http");
		var request = http.get("http://localhost:8369/BookService.svc/books/",
		function (response){
			//console.dir(response);
			console.log(response.statusCode);
			var body = "";
			response.on('data',function(chunk){
				body += chunk;
			});			
			response.on('end', function(){
				if (response.statusCode === 200)
				{
					try{
					var profile = JSON.parse("{\"" + "books" + "\" : " + body + "}");
					//printMessage(username,profile.BookId, profile.Title);
					for(i = 0; i < profile.books.length; i++) {
					console.log(profile.books[i].BookId + ". " + profile.books[i].Title);
					}
					}
				catch(error){
					printError(error);
					}
				}				
				else
				{
					printError({Message : "There was an error getting"});
				}
			});
							
	
		});

		request.on("error",function(error){
			console.log(error.message);
		});
}
module.exports.getbooks = getbooks;