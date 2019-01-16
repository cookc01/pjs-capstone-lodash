const _ = {
  
  clamp(number,lower,upper){
    //clamp will return the number if it is within the bounds defined by lower and upper. if number is < lower it will return lower. if number is > upper it will return upper. 
    let lowerClampedValue = Math.max(number,lower);
  	let clampedValue = Math.min(lowerClampedValue,upper);
  	return clampedValue;
  }//close clamp
  ,inRange(number,startValue,endValue){
    //returns true if number is within the range specified by startValue and endValue. returns false if number is outside the range. If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value. If the provided start value is larger than the provided end value, the two values should be swapped
    let start;
    let end;
    if (!endValue){
      start = 0;
      end = startValue;
    }
    else if (startValue > endValue){
      start = endValue;
      end = startValue;
    }
    else {
      start = startValue;
      end = endValue;
    }
    
    if (number > start && number < end){
      return true;
    }
    else {
      return false;
    }
  }//close inRange
  ,words(arg){
    //splits the input srting into an array of words. word is defined by the space character
  return arg.split(' ');   
    }//close words
  ,pad(str,length){
    //add spaces to sring to reach desired length. padding is equal on each side of the string. Extra padding will be added to the end of the string. 
    if (length > str.length){
    //determine how much to pad on each end.
    	const startPad = Math.floor((length-str.length)/2);
    	const endPad = Math.floor((length-str.length)/2)+(length%2); 
   return ' '.repeat(startPad)+str+' '.repeat(endPad);
    }
    else{
      return str;
    } 
  }//close pad
  ,has(obj,key){
    //returns true if object contains value at specified key, otherwise returns false
    if(obj[key]){
      return true;      
       }
    else{
      return false;
    }
  }//close has
  ,invert(obj){
    //swap key and value for all object prperties
    
    //read key value pairs into an array
    let arrValues = Object.entries(obj);
    let reversedArray = [];
              
    Object.entries(obj).forEach(([key, value]) => reversedArray.push(`${value}, ${key}`)); 
    return Object.assign({},reversedArray);    
  }//close invert
  ,findKey(obj,predicate){
    //iterate though the object and call the predicate function on each value. returns first truthy key . returns undefined if no truthy values.
    
    for (prop in obj){
      	let value = obj[prop];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return prop;
        }
    }
        return undefined;    
  }//close findKey
  ,drop(arr,dropCount){
    //returns an array with dropCount elements removed from the front of the array. removes one element if dropCount is unspecified.
    if (dropCount){return arr.slice(dropCount);}
    else {return arr.slice(1);}   
  }//close drop
  ,dropWhile(arr,predicate){
    for(let i = 0; i< arr.length; i++){
      if (!predicate(arr[i],i,arr)){
        return arr.slice(i);
      }      
    }
    return arr;
  }//close dropWhile
  ,chunk(arr, size){
    if(!size){size=1;}
		let newArr = [];
 for(let i = 0; i<arr.length; i+=size){
   newArr.push(arr.slice(i,i+size)); 
    }
    return newArr;  
  }//close chunk
};//close _
// Do not write or modify code below this line.
module.exports = _;