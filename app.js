class Product {
    country = 'Bangladesh' ;
    speak(talk){
        console.log(`talking about ${talk}`) ;
    }
    constructor(name){
        this.name = name ;
    }
}

let lenovo = new Product('lu lu novo')
// console.log(lenovo)

// console.log(lenovo.speak('kya bolti tu'))


class Teacher {
    constructor(name,subj,age){
        this.name = name ;
        this.subj = subj ;
        this.age = age ;
    }
}
let tapan = new Teacher('tapan','physics',50) ;
// console.log(tapan)



// hw 
// 1
let oddArray = [ 1, 3, 5, 7, 9 ] ;
let evenArray = [  ] ;
for( let ele of oddArray ){
let evenEle = ele + 1 ;
evenArray.push(evenEle) ;
}
// console.log(evenArray)

let evenArrayWithMap = oddArray.map( ele => ele + 1 )
// console.log(evenArrayWithMap)


// 2
let arr = [ 33, 50, 79, 78, 90, 101, 30 ] ;
let filtered = arr.filter(x => !(x % 10))
// console.log(filtered)

let finded = arr.find(x => !(x % 10))
// console.log(finded)



// no3
const instructor = [
    { name:'nodi', age:28, position:'Senior' },
    { name:'akil', age:26, position:'Junior' },
    { name:'shobuj', age:30, position:'Senior' }
]
const seniors = instructor.filter( inst => (inst.position) === 'Senior' )
// console.log(seniors)



// no5
const people = [
    { name:'Meena', age:20 },
    { name:'Reena', age:15 },
    { name:'Suchorita', age:22 },
]

let age = people.map( pp => pp.age )
// console.log(age)

let sum = age.reduce( (perv,curr) => perv + curr , 0 )
// console.log(sum)

let ageSum = 0 ;
for( let per of people ){
    ageSum = ageSum + per.age ;
}
// console.log(ageSum)











