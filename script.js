// wap to print sum of even and odd numbers in a range

var start_num = prompt(Number("Enter the starting number : "))
var end_num = prompt(Number("Enter the ending number : "))

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

var fact = prompt(Number("Enter the factorial number : "))

var factorial = 1

for (var i=fact; i>=1; i--){
    factorial = factorial*i
}


// perfect number

var perfect_num = prompt(Number("Enter the number to check whether perfect or not : "))
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

//