
function something(){
    // create new var this var will climb in local storage and looking key
    // 'key' equals type string bat we need var int then we do (x = x * 1)
    // it will do var x like in and we do this x = x + 1
    // then we set var in localStorage
    var x = window.localStorage.getItem('key');
    x = (x * 1) + 1
    window.localStorage.setItem('key', x);
    alert(x);
}