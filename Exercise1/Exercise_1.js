//INPUT: Arreglo NxM
let items = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//VARIABLES
let list = [];
let lim_row = items.length; 
let lim_col = items[0].length;
let dir = 0; 

let size = items.length * items[0].length; 
var iter = 1; 
let row = 0; 
let col = 0; 

//METODO PRINCIPAL
while(iter <= size){
    if(dir == 0 && iter <= size){
        list.push(items[row][col]);
        iter++;
        col++;
        if(col == lim_col){ 
            dir = 1;
            col = row + 1;
        }
    }
    if(dir == 1 && iter <= size){ 
        list.push(items[col][lim_col-1]); 
        iter++;
        col++;
        if(col == lim_row){ 
            dir = 2;
            col = lim_col - 2;
        }
    }
    if(dir == 2 && iter <= size){
        list.push(items[lim_row-1][col]);
        iter++;
        col--;
        if(col == row-1){
            dir = 3;
            col = lim_row - 2;
        }
    }
    if(dir == 3 && iter <= size){
        list.push(items[col][row]);
        iter++;
        col--;
        if(col == row){
            dir = 0;
            lim_col--;
            lim_row--;
            row++;
            col = row;
        }
    }
}
//Impresion de arreglo final
console.log(list);