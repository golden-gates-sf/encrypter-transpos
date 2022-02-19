const str: string = "hello000 world";

const keyWord: string = 'ESCAPE';
type Matrix = string[][];

function createMatrix(rows: number, columns: number): Matrix {
    let matrix: Matrix = [];
    let indexStr = 0;
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            (str[indexStr]) ? matrix[i][j] = `${str[indexStr]}` : matrix[i][j] = ' ';
            if (str[indexStr] === ' ') matrix[i][j] = '_';
            indexStr++;
        }
    }

    return matrix;
};

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

function encrypteText(trMatrix: Matrix): string {
    let encText: string = '';
    for (let j = 0; j < trMatrix[0].length; j++) {
        for (let i = 0; i < trMatrix.length; i++) {
            encText += trMatrix[i][j];
        }
    }

    return encText;
}

const startMatrix: Matrix = createMatrix(Math.ceil(str.length / keyWord.length), keyWord.length); // преобразование строки в матрицу
const encText: string = encrypteText(startMatrix); // шифрование текста

console.log(startMatrix);
console.log(encText);