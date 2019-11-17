function Person(first,last,age,gender,interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function() {
    alert('Hi! I\m '+this.name.first+'.');
};

function Teacher(first,last,age, gender,interests,subject){
    Person.call(this,first, last, age, gender,interests);//call方法:在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承

    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    var prefix;
  
    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
// function Brick(){
//     this.width = 10;
//     this.height =20;
// }

// function BlueGlassBrick(){
//     Brick.call(this);

//     this.opacity = 0.5;
//     this.color = 'blue';
// }
