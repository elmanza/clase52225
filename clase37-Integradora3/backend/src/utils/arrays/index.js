
function validateId(arr) {
  if (arr.length) {
    let idMayor = arr.reduce((p, c) => {
      return c._id > p ? c._id : p;
    }, 0);
    return idMayor + 1;
  }
  return 1;
}

module.exports = {
  validateId
}