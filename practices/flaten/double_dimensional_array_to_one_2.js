'use strict';

function double_to_one(collection) {
  	var Arr = [];
	var Arr1 = [];
	var i = 0;
	var j = 0;
	var n = 0;
	for (i = 0;i < collection.length;i++){
		if(collection[i]&&collection[i].length){
			for(j = 0;j < collection[i].length;j++){
				Arr.push(collection[i][j]);
			}	
		}		
		else{Arr.push(collection[i]);}
	}
	for(var i = 0; i < Arr.length; i++) 
	{	
		if (Arr1.indexOf(Arr[i]) == -1) Arr1.push(Arr[i]);
	}
	return Arr1;
  
}

module.exports = double_to_one;
