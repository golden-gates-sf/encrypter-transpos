var str = "hello000 world";
var keyWord = "WONDER"; // without repeated letters !
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
// function bubbleSort(arr) {
//   for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//     for (var j = 0, endJ = endI - i; j < endJ; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//   }
//   return arr;
// }
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
function decrypteText(text, keyword) {
    var decText = '';
    var decMatrix = [];
    // filling matrix
    var indexStr = 0;
    for (var i = 0; i < keyWord.length; i++) {
        decMatrix[i] = [];
        for (var j = 0; j < Math.ceil(text.length / keyword.length); j++) {
            decMatrix[i][j] = "" + text[indexStr];
            indexStr++;
        }
    }
    // simple filling
    // let indexStr = 0;
    // for (let i = 0; i < Math.ceil(text.length / keyword.length); i++) {
    //   decMatrix[i] = [];
    //   for (let j = 0; j < keyword.length; j++) {
    //     decMatrix[i][j] = `${text[indexStr]}`
    //     indexStr++;
    //   }
    // }
    // order for transitions
    var subseqStr = keyWord.split('');
    var orderT = keyWord.split('').sort();
    var resMatrix = [];
    for (var i = 0; i < subseqStr.length; i++) {
        resMatrix.push(decMatrix[orderT.indexOf(subseqStr[i])]);
    }
    var trMatrix = transposeMatrix(resMatrix);
    for (var i = 0; i < trMatrix.length; i++) {
        for (var j = 0; j < trMatrix[0].length; j++) {
            trMatrix[i][j] === '_'
                ? (decText += ' ')
                : (decText += trMatrix[i][j]);
        }
    }
    return decText;
}
var encText = encrypteText(str, keyWord); // шифрование текста
var decText = decrypteText(encText, keyWord); // расшифровка текста
console.log(str);
console.log(keyWord);
console.log(encText);
console.log(decText);
