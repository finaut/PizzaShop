// эта функция вызывается каждый раз когда мы нажимаем но кнопку
// добавить товар в корзину
function  add_to_cart(id) {
        // как только  мы нажимаем на кнопку добавить в корзину
    // мы инициализируем переменную key в которую вносим свои значения по типу
    // тоесть переменная key будет означать  product_id(id = 1/2/3)
    let key = 'product_' + id
    // дальше у нас есть что наподобие hh и мы его иницализируем
    // как x тоесть у x уже есть значение ключа и оно приравнивается к key
    // потом у нас есть значение ключа и это x
    let x = window.localStorage.getItem(key);
    // в нашем случае мы переменую x обозначаем как перенную интеджер
    // и каждый раз когда когда нажимаем на кнопку мы увеличиваем значение x на + 1
    x =(x*1) + 1;
    // и под конец мы записываем все наши ключи value в локальное хранилище
    window.localStorage.setItem(key,x);

//    alert('Items in your cart: ' + cart_get_number_of_items())
    update_orders_inputs();
    update_orders_button();
}

function update_orders_inputs() {
    var orders  = cart_get_orders()
    $('#orders_input').val(orders);
}

function update_orders_button() {
    var orders = cart_get_number_of_items()
    $('#orders_button').val('Cart ('+orders + ')')

}
    // в этой функции мы будем присваивать значения
function cart_get_number_of_items() {


    var cnt = 0;
    // эта херня наподобие each в  руби только  у этого оператора
    // есть начало;         условия;                шаг
    for( let i = 0; i < window.localStorage.length; i++){
        // начало выполняется всего 1раз  при входе,
        // условия Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
        // Выполняется после тела цикла на каждой итерации перед проверкой условия.
        // и разумеется действия
        // конктретно в этом действие
        // мы инициализируют новые переменные
        // key в нашем случаем будет служить для получения значений ключа из hh
        var key = window.localStorage.key(i);
        // тут мы будем получать значение по ключу
        var value = window.localStorage.getItem(key); // в руби это можно сделать при помощи hh['ddd'] = value

        // теперь  нужно организовать проверку ключа

        // в данном случае мы возьмем наш ключ
        // в JS есть такая функция она возвращает нам значение номера позиции в строке с которой
        if(key.indexOf('product_')===0) { // с которй начинается это выражене key.indexOf('product_') #=> ответ должен быть 0
            // так как все смволы в параметрах у нас  совпадают  ("product_") а потом у нас идет наш id
            cnt = cnt + (value * 1);
        }
    }
    return cnt ;
}

// сейчас я хочу написать функцию которая будет записывать значение в input text
function cart_get_orders(){
    var orders = '' ;

    for(var i = 0; i < window.localStorage.length; i++){

        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);

        if(key.indexOf('product_')===0){
            orders = orders + key + '=' + value + ',';
        }
    }
    return orders
}