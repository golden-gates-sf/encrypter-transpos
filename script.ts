const str: string = "hello000 world";

// let matrix: string[][] = [];
const keyWord: string = 'ESCAPE';

function createMatrix(rows: number, columns: number): string[][] {
    let matrix: string[][] = [];
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
}

const startMatrix: string[][] = createMatrix(Math.ceil(str.length / keyWord.length), keyWord.length); // преобразование строки в матрицу

console.log(startMatrix);