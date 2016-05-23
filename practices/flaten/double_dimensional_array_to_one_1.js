'use strict';

function double_to_one(collection) {
	var Arr = [];
	var i = 0;
	var j = 0;
	for (i = 0;i < collection.length;i++){
		if(collection[i]&&collection[i].length){
			for(j = 0;j < collection[i].length;j++){
				Arr.push(collection[i][j]);
			}	
		}		
		else{Arr.push(collection[i]);}
	}
	return Arr;
  
}

module.exports = double_to_one;
