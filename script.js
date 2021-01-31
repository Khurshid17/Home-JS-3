var a = +prompt('Введите число');
var b = +prompt('Введите степень');

if (isNaN(b) || b == 0) {
    b = 2
}

for (let i = 0; i < b; i++) {
    s = s * a
}

alert(s)

