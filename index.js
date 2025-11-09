var num=Math.floor(Math.random()*6+1);
var add="images/"+"dice"+num+".png";
document.querySelectorAll("img");
var a=document.querySelectorAll("img")[0];
a.setAttribute("src",add)


var num1=Math.floor(Math.random()*6+1);
var add="images/"+"dice"+num1+".png";
document.querySelectorAll("img");
var b=document.querySelectorAll("img")[1];
b.setAttribute("src",add)

if(num>num1)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WIN";

}
else if(num==num1)
{
      document.querySelector("h1").innerHTML="tie";
}
else
{
    document.querySelector("h1").innerHTML="PLAYER 2 WIN";
}




