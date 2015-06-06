module.exports = function(item) {
  if (item == null) {
    item = 'Bob';
  }
  return console.log("" + item);
};
