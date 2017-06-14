function showWikiPara(){

	for ( var z = 0 ; z < cities.length ; z ++){

		if(cities[z].fullName == wikiName){

			var wikiTitle = cities[z].wikiTitle

			var queryURL5 = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=6&exintro=&explaintext=&titles="+wikiTitle+"";

			$.ajax({
                url: queryURL5,	
                method: "GET"
            }).done(function(response) {

            		$.each(response.query.pages, function(c){
            			var ext = response.query.pages[c].extract;
            			console.log(ext);
            			$(".cityPara").html(ext);
            		});
       		});	
    	}	
	}
}
