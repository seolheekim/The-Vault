'use strict';
module.exports = function() {

var vault = {};

  function setValue(key, value){
    vault[key] = value;
    return key;

    }

  function getValue(key){
    if(key === undefined){
      return null;
    }else if(!(key in vault)){
      return null;
    }else{
      return vault[key];
    }
  }
  return {
    setValue: setValue,
    getValue: getValue
  }

};