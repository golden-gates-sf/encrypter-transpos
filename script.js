var str = "hello000 world";
var keyWord = "ESCAPE";
function createMatrix(text, keyword) {
    var matrix = [];
    var indexStr = 0;
    for (var i = 0; i < Math.ceil(text.length / keyword.length); i++) {
        matrix[i] = [];
        for (var j = 0; j < keyword.length; j++) {
            text[indexStr]
                ? (matrix[i][j] = "" + text[indexStr])
                : (matrix[i][j] = " ");
            if (text[indexStr] === " ")
                matrix[i][j] = "_";
            indexStr++;
        }
    }
    return matrix;
}
// function createDecMatrix(text: string, word: string): Matrix {
//   let matrix: Matrix = [];
//   let indexStr = 0;
//   for (let j = 0; j < word.length; j++) {
//     matrix[j] = [];
//     for (let i = 0; i < Math.ceil(text.length / keyWord.length); i++) {
//       text[indexStr]
//         ? (matrix[i][j] = `${text[indexStr]}`)
//         : (matrix[i][j] = " ");
//       if (text[indexStr] === " ") matrix[i][j] = "_";
//       indexStr++;
//     }
//   }
//   return matrix;
// }
function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
function getOrder(word) {
    var order = [];
    for (var i = 0; i < word.length; i++) {
        order.push(word.charCodeAt(i));
    }
    return order;
}
function transposeMatrix(matrix) {
    var trMatr = [];
    for (var i = 0; i < matrix[0].length; i++) {
        trMatr[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            trMatr[i][j] = matrix[j][i];
        }
    }
    return trMatr;
}
function encrypteText(str, keyWord) {
    var startMatrix = createMatrix(str, keyWord); // преобразование строки в матрицу
    var trMatrix = transposeMatrix(startMatrix); // транспонирование матрицы
    var orderT = getOrder(keyWord); // последовательность для шифрования
    for (var i = 0, endI = orderT.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (orderT[j] > orderT[j + 1]) {
                var swap = orderT[j];
                orderT[j] = orderT[j + 1];
                orderT[j + 1] = swap;
                var tempEl = trMatrix[j];
                trMatrix[j] = trMatrix[j + 1];
                trMatrix[j + 1] = tempEl;
            }
        }
    }
    var encText = "";
    // classic reading
    for (var i = 0; i < trMatrix.length; i++) {
        for (var j = 0; j < trMatrix[0].length; j++) {
            encText += trMatrix[i][j];
        }
    }
    // считывание в столбик
    // for (let j = 0; j < trMatrix[0].length; j++) {
    //   for (let i = 0; i < trMatrix.length; i++) {
    //     encText += trMatrix[i][j];
    //   }
    // }
    return encText;
}
function decrypteText(text, word) {
    // let decText: string = '';
    // let decMatrix: Matrix = [];
    // for (let j = 0; j < word.length; j++) {
    //   for (let i = 0; i < trMatrix.length; i++) {
    //     encText += trMatrix[i][j];
    //   }
    // }
    return;
}
var encText = encrypteText(str, keyWord); // шифрование текста
// const decMatrix = createDecMatrix(encText, keyWord);
console.log(encText);
