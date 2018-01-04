'use strict';
module.exports = function() {
  //define an object
  var obj = {};

  //creates a function setValue that sets the objects key equal to its value.
  function setValue (key, value){
    obj[key] = value;
  }
  function getValue(key){
//if the key is undefined OR if the key's value does not exists then return null
    if(key === undefined || !obj[key] ){
      return null;
    }
//else return the key's corresponding value
    else{
      return obj[key];
    }
  }
  //return the functions
  return{
    setValue: setValue,
    getValue: getValue
  }

};