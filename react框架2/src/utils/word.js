

// 构造函数  (构造器 + 原型对象 + 静态属性对象)
export class Person {

    // 构造器 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // 原型对象
    say(){
        return "daydayup~~~"
    }

    walk(){
        return "walk  to fast"
    }


}

// 静态属性对象 
Person.hobby = ["NBA","LOL"];

// super 超类   
// 1.  函数 表明指向是当前父类的构造器  constructor 
// 2.  对象 表明指向的是当前父类的 原型对象 属性  
export class Student extends Person{
    constructor(name,age,score){
        super(name,age);
        this.score = score;
    }

    // 方法重载  
    say(){
        return this.name + "  I like HTML5 " + super.say();
    }
}
Student.hobby = ["Sleep","lating"];

var s1 = new Student("zuozuomu","28","96");
console.log(s1.say())