var str = "hello000 world";
// let matrix: string[][] = [];
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
var startMatrix = createMatrix(Math.ceil(str.length / keyWord.length), keyWord.length); // преобразование строки в матрицу
console.log(startMatrix);
