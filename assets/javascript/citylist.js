console.log(cities[0][attributesChosen[0]][0])
    console.log(cities[0][attributesChosen[0]][1])
   	
   	
   		function showCity0List(){ 
        	for(var i = 0; i < cities.length; i++){
            	if(cities[i][attributesChosen[0]][0] >= 1){
                	var citybutton = $('<button>')
                	.attr("data-name", cities[i].city)
                	.text(cities[i].city)
                	$("body").append(citybutton); 
                 	console.log(cities[i][attributesChosen[0]][1]);   
           		}
        	}               
    	}
    	function showCity1List(){ 
        	for(var i = 0; i < cities.length; i++){
        		console.log(attributesChosen[1])
            	if(cities[i][attributesChosen[1]][0] >= 3){
                	var citybutton = $('<button>')
                	.attr("data-name", cities[i].city)
                	.text(cities[i].city)
                	$("body").append(citybutton); 
                 	console.log(cities[i][attributesChosen[1]][1]);   
           		}
        	}               
    	}
    	function showCity2List(){ 
        	for(var i = 0; i < cities.length; i++){
            	if(cities[i][attributesChosen[2]][0] >= 3){
                	var citybutton = $('<button>')
                	.attr("data-name", cities[i].city)
                	.text(cities[i].city)
                	$("body").append(citybutton); 
                 	console.log(cities[i][attributesChosen[2]][1]);   
           		}
        	}               
    	}

    //end of functions to showcity lists