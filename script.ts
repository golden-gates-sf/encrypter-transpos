const str: string = "hello000 world";

const keyWord: string = "ESCAPE";
type Matrix = string[][];

function createMatrix(text: string, keyword: string): Matrix {
  let matrix: Matrix = [];
  let indexStr = 0;
  for (let i = 0; i < Math.ceil(text.length / keyword.length); i++) {
    matrix[i] = [];
    for (let j = 0; j < keyword.length; j++) {
      text[indexStr]
        ? (matrix[i][j] = `${text[indexStr]}`)
        : (matrix[i][j] = " ");
      if (text[indexStr] === " ") matrix[i][j] = "_";
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

function getOrder(word: string): number[] {
  let order: number[] = [];
  for (let i = 0; i < word.length; i++) {
    order.push(word.charCodeAt(i));
  }

  return order;
}

function transposeMatrix(matrix: Matrix): Matrix {
  let trMatr: Matrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    trMatr[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      trMatr[i][j] = matrix[j][i];
    }
  }

  return trMatr;
}

function encrypteText(trMatrix: Matrix): string {
  let encText: string = "";
  for (let j = 0; j < trMatrix[0].length; j++) {
    for (let i = 0; i < trMatrix.length; i++) {
      encText += trMatrix[i][j];
    }
  }

  return encText;
}

function decrypteText(text, word): string {
  // let decText: string = '';
  // let decMatrix: Matrix = [];
  // for (let j = 0; j < word.length; j++) {
  //   for (let i = 0; i < trMatrix.length; i++) {
  //     encText += trMatrix[i][j];
  //   }
  // }

    return
}

const startMatrix: Matrix = createMatrix(str, keyWord); // преобразование строки в матрицу

const orderT: number[] = getOrder(keyWord);
const sortedOrder: number[] = bubbleSort(orderT);

const trMatrix: Matrix = transposeMatrix(startMatrix);
const encText: string = encrypteText(startMatrix); // шифрование текста
// const decMatrix = createDecMatrix(encText, keyWord);

console.log(startMatrix);
console.log(trMatrix);
console.log(transposeMatrix(trMatrix));
console.log(encText);

