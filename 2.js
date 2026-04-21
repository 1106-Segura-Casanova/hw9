const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const matrix= [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


function flipMatrix(matrix) {
  const flippedMatrix = [];
  var i = 0;
  while (i < matrix[0].length) {
    var j = matrix.length - 1;
    const row = [];
    while (j >= 0) {
      row.push(matrix[j][i]);
      j -= 1;
    }
    flippedMatrix.push(row);
    i += 1;
  }
  return flippedMatrix;
}


function printMatrix(matrix){
    for (var i = 0; i < matrix.length; i ++){
        console.log(matrix[i]);
    }
}

async function main(){
    var go;
    console.log("original matrix:")
    printMatrix(matrix);
    go = await rl.question("Hit 1 to flip matrix  ");
    if(go == "1"){
        console.log("new matrix");
        flipMatrix(matrix);
        printMatrix(flipMatrix(matrix));
    }
}
main();
