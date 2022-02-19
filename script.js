var str = "hello000 world";
var keyWord = 'ESCAPE';
function createMatrix(rows, columns) {
    var matrix = [];
    var indexStr = 0;
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < columns; j++) {
            (str[indexStr]) ? matrix[i][j] = "" + str[indexStr] : matrix[i][j] = ' ';
            if (str[indexStr] === ' ')
                matrix[i][j] = '_';
            indexStr++;
        }
    }
    return matrix;
}
;
// function defineColumnOrder(word: string): void {
//     let charC: number[] = [];
//     for (let i = 0; i < word.length; i++) {
//         charC.push(word.charCodeAt(i));
//     }
//     console.log(charC);
// };
// defineColumnOrder(keyWord);
// function transposeMatrix(matrix): Matrix {
//     return 
// }
function encrypteText(trMatrix) {
    var encText = '';
    for (var j = 0; j < trMatrix[0].length; j++) {
        for (var i = 0; i < trMatrix.length; i++) {
            encText += trMatrix[i][j];
        }
    }
    return encText;
}
var startMatrix = createMatrix(Math.ceil(str.length / keyWord.length), keyWord.length); // преобразование строки в матрицу
var encText = encrypteText(startMatrix); // шифрование текста
console.log(startMatrix);
console.log(encText);
