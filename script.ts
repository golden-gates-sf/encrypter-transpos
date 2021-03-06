let str: string = 'hello000 world'; // hello000 world

let keyWord: string = 'wonder'; // without repeated letters !
type Matrix = string[][];

function createMatrix(text: string, keyword: string): Matrix {
  let matrix: Matrix = [];
  let indexStr = 0;
  for (let i = 0; i < Math.ceil(text.length / keyword.length); i++) {
    matrix[i] = [];
    for (let j = 0; j < keyword.length; j++) {
      matrix[i][j] = text[indexStr]
        ? text[indexStr]
        : " ";
      if (text[indexStr] === " ") matrix[i][j] = "_";
      indexStr++;
    }
  }

  return matrix;
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

function encryptText(str: string, keyWord: string): string {
  const startMatrix: Matrix = createMatrix(str, keyWord); // преобразование строки в матрицу
  let trMatrix: Matrix = transposeMatrix(startMatrix); // транспонирование матрицы

  const orderT: number[] = getOrder(keyWord); // последовательность для шифрования

  for (let i = 0, endI = orderT.length - 1; i < endI; i++) {
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (orderT[j] > orderT[j + 1]) {
        let swap = orderT[j];
        orderT[j] = orderT[j + 1];
        orderT[j + 1] = swap;

        let tempEl = trMatrix[j];
        trMatrix[j] = trMatrix[j + 1];
        trMatrix[j + 1] = tempEl;
      }
    }
  }

  let encText: string = "";

  // classic reading

  for (let i = 0; i < trMatrix.length; i++) {
    for (let j = 0; j < trMatrix[0].length; j++) {
      encText += trMatrix[i][j];
    }
  }

  return encText;
}

function decryptText(text: string, keyword: string): string {
  let decText: string = '';
  let decMatrix: Matrix = [];

  // filling matrix

  let indexStr = 0;
  for (let i = 0; i < keyWord.length; i++) {
    decMatrix[i] = [];
    for (let j = 0; j < Math.ceil(text.length / keyword.length); j++) {
      decMatrix[i][j] = text[indexStr] || ' ';
      indexStr++;
    }
  }

  // order for transitions
  const subseqStr: string[] = keyWord.split('');
  const orderT: string[] = keyWord.split('').sort();
  let resMatrix: Matrix = [];

  for (let i = 0; i < subseqStr.length; i++) {
    resMatrix.push(decMatrix[orderT.indexOf(subseqStr[i])]);
  }

  let trMatrix: Matrix = transposeMatrix(resMatrix);

  for (let i = 0; i < trMatrix.length; i++) {
    for (let j = 0; j < trMatrix[0].length; j++) {
      decText += (trMatrix[i][j] === '_') ? ' ' : trMatrix[i][j];
    }
  }

  return decText;
}

function checkKeyword(keyword: string): boolean {
  if (!keyWord) return false;
  let checkStr: string = '';
  for (let char of keyword) {
    if (checkStr.includes(char)) return false;
    checkStr += char;
  }

  return true
}

// work with browser

const errorMessage = document.getElementById('error-message');
const keywordInput = document.getElementById('keyword-input');
keywordInput.addEventListener('input', (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  if (!checkKeyword(target.value)) errorMessage.style.visibility = 'visible'
  else errorMessage.style.visibility = 'hidden'; 
});

const encBtn = document.getElementById('enc-btn');
encBtn.addEventListener('click', () => {
  str = (<HTMLInputElement>(document.getElementById('text-input'))).value;
  if (str && errorMessage.style.visibility === 'hidden') {
    keyWord = (<HTMLInputElement>keywordInput).value;
    const encText: string = encryptText(str, keyWord); // шифрование текста
    document.getElementById('common-text-area').textContent = encText;
  }
});

const decBtn = document.getElementById('dec-btn');
decBtn.addEventListener('click', () => {
  const encText: string = (<HTMLInputElement>(document.getElementById('text-input'))).value;
  if (checkKeyword((<HTMLInputElement>keywordInput).value)) keyWord = (<HTMLInputElement>keywordInput).value;
  const decText: string = decryptText(encText, keyWord); // расшифровка текста
  document.getElementById('common-text-area').textContent = decText;
});

const encInput = document.querySelector('.r-enc-input');
  encInput.addEventListener('input', (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  document.getElementById('r-enc-area').textContent = encryptText(target.value, keyWord); 
});

const decInput = document.querySelector('.r-dec-input');
  decInput.addEventListener('input', (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  document.getElementById('r-dec-area').textContent = decryptText(target.value, keyWord); 
})