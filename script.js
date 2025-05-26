// wap to print sum of even and odd numbers in a range

var start_num = Number(prompt("Enter the starting number : "))
var end_num = Number(prompt("Enter the ending number : "))

var even_sum = 0
var odd_sum = 0

for (var i = start_num; i<=end_num; i++){
    if (i%2==0){
        even_sum = even_sum + i
    }
    else{
        odd_sum = odd_sum + i
    }
}

// factorial of any number

var fact = Number(prompt("Enter the factorial number : "))

var factorial = 1

for (var i=fact; i>=1; i--){
    factorial = factorial*i
}


// perfect number

var perfect_num = Number(prompt("Enter the number to check whether perfect or not : "))
var divisor_sum = 0
for (var divisor = 1; divisor < perfect_num; divisor++){
    if (perfect_num%divisor==0){
        divisor_sum = divisor_sum + divisor
    }
}

if (perfect_num == divisor_sum){
    console.log("perfect sum");
}
else {
    console.log("Not a perfect sum");
}

// prime or not

var prime_num = Number(Prompt("Enter the number to check prime or not : "))
var prime_flag = false

for (var i=2; i<prime_num**0.5; i++){
    if (prime_num%i==0){
        prime_flag = true
    }
}

if (prime_flag == false){
    console.log("prime number");
}
else{
    console.log("not a prime number");
}

//fibonacci series

var fibonacci_num = Number(prompt("Enter the fibonacci number : "))

var fib_first = 0
var fib_second = 1
var fib_sum = fib_first + fib_second

document.write(`${fib_first} ${fib_second}`)

while (fib_sum<= fibonacci_num){
    document.write(`${fib_sum}`)
    fib_first = fib_second
    fib_second = fib_sum
    fib_sum = fib_first + fib_second
}

// sum of number of digits

var sum_num  = Number(prompt("Enter the number : "))