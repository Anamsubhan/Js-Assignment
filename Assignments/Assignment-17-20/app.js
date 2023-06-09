//1. Declare and initialize an empty multidimensional array.
var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
for (var i = 0; i <= arr.length - 1; i++) {
    document.write("</br>" + arr[i])
}
document.write("</br>")


//3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    document.write("</br>" + i)
}


//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write("</br>")
var num = prompt("Enter number")
var length = prompt("enter length")
for (var i = 1; i <= length; i++) {
    document.write("</br>" + num + "*" + i + "=" + num * i)
}
document.write("</br>")



// 5. Write a program to print items of the following array using for loop:
document.write("</br>")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i <= fruits.length - 1; i++) {
    document.write(fruits[i] + "</br>")
}

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + "</br>")
}

// 6. Generate the following series in your browser.
document.write("</br>Counting:");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}

document.write("</br>Reverse Counting:");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}

document.write("</br>Even:");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ",");
    }
}
document.write("</br>Odd:");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ",");
    }
}

document.write("</br>Even:");
for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k,");
    }
}

//Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B = prompt("Welcome to ABC bakery What do you want to order sir/ma'am");

for (x = 0; x <= 4; x++) {
    if (A[x] == B) {
        document.write(A[x], " ", "is available at index", " ", x, " ", "in our bakery");
    }

}
if (A[0] == B || A[1] == B || A[2] == B || A[3] == B || A[4] == B) {} else if (A[0] != B || A[1] != B || A[2] != B || A[3] != B || A[4] != B) {
    document.write("We are Sorry", " " + B + " ", "is not available in our bakery");
}