var name = "CTTI";

if(name == "CTTI"){
    console.log("Ami akon class a asi");
}

else{
    console.log("Ami basai asi");
}

var num1 = 5;
var num2 = 6;

num2 = 10;

if(num1 < num2){
    console.log("Num1 chuto")
}
else{
    console.log("NUm2 boro")
}


var friendsList = ["Hossain", "Rishad", "ETC"];

friendsList.push("Shanto");
friendsList.pop();

friendsList[2] = "Tanim";

var totalFriends = friendsList.length;
var findWithIndex = friendsList.indexOf("Rishad");


// loop 
var number = 0;

while(number <= 10){
    console.log(number);
    number = number + 1;
}

for(var num = 0; num <= 10; num = num + 1){
    console.log(num)
}

