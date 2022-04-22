const eachWithLimit = (arr, max, options) => {
  if (!arr || arr.length == 0)
    return options.inverse(this);

  var result = [];
  for (var i = 0; i < max && i < arr.length; ++i)
    result.push(options.fn(arr[i]));
  return result.join('');
}

module.exports = eachWithLimit
