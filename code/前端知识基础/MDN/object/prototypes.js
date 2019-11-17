function Person(first, last, age, gender, interests) {
  
    // 属性与方法定义
    this.name = {
        'first':first,
        'last':last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        alert(this.name.first + '' + this.name.last + 'is' +this.age+ 'years old. He likes '+this.interests[0]+this.interests[1]+'.');
    };
    this.greeting = function(){
        alert('Hi! I\'m ' + this.name.first + '.');
    };
  };

  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

  Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
  }
