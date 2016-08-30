var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var new_rec = object

  return Object.assign({}, new_rec, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // Object.assign({}, object, {[key]: value})
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}

