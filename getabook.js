function printMessage(BookId,Title,ISBN)
{
	var message = "BookId : " + BookId + " with Name : " + Title + " has [ISBN] " + ISBN ;
	console.log(message);
}
function printError(error)
{
	var message = error;
	console.error(message);
}

function getabook(bookid)
{
		//console.log("I am inside getabook");
		//var bookid = 1;
		var http = require("http");
		var request = http.get("http://localhost:8369/BookService.svc/book/" + bookid,
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
					var profile = JSON.parse(body);
					printMessage(profile.BookId, profile.Title, profile.ISBN);
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
module.exports.getabook = getabook;