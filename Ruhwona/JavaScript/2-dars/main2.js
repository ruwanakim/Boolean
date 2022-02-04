// alert('1' + 2 + 2);

let login = prompt('Введите логин:', '');
//ruxshona2006
let password;
//ruxshona
if (login == "ruxshona2006" ) {
    alert('Добро пожаловать!');
    password = prompt('Введите пароль');
    if ( password == "ruxshona") {
        alert('Правильно!');
    }else{
        alert('Неправильно')
    }

}else{
    alert('Извините, вы ввели неправильный логин');
}
