// create new var this var will climb in local storage and looking key
// 'key' equals type string bat we need var int then we do (x = x * 1)
// it will do var x like in and we do this x = x + 1
// then we set var in localStorage




function something() {

    // как бы это выглядело в руби
    var x = window.localStorage.getItem('key'); // эта конструкция равносильна x = hh['key']
    x = (x * 1) + 1; // x = x + 1 <-- таким образом мы преобразовуем строку в число
    window.localStorage.setItem('key', x); // hh['key'] = x
    alert(x);
}

function add_to_cart(id)
{
    var key = 'product_' + id
    // инцализируем новую переменную внутри функции
    // она будет хранится в локальной памяти браузера
    var x = window.localStorage.getItem(key);
    // тоесть x будет названием для какого-то элемента для нашего асоциативного массива
    // тоесть сейчас мы даем название нашему элементу
    // product_1 - будет будет означать что бы для id - 1 тоесть маргартта сделал 1 заказ
    // и если мы еще раз нажнем на заказать маргариту то значение увелчтся на 1
    x = (x * 1) + 1;
    // сохраняем в памяти эти значения что бы мы знали чему какой id cоответствует
    window.localStorage.setItem(key, x);
    alert(x);
}