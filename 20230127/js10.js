var person = new Object();
person.name = "Nicholas";
alert(person.name);

//동적으로 프로퍼티를 추가할 수 있는 값은 참조값 뿐이다
//원시값에는 프로퍼티가 없지만 추가하려 해도 에러가 발생하진 않는다.
var person2 = "Nicholas";
person2.age = 27;
alert(person2.age);

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name);