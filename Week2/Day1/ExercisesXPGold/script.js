//Ex1

let sentence = []
sentence.push("my", "favorite", "color", "is", "blue")

console.log(sentence.join(" "))

//Ex2

let str1 = "bamba"
let str2 = "cola"

arr1 = str1.split("")
arr2 = str2.split("")
arr1[0] = str2[0]
arr2[0] = str1[0]

str1 = arr1.join()
str2 = arr2.join()

str3 = str1 + " " + str2

console.log(str3)
