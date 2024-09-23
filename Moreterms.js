// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //Function declaration = defines a reusable block of code 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //                         that performs a specific task

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //Function  expression = a way to define functions as values or variable.
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // const hello = function() {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log("Hello World");
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // hello();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // setTimeout(function(){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log("Hello World");
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // },3000);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // const numbers = [1,2,3,4,5,6,7,8,9,10];
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // const squares = numbers.map(function square(element){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //     return Math.pow(element,2);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // });
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(squares);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // const numbers = [1,2,3,4,5,6,7,8,9,10];
// // // // // // // // // // // // // // // // // // // // // // // // // // // // const total = numbers.reduce(function (accumulator, currentValue){
// // // // // // // // // // // // // // // // // // // // // // // // // // // //     return accumulator + currentValue;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // });
// // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(total);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // const evennum = numbers.filter(function (element){
// // // // // // // // // // // // // // // // // // // // // // // // // // // //     return element % 2 === 0;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // // // // // // // // // // // // // // console.log(evennum);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // ARROW function-> a concise way to write function expressions good for 
// // // // // // // // // // // // // // // // // // // // // // // // // // // //                    simple functions that you use only once
// // // // // // // // // // // // // // // // // // // // // // // // // // // const hello = function(){
// // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log("Hello World");
// // // // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // // const hello = (name) =>console.log(`Hello ${name} World`);
// // // // // // // // // // // // // // // // // // // // // // // // // // hello("lakshy");
// // // // // // // // // // // // // // // // // // // // // // // // // const numbers = [1,2,3,4,5,6,7,8,9,10];
// // // // // // // // // // // // // // // // // // // // // // // // // const squares = numbers.map((element)=>Math.pow(element,2));
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(squares);
// // // // // // // // // // // // // // // // // // // // // // // // // const cubes = numbers.map((element)=>Math.pow(element,3));
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(cubes);


// // // // // // // // // // // // // // // // // // // // // // // // // Javascript Objects ->  a collection of releated properties and/o methods
// // // // // // // // // // // // // // // // // // // // // // // //                         //  Can represent real wrls objects 
// // // // // // // // // // // // // // // // // // // // // // // //                         //  object={key:CSSMathValue,function()}
// // // // // // // // // // // // // // // // // // // // // // // const person = {
// // // // // // // // // // // // // // // // // // // // // // //     firstName: "Lakshy",
// // // // // // // // // // // // // // // // // // // // // // //     lastName: "Sharma",
// // // // // // // // // // // // // // // // // // // // // // //     age: 22,
// // // // // // // // // // // // // // // // // // // // // // //     isemployed:true,
// // // // // // // // // // // // // // // // // // // // // // //     hobbies: ["music","sports","coding"],
// // // // // // // // // // // // // // // // // // // // // // //     address: {
// // // // // // // // // // // // // // // // // // // // // // //         city: "Jaipur",
// // // // // // // // // // // // // // // // // // // // // // //         state: "Rajasthan"
// // // // // // // // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // // // // // // // //     sayhello : function(){
// // // // // // // // // // // // // // // // // // // // // // //         // console.log(`Hello I am Lakshy`);
// // // // // // // // // // // // // // // // // // // // // // //         console.log(`Hello I am ${this.firstName} ${this.lastName}`);
// // // // // // // // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // // // // // // // //     eat: function(){
// // // // // // // // // // // // // // // // // // // // // // //         console.log(`${this.firstName} is eating at ${this.address.city}`);
// // // // // // // // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // console.log('Full name: ' + person.firstName + ' ' + person.lastName);
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(person.hobbies[1]);

// // // // // // // // // // // // // // // // // // // // // // // // console.log(person.address.city);
// // // // // // // // // // // // // // // // // // // // // // // // for (let i = 0; i < person.hobbies.length; i++) {
// // // // // // // // // // // // // // // // // // // // // // // //     console.log(person.hobbies[i]);
// // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // console.log(person.age);
// // // // // // // // // // // // // // // // // // // // // // // // console.log(person.isemployed);
// // // // // // // // // // // // // // // // // // // // // // // // person.sayhello();

// // // // // // // // // // // // // // // // // // // // // // // //WHAT IS THIS=reference to the object where this is  used 
// // // // // // // // // // // // // // // // // // // // // // // person.sayhello();
// // // // // // // // // // // // // // // // // // // // // // // person.eat();
// // // // // // // // // // // // // // // // // // // // // // //constructor = special method for defining the prop and methods of objects
// // // // // // // // // // // // // // // // // // // // // // function Car(make,model,year,color){
// // // // // // // // // // // // // // // // // // // // // //     this.make=make;
// // // // // // // // // // // // // // // // // // // // // //     this.model=model;
// // // // // // // // // // // // // // // // // // // // // //     this.year=year;
// // // // // // // // // // // // // // // // // // // // // //     this.color=color;
// // // // // // // // // // // // // // // // // // // // // //     this.drive=function(){console.log(`You drive the ${this.model}`)};
// // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // const Car1= new Car('BMW','X5',2018,'Black');
// // // // // // // // // // // // // // // // // // // // // // const Car2= new Car('Audi','A8',2019,'White');
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car1.make);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car1.model);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car1.year);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car1.color);


// // // // // // // // // // // // // // // // // // // // // // // console.log(Car2.make);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car2.model);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car2.year);
// // // // // // // // // // // // // // // // // // // // // // // console.log(Car2.color);
// // // // // // // // // // // // // // // // // // // // // // Car1.drive();
// // // // // // // // // // // // // // // // // // // // // // Car2.drive();

// // // // // // // // // // // // // // // // // // // // // // Classes
// // // // // // // // // // // // // // // // // // // // // class Product{
// // // // // // // // // // // // // // // // // // // // //     constructor(name,price,category){
// // // // // // // // // // // // // // // // // // // // //         this.name=name;
// // // // // // // // // // // // // // // // // // // // //         this.price=price;
// // // // // // // // // // // // // // // // // // // // //         this.category=category;
// // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // //     displayProduct(){
// // // // // // // // // // // // // // // // // // // // //         console.log(`The product: ${this.name} is of ${this.category} and its price is $${this.price.toFixed(2)}`);
// // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // //     calculateTax(salesTax){
// // // // // // // // // // // // // // // // // // // // //         return this.price+(this.price * salesTax);
// // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // const salesTax=0.05;
// // // // // // // // // // // // // // // // // // // // // const Product1=new Product('Laptop',1000,'Electronics');
// // // // // // // // // // // // // // // // // // // // // const Product2=new Product('Mobile',500,'Electronics');
// // // // // // // // // // // // // // // // // // // // // const Product3=new Product('TV',2000,'Electronics');
// // // // // // // // // // // // // // // // // // // // // const total = Product1.calculateTax(salesTax);
// // // // // // // // // // // // // // // // // // // // // Product1.displayProduct();
// // // // // // // // // // // // // // // // // // // // // Product2.displayProduct();
// // // // // // // // // // // // // // // // // // // // // console.log(`The total price of the product(with tax) is $${total.toFixed(2)}`);
// // // // // // // // // // // // // // // // // // // // class MathUtil{
// // // // // // // // // // // // // // // // // // // //     static PI=3.14159;
// // // // // // // // // // // // // // // // // // // //     static getDiameter(radius){
// // // // // // // // // // // // // // // // // // // //         return 2*radius;
// // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // //     static getArea(radius){
// // // // // // // // // // // // // // // // // // // //         return this.PI*radius*radius;
// // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // console.log(MathUtil.PI);
// // // // // // // // // // // // // // // // // // // // console.log(MathUtil.getDiameter(5));
// // // // // // // // // // // // // // // // // // // // console.log(MathUtil.getArea(5));
// // // // // // // // // // // // // // // // // // // class User{
// // // // // // // // // // // // // // // // // // //     static userCount=0;
// // // // // // // // // // // // // // // // // // //     constructor(username){
// // // // // // // // // // // // // // // // // // //         this.username=username;
// // // // // // // // // // // // // // // // // // //         User.userCount++;
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //     sayHello(){
// // // // // // // // // // // // // // // // // // //         console.log(`Hello, ${this.username}!`);
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // const user1=new User('Spongebob');
// // // // // // // // // // // // // // // // // // // const user2=new User('Patrick');
// // // // // // // // // // // // // // // // // // // console.log(user1.username);
// // // // // // // // // // // // // // // // // // // console.log(user2.username);
// // // // // // // // // // // // // // // // // // // user1.sayHello();
// // // // // // // // // // // // // // // // // // // user2.sayHello();

// // // // // // // // // // // // // // // // // // // console.log(User.userCount);
// // // // // // // // // // // // // // // // // // // Inheritance = allows a new class to inherit properties
// // // // // // // // // // // // // // // // // // class Animal{
// // // // // // // // // // // // // // // // // //     alive = true;

// // // // // // // // // // // // // // // // // //     eat(){
// // // // // // // // // // // // // // // // // //         console.log(`This ${this.name} is eating`);
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     sleep(){
// // // // // // // // // // // // // // // // // //         console.log(`This ${this.name} is sleeping`);
// // // // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // class Rabbit extends Animal{
// // // // // // // // // // // // // // // // // //     name='Rabbit';
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // class Fish extends Animal{
// // // // // // // // // // // // // // // // // //     name='Fish';
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // class Hawk extends Animal{
// // // // // // // // // // // // // // // // // //     name='Hawk';
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // const rabbit = new Rabbit();
// // // // // // // // // // // // // // // // // // const fish = new Fish();
// // // // // // // // // // // // // // // // // // const hawk = new Hawk();
// // // // // // // // // // // // // // // // // // // rabbit.alive=false;
// // // // // // // // // // // // // // // // // // rabbit.eat();
// // // // // // // // // // // // // // // // // // rabbit.sleep();
// // // // // // // // // // // // // // // // // // console.log(rabbit.alive);
// // // // // // // // // // // // // // // // // // fish.eat();
// // // // // // // // // // // // // // // // // // fish.sleep();
// // // // // // // // // // // // // // // // // // console.log(fish.alive);
// // // // // // // // // // // // // // // // // // hawk.eat();
// // // // // // // // // // // // // // // // // // hawk.sleep();
// // // // // // // // // // // // // // // // // // console.log(hawk.alive);


// // // // // // // // // // // // // // // // // //SUPER KEYWORD
// // // // // // // // // // // // // // // // // class Animal{
// // // // // // // // // // // // // // // // //     constructor(name,age){
// // // // // // // // // // // // // // // // //         this.name = name;
// // // // // // // // // // // // // // // // //         this.age=age;
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     move(speed){
// // // // // // // // // // // // // // // // //         console.log(`This ${this.name} is moving at a speed of ${speed}mph`);
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // class Rabbit extends Animal{
// // // // // // // // // // // // // // // // //     constructor(name,age,runSpeed){
// // // // // // // // // // // // // // // // //         super(name,age);
// // // // // // // // // // // // // // // // //         this.runSpeed=runSpeed;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     run(){
// // // // // // // // // // // // // // // // //        console.log(`This ${this.name} is running at a speed of ${this.runSpeed}mph`);
// // // // // // // // // // // // // // // // //        super.move(this.runSpeed);
// // // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // class fish extends Animal{
// // // // // // // // // // // // // // // // //     constructor(name,age,swimSpeed){
// // // // // // // // // // // // // // // // //         super(name,age);
// // // // // // // // // // // // // // // // //         this.swimSpeed=swimSpeed;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     swim(){
// // // // // // // // // // // // // // // // //         console.log(`This ${this.name} is swimming at a speed of ${this.swimSpeed}mph`);
// // // // // // // // // // // // // // // // //         super.move(this.swimSpeed);
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // class Hawk extends Animal{
// // // // // // // // // // // // // // // // //     constructor(name,age,flySpeed){
// // // // // // // // // // // // // // // // //         super(name,age);
// // // // // // // // // // // // // // // // //         this.flySpeed=flySpeed;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     fly(){
// // // // // // // // // // // // // // // // //         console.log(`This ${this.name} is flying at a speed of ${this.flySpeed}mph`);
// // // // // // // // // // // // // // // // //         super.move(this.flySpeed);
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // const rabbit1 = new Rabbit("rabbit",2,10);
// // // // // // // // // // // // // // // // // const fishm = new fish('fish',1,5);
// // // // // // // // // // // // // // // // // const hawk1 = new Hawk('hawk',3,20);
// // // // // // // // // // // // // // // // // // console.log(rabbit1);    
// // // // // // // // // // // // // // // // // // console.log(fishm);
// // // // // // // // // // // // // // // // // // console.log(hawk1);
// // // // // // // // // // // // // // // // // // fishm.swim();
// // // // // // // // // // // // // // // // // // rabbit1.run();
// // // // // // // // // // // // // // // // // hawk1.fly();
// // // // // // // // // // // // // // // // //Getter- special method that makes a property readable
// // // // // // // // // // // // // // // // //Setter - special method that makes a property writeable

// // // // // // // // // // // // // // // // class Rectangle{
// // // // // // // // // // // // // // // //     constructor(width,height){
// // // // // // // // // // // // // // // //         this.width=width;
// // // // // // // // // // // // // // // //         this.height=height;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     set width(newWidth){
// // // // // // // // // // // // // // // //         if(newWidth>0){
// // // // // // // // // // // // // // // //             this._width=newWidth;}
// // // // // // // // // // // // // // // //         else{
// // // // // // // // // // // // // // // //             console.error("Width must be greater than 0");
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     set height(newHeight){
// // // // // // // // // // // // // // // //         if(newHeight>0){
// // // // // // // // // // // // // // // //             this._height=newHeight;
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //         else{
// // // // // // // // // // // // // // // //             console.error("Height must be greater than 0");
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     get width(){
// // // // // // // // // // // // // // // //         return this._width;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     get height(){
// // // // // // // // // // // // // // // //         return this._height;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     get area(){
// // // // // // // // // // // // // // // //         return this._width*this._height;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // const rect = new Rectangle(3,4);

// // // // // // // // // // // // // // // // rect.width=5;
// // // // // // // // // // // // // // // // rect.height=6;
// // // // // // // // // // // // // // // // console.log(rect.width);
// // // // // // // // // // // // // // // // console.log(rect.height);
// // // // // // // // // // // // // // // // console.log(rect.area);
// // // // // // // // // // // // // // // class person{
// // // // // // // // // // // // // // //     constructor(firstname,lastname,age){
// // // // // // // // // // // // // // //         this.firstname=firstname;
// // // // // // // // // // // // // // //         this.lastname=lastname;
// // // // // // // // // // // // // // //         this.age=age;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     set firstname(newfirstname){
// // // // // // // // // // // // // // //         if(typeof newfirstname==="string" && newfirstname.length>0){
// // // // // // // // // // // // // // //             this._firstname=newfirstname;
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //         else{
// // // // // // // // // // // // // // //             console.error("Invalid firstname");
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     set lastname(newlastname){
// // // // // // // // // // // // // // //         if(typeof newlastname==="string" && newlastname.length>0){
// // // // // // // // // // // // // // //             this._lastname=newlastname;
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //         else{
// // // // // // // // // // // // // // //             console.error("Invalid lastname");
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     set age(newage){
// // // // // // // // // // // // // // //         if(typeof newage==="number" && newage>0){
// // // // // // // // // // // // // // //             this._age=newage;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     else{
// // // // // // // // // // // // // // //         console.error("Invalid age");
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     get firstname(){
// // // // // // // // // // // // // // //         return this._firstname;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     get lastname(){
// // // // // // // // // // // // // // //         return this._lastname;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     get age(){
// // // // // // // // // // // // // // //         return this._age;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     get fullname(){
// // // // // // // // // // // // // // //         return this.firstname + " " + this.lastname;
// // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // const Person = new person("John","Doe","pizza");
// // // // // // // // // // // // // // // Person.age = 30;
// // // // // // // // // // // // // // // console.log(Person.firstname);
// // // // // // // // // // // // // // // console.log(Person.lastname);
// // // // // // // // // // // // // // // console.log(Person.age);
// // // // // // // // // // // // // // // console.log(Person.fullname);

// // // // // // // // // // // // // // //DESTRUCTURING
// // // // // // // // // // // // // // //-------------EXAMPLE1---------------
// // // // // // // // // // // // // // //SWAP THE VALUE OF TWO VARIABLES
// // // // // // // // // // // // // // let a =10;
// // // // // // // // // // // // // // let b=20;
// // // // // // // // // // // // // // [a,b]=[b,a];
// // // // // // // // // // // // // // console.log(a);
// // // // // // // // // // // // // // console.log(b);

// // // // // // // // // // // // // //-------------EXAMPLE2---------------
// // // // // // // // // // // // // //SWAP THE ELEMENTS IN AN ARRAY
// // // // // // // // // // // // // const colors = ["red","blue","green"];
// // // // // // // // // // // // // [colors[0],colors[2]] = [colors[2],colors[0]];
// // // // // // // // // // // // // console.log(colors);
// // // // // // // // // // // // //-------------EXAMPLE3---------------
// // // // // // // // // // // // //ASSIGN ARRAY ELEMENTS TO VARIABLES
// // // // // // // // // // // // const colors = ["red","blue","green","yellow"];
// // // // // // // // // // // // const [firstColor,secondColor,...restColors] = colors;
// // // // // // // // // // // // console.log(firstColor);
// // // // // // // // // // // // console.log(secondColor);
// // // // // // // // // // // // console.log(restColors);
// // // // // // // // // // // //-------------EXAMPLE4---------------
// // // // // // // // // // // //EXTRACT VALUES FROM OBJECTS
// // // // // // // // // // // const person1 = {
// // // // // // // // // // //     firstname: "John",
// // // // // // // // // // //     lastname: "Doe",
// // // // // // // // // // //     age: 30,
// // // // // // // // // // //     job: "developer"
// // // // // // // // // // // }
// // // // // // // // // // // const person2 = {
// // // // // // // // // // //     firstname: "John",
// // // // // // // // // // //     lastname: "Doe",
// // // // // // // // // // //     age: 30,
// // // // // // // // // // // }
// // // // // // // // // // // const {firstname,lastname,age,job="unemployed"} = person1;

// // // // // // // // // // // console.log(firstname);
// // // // // // // // // // // console.log(lastname);
// // // // // // // // // // // console.log(age);
// // // // // // // // // // // console.log(job);
// // // // // // // // // // //-------------EXAMPLE5---------------
// // // // // // // // // // //DESTRUCTURE IN FUNCTION PARAMETERS
// // // // // // // // // // function displayperson({firstname,lastname,age,job="Unemployed"}){
// // // // // // // // // //     console.log(`name: ${firstname} ${lastname}`);
// // // // // // // // // //     console.log(`age: ${age}`);
// // // // // // // // // //     console.log(`job: ${job}`);

// // // // // // // // // // }
// // // // // // // // // // const person1 = {
// // // // // // // // // //     firstname: "John",
// // // // // // // // // //     lastname: "Doe",
// // // // // // // // // //     age: 30,
// // // // // // // // // //     job: "developer"
// // // // // // // // // // }
// // // // // // // // // // const person2 = {
// // // // // // // // // //     firstname: "John",
// // // // // // // // // //     lastname: "Doe",
// // // // // // // // // //     age: 30,
// // // // // // // // // // }
// // // // // // // // // // displayperson(person1);
// // // // // // // // // // displayperson(person2);

// // // // // // // // // //NESTED OBJECTS - OBJECTS WITHIN OBJECTS
// // // // // // // // // // ALLOWS YOU TO REPRESENT MORE COMPLEX DATA STRUCTURES 
// // // // // // // // // // cHILD OBJECT IS ENCLOSED BY A PARENT OBJECT

// // // // // // // // // const person = {
// // // // // // // // //     fullname: "John Doe",
// // // // // // // // //     age: 30,
// // // // // // // // //     isStudent:true,
// // // // // // // // //     hobbies:["reading","swimming","coding"],
// // // // // // // // //     address:{
// // // // // // // // //         street:"123 Main St",
// // // // // // // // //         city:"New York",
// // // // // // // // //         state:"NY"
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // // console.log(person.fullname);
// // // // // // // // // // console.log(person.age);
// // // // // // // // // // console.log(person.hobbies[1]);
// // // // // // // // // // console.log(person.address);
// // // // // // // // // // console.log(person.address.city);

// // // // // // // // // // console.log(person.address.street);

// // // // // // // // // for(const property in person.address){
// // // // // // // // //     console.log(person.address[property]);
// // // // // // // // // }
// // // // // // // // class Person{
// // // // // // // //     constructor(name,age,...address){
// // // // // // // //         this.name = name;
// // // // // // // //         this.age = age;
// // // // // // // //         this.address = new Address(...address);
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // class Address{
// // // // // // // //     constructor(street,city,state){
// // // // // // // //         this.street = street;
// // // // // // // //         this.city = city;
// // // // // // // //         this.state = state;
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // const person1 = new Person("John Doe",30,"123 Main St","New York","NY");
// // // // // // // // const person2 = new Person("Patric",35,"153 Main St","New York","NY");
// // // // // // // // const person3 = new Person("Worm",45,"128 Main St","New York","NY");
// // // // // // // // //PERSON 1
// // // // // // // // console.log(person1.name);
// // // // // // // // console.log(person1.address);
// // // // // // // // console.log(person1.age);
// // // // // // // // console.log(person1.address.city);
// // // // // // // // console.log(person1.address.street);
// // // // // // // // //PERSON2
// // // // // // // // console.log(person2.name);
// // // // // // // // console.log(person2.address);
// // // // // // // // console.log(person2.age);
// // // // // // // // console.log(person2.address.city);
// // // // // // // // console.log(person2.address.street);
// // // // // // // //ARRAY OF OBJECTS
// // // // // // // const fruits = [{name:"apple",color:"red",calories:95},
// // // // // // //                {name:"orange",color:"orange",calories:62},
// // // // // // //                {name:"banana",color:"yellow",calories:58}];
// // // // // // // fruits[0].name;
// // // // // // // fruits.push({name:"grape",color:"purple",calories:45});
// // // // // // // // fruits.forEach((fruit) => {
// // // // // // // //     console.log(fruit.name);
// // // // // // // // })
// // // // // // // //------------MAP--------
// // // // // // // // const fruitname = fruits.map(fruit => fruit.name);
// // // // // // // // const fruitcolor = fruits.map(fruit => fruit.color);
// // // // // // // // const fruitcalories = fruits.map(fruit => fruit.calories);
// // // // // // // //---------filter------
// // // // // // // // const yellow = fruits.filter(fruit => fruit.color === "yellow");
// // // // // // // // console.log(yellow);
// // // // // // // //--------REDUCE-------
// // // // // // // const maxfruit = fruits.reduce((max,fruits) => 
// // // // // // //     fruits.calories > max.calories ? max = fruits : max = max);
// // // // // // // console.log(maxfruit);
// // // // // // // const minfruit = fruits.reduce((min,fruits) => 
// // // // // // //     fruits.calories < min.calories ? min = fruits : min = min);
// // // // // // // console.log(minfruit);

// // // // // // // // console.log(fruitname);
// // // // // // // // console.log(fruitcolor);
// // // // // // // // console.log(fruitcalories);

// // // // // // // // console.log(fruits[0].name);
// // // // // // // // console.log(fruits[1].name);
// // // // // // // // console.log(fruits[2].name);
// // // // // // // // console.log(fruits[3].name);

// // // // // // // // console.log(fruits[0].color);
// // // // // // // // console.log(fruits[1].color);
// // // // // // // // console.log(fruits[2].color);
// // // // // // // // console.log(fruits[3].color);

// // // // // // // // console.log(fruits[0].calories);
// // // // // // // // console.log(fruits[1].calories);
// // // // // // // // console.log(fruits[2].calories);
// // // // // // // // console.log(fruits[3].calories);

// // // // // // //DESTRUCTURING -> Extract values from arrays and objects,then assign them to
// // // // // // // variables in a convenient way-> []=to perform array destructuring
// // // // // // // {}=to perform object destructuring
// // // // // // // <--------------Example1------------>
// // // // // // // Swap the value of two variables
// // // // // // let a=1;
// // // // // // let b=2;
// // // // // // [a,b]=[b,a];
// // // // // // console.log(a);
// // // // // // console.log(b);

// // // // // //<--------------Example2------------>
// // // // // // Swap 2 elements in an Array

// // // // // const colors = ['red', 'green', 'blue','white','black'];
// // // // // [colors[0],colors[4]]=[colors[4],colors[0]];
// // // // // console.log(colors);
// // // // // //<--------------Example3------------>
// // // // //ASSIGN ARRAY ELEMENTS TO VARIABLES
// // // // const colors = ['red', 'green', 'blue','white','black'];
// // // // const [firstColor,secondColor,thirdColor,fourthColor,fifthColor]=colors;;
// // // // console.log(firstColor);
// // // // console.log(secondColor);
// // // // console.log(thirdColor);
// // // // console.log(fourthColor);
// // // // console.log(fifthColor);
// // // // //<--------------Example4------------>
// // // //Extract values from objects
// // // // const person1 = {
// // // //     firstperson: 'John',
// // // //     lastname: 'Doe',
// // // //     age: 30,
// // // //     job: 'developer',
// // // // }
// // // // const person2= {
// // // //     firstperson: 'Jane',
// // // //     lastname: 'Doe',
// // // //     age: 25,
    
// // // // }
// // // // const{firstperson,lastname,age,job="Unemployed"} = person2////person2;
// // // // console.log(firstperson);
// // // // console.log(lastname);
// // // // console.log(age);
// // // // console.log(job)

// // // //<--------------Example5------------>
// // // //DESTRUCTURE IN FUNCTION PARAMETERS
// // // function displayPerson({firstperson,lastname,age,job="Unemployed"}){
// // //     console.log(firstperson);
// // //     console.log(lastname);
// // //     console.log(age);
// // //     console.log(job);
// // // }

// // // const person1 = {
// // //     firstperson: 'John',
// // //     lastname: 'Doe',
// // //     age: 30,
// // //     job: 'developer',
// // // }
// // // const person2= {
// // //     firstperson: 'Jane',
// // //     lastname: 'Doe',
// // //     age: 25,
    
// // // }

// // // displayPerson(person1);
// // // displayPerson(person2);
// // //NESTED OBJECTS - OBJECTS INSIDE OF OTHER OBJECTS
// // // Allows you to represent a comolex data structure\
// // const person = {
// //     fullname: "SpongeBob Squarepants",
// //     age: 30,
// //     isStudent:true,
// //     address: {
// //         street: "123 Conch Street",
// //         city: "Bikini Bottom",
// //         state: "Pacific Ocean",
// //         country: "United States"
// //     }
// // }

// // // console.log(person.fullname);
// // // console.log(person.age);
// // // console.log(person.isStudent);
// // // console.log(person.address);
// // // console.log(person.address.city);
// // for(const prop in person.address){
// //     console.log(person.address[prop]);
// // }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address= new Address(...address);
//     }
// }
// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// const person1 = new Person("SpongeBob Squarepants", 30, "123 Conch Street", "Bikini Bottom", "United States");
// const person2 = new Person("Patrick Star", 30, "123 Conch Street", "Bikini Bottom", "United States");

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.city);
// console.log(person1.address.country);
// console.log(person1.address.street);
// console.log("\n");
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.address.city);
// console.log(person2.address.country);
// console.log(person2.address.street);

// // console.log(person2);