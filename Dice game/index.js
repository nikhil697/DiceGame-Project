var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage= randomNumber1 + ".jpg";

var randomImageSource = randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2= randomNumber2 + ".jpg";
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[3].innerHTML="Player1 has won the game";
}

else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[3].innerHTML="Player2 has won the game";
}

else{
    document.getElementsByTagName("h1")[3].innerHTML="This game is a draw..";
}