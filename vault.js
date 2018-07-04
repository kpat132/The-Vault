'use strict';
module.exports = function() {

  let obj = {};

  function setValue(key,value){
    obj[key]=value;

  }
  function getValue(key){
    if(obj[key]){
      return obj[key]
    }
    else{
      return null;
    }
  }

  return{
    setValue,
    getValue
  }
  
};