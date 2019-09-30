$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xml/movies.xml",
		dataType: "xml",
		success: onSuccess,
		error: onError
	});
});

function onSuccess(xml){
	var tableContent = "<table border='1' cellspacing='0' cellpadding='5'>" +
						"<tr>" +
							"<th>Title</th>" +
							"<th>Genre</th>" +
							"<th>Director</th>" +
							"<th>Cast</th>" +
							"<th>Short Description</th>" +
							"<th>IMDB - Rating</th>" +
						"</tr>";
		$(xml).find('movie').each(function(){
			var genre = $(this).find('genre');
			var genreList = "";
			for(var i=0; i<genre.length; i++){
				genreList += genre.eq(i).text();
				genreList += ", ";
			}
			genreList = genreList.slice(0,-2);

			var castList = "";
			$(this).find('person').each(function(){
				castList += $(this).attr('name');
				castList += ', ';
			});
			castList = castList.slice(0,-2);

			tableContent += "<tr>" +
								"<td>" + $(this).find('title').text() + "</td>" +
								"<td>" + genreList + "</td>" +
								"<td>" + $(this).find('director').text() + "</td>" +
								"<td>" + castList + "</td>" +
								"<td>" + $(this).find('synopsis').text() + "</td>" +
								"<td>" + $(this).find('score').text() + "</td>" +
							"</tr>";

		});
		tableContent += "</table>"
		$("#movieList").html(tableContent);
}

function onError(data){
	$("#movieList").html("Error! Please try again.");
}