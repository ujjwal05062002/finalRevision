// // // wap to print sum of even and odd numbers in a range

// // var start_num = Number(prompt("Enter the starting number : "))
// // var end_num = Number(prompt("Enter the ending number : "))

// // var even_sum = 0
// // var odd_sum = 0

// // for (var i = start_num; i<=end_num; i++){
// //     if (i%2==0){
// //         even_sum = even_sum + i
// //     }
// //     else{
// //         odd_sum = odd_sum + i
// //     }
// // }

// // // factorial of any number

// // var fact = Number(prompt("Enter the factorial number : "))

// // var factorial = 1

// // for (var i=fact; i>=1; i--){
// //     factorial = factorial*i
// // }


// // // perfect number

// // var perfect_num = Number(prompt("Enter the number to check whether perfect or not : "))
// // var divisor_sum = 0
// // for (var divisor = 1; divisor < perfect_num; divisor++){
// //     if (perfect_num%divisor==0){
// //         divisor_sum = divisor_sum + divisor
// //     }
// // }

// // if (perfect_num == divisor_sum){
// //     console.log("perfect sum");
// // }
// // else {
// //     console.log("Not a perfect sum");
// // }

// // // prime or not

// // var prime_num = Number(Prompt("Enter the number to check prime or not : "))
// // var prime_flag = false

// // for (var i=2; i<prime_num**0.5; i++){
// //     if (prime_num%i==0){
// //         prime_flag = true
// //     }
// // }

// // if (prime_flag == false){
// //     console.log("prime number");
// // }
// // else{
// //     console.log("not a prime number");
// // }

// // //fibonacci series

// // var fibonacci_num = Number(prompt("Enter the fibonacci number : "))

// // var fib_first = 0
// // var fib_second = 1
// // var fib_sum = fib_first + fib_second

// // document.write(`${fib_first} ${fib_second}`)

// // while (fib_sum<= fibonacci_num){
// //     document.write(`${fib_sum}`)
// //     fib_first = fib_second
// //     fib_second = fib_sum
// //     fib_sum = fib_first + fib_second
// // }

// // // sum of number of digits

// // var sum_num  = Number(prompt("Enter the number : "))

// // var sum = 0 
// // while (sum_num != 0){
// //     let r = sum_num%10
// //     sum = sum + r
// //     sum_num = parseInt(sum_num/10)
// // }

// // // reverse a digit

// // var num_r = Number(prompt("Enter the number : "))
// // let reversed_num = 0

// // while (num_r!=0){
// //     let r = num_r%10
// //     reversed_num =  reversed_num*10 + r
// //     num_r = parseInt(num_r/10)
// // }

// // // calculate sum of even and odd digit

// // var even_odd_sum =  Number(prompt("Enter the number : "))
// // var even_sum = 0
// // var odd_sum = 0


// // while (even_odd_sum !=0 ){
// //     let r = num%10
// //     if (r%2){
// //         even_sum = even_sum + r
// //     }    
// //     else{
// //         odd_sum = odd_sum + r
// //     }
// //     even_odd_sum = parseInt(even_odd_sum/10)
// // }

// // // count even and odd digits

// // var num = Number(prompt("Enter the number : "))

// // var even_count = 0
// // var odd_count = 0

// // while (num!=0){
// //     let r = num % 10
// //     if (r%2==0){
// //         even_count = even_count + 1
// //     } 
// //     else{
// //         odd_count = odd_count+1
// //     }
// //     num = parseInt(n/10)
// // }

// // // neon number or not

// // var num = Number(prompt("enter the number"))

// // var sum_of_digits = 0

// // while (num!=0){
// //     let r = num%10
// //     sum_of_digits =+ r
// //     num = parseInt(num)
// // }
// // if (sum_of_digits===num)
// // console.log("Neon Number")
// // else
// // console.log(" Not Neon Number")

// // // Armstrong Number

// // var num = Number(prompt("Enter the number : "))
// // var original_num  = num
// // var sum = 0 
// // var count = 0

// // while (num!=0){
// //     num  = parseInt(num/10)
// //     count = count + 1
// // }

// // num = original_num

// // while (num!=0){
// //     let r = num%10
// //     sum = sum + r**count
// //     num = parseInt(num/10)
// // }

// // if (sum === original_num){
// //     console.log("Armstrong Number");
// // }
// // else{
// //     console.log("Not Armstrong Number");
// // }

// // //Palindrome Number

// // var num = Number(prompt("Enter the number : "))
// // var original_num = num
// // var rev = 0
// // while (num!=0){
// //     let r = num%10
// //     rev = 10*rev + r
// //     num = parseInt(num/10)
// // }

// // if  (original_num===rev)
// //     console.log("Palindrome Number");
// // else
// //     console.log("Not Palindrome Number");
    
// // // Print all Perfect Number

// // var start_num = Number(prompt("enter the starting range"))
// // var end_num = Number(prompt("enter the ending range"))

// // console.log(`Perfect Number between ${start_num} and ${end_num} are : `);


// // for (var num=start_num; num<=end_num; num++){
// //     var sum = 0
// //     for (var n = 1; n<num; n++){
// //         if (num%n==0){
// //             sum = sum+n
// //         }
// //     }
// //     if(sum==num){
// //         console.log(`${num}`);
// //     }
// // }

// // // print all palindrome number in a given range

// // var start_num = Number(prompt("Enter the starting number : "))
// // var end_num = Number(prompt("Enter the ending number : "))
// // console.log(`Palindrome number in a given range are :`);

// // for (var num =start_num; num<=end_num; num++){
// //     var reverse = 0
// //     var original_num = num
// //     var temp = num
// //     while(temp!=0){
// //         let r = temp%10
// //         reverse = 10*reverse + r
// //         temp = parseInt(temp/10)
// //     }
// //     if (original_num == reverse)
// //         console.log(`${reverse}`);       
// // }

// // // factorial using function

// // function fact(num){
// //     if (num<=1){
// //         return 1
// //     }
// //     else{
// //         return num*fact(num-1)
// //     }
// // }


// // // string using loop 

// // var a = `this is an example string`

// // for (let i=0; i<a.length; i++){
// //     console.log(i);
// // }

// // // String Methods

// // // 1. CharAt()  :  returns chartacter  at given index of string

// // console.log(a.charAt(1));

// // // 2. CharCodeAt()

// // console.log(a.charCodeAt(3));

// // // 3. fromCharCode()

// // console.log(String.fromCharCode(66));


// // // indexOf() lastIndexOf() Search() Includes()

// var a  = "JavaScript Is A Scripting Language"

// // console.log(a.indexOf("I"));
// // console.log(a.lastIndexOf("a"));
// // console.log(a.search("I"));
// // console.log(a.includes("I"));
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());


// console.log(a.split());


// Array : array is a datatype that is used to store data in a contigous manner.

// Method to create an array : 
// 1. Method 1 : 


// var a  = [10,20,30,40]
// console.log(a);

// // 2. MEthod 2

// var a = []

// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// console.log(a);

// 3. Method 3 : Keyword Method  

// var a = Array (10,20,30,40)


// console.log(a.toLocaleString());
// console.log(a.join("-"));

// a.push(50)
// a.pop(50)
// a.unshift(60)
// a.shift()
// a.splice(2,0,[70,80,90])
// a.slice(1,4)

// console.log(a);


// Array Concation 

var a = [1,2,3,4,5]
var b = [10,20,30,40,50]
var c = [100,200,300,400,500]
var d = ["Chanchal", "Lucky", "Ujjwal" ]
var e = a.concat(b,c,d)
console.log(e);



for (let i of e.entries()){
    console.log(i);   
}