var str = 'hello000 world'; // hello000 world
var keyWord = 'wonder'; // without repeated letters !
function createMatrix(text, keyword) {
    var matrix = [];
    var indexStr = 0;
    for (var i = 0; i < Math.ceil(text.length / keyword.length); i++) {
        matrix[i] = [];
        for (var j = 0; j < keyword.length; j++) {
            matrix[i][j] = text[indexStr]
                ? text[indexStr]
                : " ";
            if (text[indexStr] === " ")
                matrix[i][j] = "_";
            indexStr++;
        }
    }
    return matrix;
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
function encryptText(str, keyWord) {
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
function decryptText(text, keyword) {
    var decText = '';
    var decMatrix = [];
    // filling matrix
    // let indexStr = 0;
    // for (let i = 0; i < keyWord.length; i++) {
    //   decMatrix[i] = [];
    //   for (let j = 0; j < Math.ceil(text.length / keyword.length); j++) {
    //     decMatrix[i][j] = `${text[indexStr]}`;
    //     indexStr++;
    //   }
    // }
    // simple filling
    var indexStr = 0;
    for (var i = 0; i < Math.ceil(text.length / keyword.length); i++) {
        decMatrix[i] = [];
        for (var j = 0; j < keyword.length; j++) {
            decMatrix[i][j] = (text[indexStr]) ? text[indexStr] : ' ';
            indexStr++;
        }
    }
    console.log(decMatrix);
    var tempMatrix = [];
    for (var i = 0; i < decMatrix.length; i++) {
        tempMatrix.push(decMatrix[i].slice(0, decMatrix.length));
        tempMatrix.push(decMatrix[i].slice(decMatrix.length));
    }
    console.log(tempMatrix);
    // order for transitions
    var subseqStr = keyWord.split('');
    var orderT = keyWord.split('').sort();
    var resMatrix = [];
    for (var i = 0; i < subseqStr.length; i++) {
        resMatrix.push(tempMatrix[orderT.indexOf(subseqStr[i])]);
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
// console.log(decryptText('hello000 world', 'wonder')) // some questions
// work with browser
var encBtn = document.getElementById('enc-btn');
encBtn.addEventListener('click', function () {
    str = (document.getElementById('text-input')).value;
    keyWord = (document.getElementById('keyword-input')).value;
    var encText = encryptText(str, keyWord); // шифрование текста
    document.getElementById('common-text-area').textContent = encText;
});
var decBtn = document.getElementById('dec-btn');
decBtn.addEventListener('click', function () {
    var encText = (document.getElementById('text-input')).value;
    keyWord = (document.getElementById('keyword-input')).value;
    var decText = decryptText(encText, keyWord); // расшифровка текста
    document.getElementById('common-text-area').textContent = decText;
});
var encInput = document.querySelector('.r-enc-input');
encInput.addEventListener('input', function (e) {
    var target = e.target;
    document.getElementById('r-enc-area').textContent = encryptText(target.value, keyWord);
});
var decInput = document.querySelector('.r-dec-input');
decInput.addEventListener('input', function (e) {
    var target = e.target;
    document.getElementById('r-dec-area').textContent = decryptText(target.value, keyWord);
});
