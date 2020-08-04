// create new var this var will climb in local storage and looking key
// 'key' equals type string bat we need var int then we do (x = x * 1)
// it will do var x like in and we do this x = x + 1
// then we set var in localStorage

function something(){

    // как бы это выглядело в руби
    var x = window.localStorage.getItem('key'); // эта конструкция равносильна x = hh['key']
    x = (x * 1) + 1; // x = x + 1 <-- таким образом мы преобразовуем строку в число
    window.localStorage.setItem('key', x); // hh['key'] = x
    alert(x);
}