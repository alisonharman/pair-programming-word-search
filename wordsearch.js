// pair-programing with @ToddDemone

// transpose an array
const transpose = function(matrix) {
  const newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const newInnerArray = [];
    for (let j = 0; j < matrix.length; j++) {
      newInnerArray.push(matrix[j][i]);
    }
    newArray.push(newInnerArray);
  }
  return newArray;
};

// find words if in a horizontal line of matrix
const findWord = function(matrix, word) {
  const lines = matrix.map(ls => ls.join(''));
  for (const line of lines) {
    if (line.includes(word)) return true;
  }
  return false;
};

// should find word if written horizontally or vertically
const wordSearch = (letters, word) => {

  // if letters is a empty array, then return undefined
  if (letters.length === 0) {
    return undefined;
  }
  // should we convert word into uppercase?

  // searchs for word on each horizonatal line
  if (findWord(letters, word)) {
    return true;
  }

  // transposed array turns columns into rows
  const transposedResult = transpose(letters);

  // this will find if any words hidden vertically
  if (findWord(transposedResult, word)) {
    return true;
  }

  return false;
};

module.exports = wordSearch;