do {
    var step = prompt('Введите количество ступеней');
    var total  = symbol
    
}while ((isNaN(step) || step == 0 || step == "" || step < 0) && indent == "" && symbol == "")

do {
    var indent = prompt('Введите символ отступов');
    var symbol = prompt('Введите конечный символ');
}while (indent == "" || symbol == "") 

var total  = symbol
for (let i = 0; i < step; i++) {
    total = indent + total
    console.log(total);
}