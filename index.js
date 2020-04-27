// Write a function that does not modify the original object and returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {
    [key]: value })
}

// Write a function that modifies the original object and updates object with the given key-value. It should return the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object.key = [value];
}
