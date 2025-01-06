function findLength(x){
    console.log(x.length)
  }
findLength("shiva")
findLength([1,2,54,85,63,21,45,63,31,78,5])

function evenorodd(x){
if(x%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}
}
evenorodd(21356)
evenorodd(57)
evenorodd(351)
evenorodd(2134)

function cable(x,tv="live stream"){
console.log(`${x} tv watch  movies with ${tv}`)
}
cable("maa")
cable("gemini")
cable("zee")
cable("etv")
cable("discovery")

function isPalindrome(str){
      let str1=""
    for(i=str.length-1;i>=0;i--)
        str1+=str[i]
    console.log(str1)
    if(str1==str){
        console.log("is a plaindrome")
    }
    else{
        console.log("not a palindrome")
    }

}
isPalindrome("liril")
isPalindrome("virat")
isPalindrome("level")
isPalindrome("kohli")
isPalindrome("saaaaas")

function cbf(x,y,z){
    x();
    y();
    z();

}
cbf(function cbf2(){
    console.log("i am shiva")},
    function cbf3(){
        console.log("fan of pawan kalyan")},
        function cbf4(){
            console.log("i love hyf biryani")
        }
    )

//scope
let a = 123;
const b = 456;
var c = 789;
if (true) {
  console.log(a);
  console.log(b);
  console.log(c);
}
for (i = 0; i <= 5; i++) {
  console.log(b);
  console.log(c);
  console.log(a);
}
function demo() {
  console.log(b);
}
demo();
