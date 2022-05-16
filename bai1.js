
var index=1 ;

function next(){
    index++;
if(index >= images.length){
	index = 1;
}
clicks++;
if(clicks >= 21){
	clicks = 1;
}
document.getElementById("clicks").innerHTML = clicks;
var anh = document.getElementById("Anh");
anh.src = images[index].src;

}
function prev(){
    index--;
    if(index < 1){
        index = 20;
    }
    clicks--;
    if(clicks < 1){
        clicks = 20;
    }
          
     document.getElementById("clicks").innerHTML = clicks;
    var anh = document.getElementById("Anh");
    anh.src = images[index].src;
}
var images = [];
for (var i = 0; i < 20; i++) {
    images[i] = new Image();
    images[i].src = "images/" + i + ".JPG";
}
var i=0;
var anh=[];
var thoigian=1000;
var chay;
function loadanh(){
    
}



