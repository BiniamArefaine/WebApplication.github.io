
window.onload = function(){
    var banStr = String.prototype;
    
    banStr.filter = function(string){
        return this.toString().split(' ').filter(s=>s!=string).reduce((x,y)=>x + ' ' + y,'');
    }
    //.Exercise 1  console.log(st);
    console.log("This house is not nice!".filter('not'));
    console.log('--------------------------------------------------------------------------------------------------------------')

    // .Exercise 2  bubble sort
    var arr = Array.prototype;
    arr.bubbleSort = function (){
        var self = this;
        for(let x in self){
            for(let y in self){
                if(self[y] > self[x]){
                    const tempt = self[x];
                    self[x] = self[y];
                    self[y]= tempt;
                }
            }
        }
        return self;
    }
    console.log([6,4,0, 3,-2,1].bubbleSort())
    console.log('--------------------------------------------------------------------------------------------------------------')

    // .Exercise 3 Person
    function Person(name){
        this.name = name;
    }
    var teacher = new Person("Biniam Arefaine");
    teacher.teach = function(subject){
        console.log('\n'+ this.name + ' is now teaching ' + subject);
    }
    teacher.teach('Hydrolics');

    // .Exercise using Objects.create
    var person  = function(name){
        var n = name;
        return {
            name : n
        }
    }
    var teacherNo2 = Object.create(person('Esrom Tsehaye'))
    teacherNo2.teach = function(subject){
        console.log(this.name + ' is now teaching ' + subject);
    }

    teacherNo2.teach('Big Data Technology')
    console.log('--------------------------------------------------------------------------------------------------------------')
     //.Exercise using prototype object

    var Person = {
        name:'Semere Teame',
        age:34,
        greeting:function(){
            console.log('\nGreetings, my name is ' + this.name + ' and I am ' + this.age +' years old');
        },
        salute(){
            console.log('\nGood morning!, and in case I don\'t see you, good afternoon, good evening and goodnight!');
        }

    }

    var Student = Object.create(Person);
    Student.major ='WAP';
    Student.greeting = function(){
        console.log('\nHey, my name is ' + this.name + ' and I am studying ' + this.major);
    }

    var Professor = Object.create(Person);
    Professor.department = 'Computer Science';
    Professor.greeting = function(){
        console.log("\nGreeting from Professor");
    }
    Professor.salute = function(){
        console.log('\nGood day, my name is ' +  this.name + ' and I am in the ' + this.department + ' department');
    }
    var student = Object.create(Student);
    student.greeting();
    student.salute();

    var professorNo2 = Object.create(Professor);
    professorNo2.greeting();
    professorNo2.salute();

    console.log('--------------------------------------------------------------------------------------------------------------')
    // question 4 using function construct
    function PersonNo2(){
        this.name = 'Essey Abraham';
        this.age = 28
    }
    PersonNo2.prototype.greeting = function(){
        console.log('\nGreetings, my name is ' + this.name + ' and I am ' + this.age +' years old');
    }
    PersonNo2.prototype.salute = function(){
        console.log('\nGood morning!, and in case I don\'t see you, good afternoon, good evening and goodnight!');
    }
    function StudentNo2(){
        PersonNo2.call(this);
        this.major = 'MWA';
    }
    StudentNo2.prototype = Object.create(PersonNo2.prototype);
    StudentNo2.prototype.greeting = function(){
        console.log('\nHey, my name is ' + this.name + ' and I am studying ' + this.major);
    }
    function ProfessorNo2(){
        PersonNo2.call(this)
        this.department = 'ComPro'
    }
    ProfessorNo2.prototype = Object.create(PersonNo2.prototype);
    ProfessorNo2.prototype.greeting = function(){
        console.log("\nGreetings from Professor");
    }
    ProfessorNo2.prototype.salute = function(){
        console.log('\nGood day, my name is ' +  this.name + ' and I am in the ' + this.department + ' department');
    }

    // Create a professor object and a student object. Call both the greeting and salutation methods on each.
    var student = new StudentNo2();
    student.greeting();
    student.salute();

    var professorNo2 = new ProfessorNo2();
    professorNo2.greeting();
    professorNo2.salute();

}