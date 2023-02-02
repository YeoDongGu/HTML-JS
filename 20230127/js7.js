function sayHi(){
    alert(arguments.length);
    if(arguments.length == 1){
        alert(arguments[0]);
    } else if (arguments.length == 2){
        alert(arguments[0] + ":" + arguments[1])
    }
}

sayHi();
sayHi('seungjin');
sayHi('seungjin', 'kildong');
