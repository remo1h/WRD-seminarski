 
function myMap() {
  var myCenter = new google.maps.LatLng(43.357173, 17.814964);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  if(screen.width <= 800)
  var mapOptions = {center: myCenter, zoom: 13};
    
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

function menu(){
  var x =document.getElementById("menu-drop");
  if(x.style.height == "0px"||x.style.height ==0){
  x.style.height = "184.4px"; 
  document.getElementById("nav").style.width = "207.36px"
  document.getElementById("pozicija").style.marginLeft = "90px";
  if(screen.width<=800){
  x.style.height = "184.4px"; 
  document.getElementById("menu-drop").style.width ="150.4";
    document.getElementById("nav").style.width = "150px"
  document.getElementById("pozicija").style.marginLeft = "45px";
  }
  }
  else{ 
    x.style.height = "0px";
     document.getElementById("nav").style.width = "100%"
  document.getElementById("pozicija").style.marginLeft = "15px";

}
}


function global(index){
$("html,body").animate({
  scrollTop:$(index).offset().top
},"slow")
  

    }


function unloadpage(index){
  $("html,body").animate({
    scrollTop:$(index).offset().top
  }, 5)
}

function navColor(){
  if(document.body.scrollTop <=567) {
    document.getElementById("nav").style.backgroundColor ="#d56d4a79";
    document.getElementById("menu-drop").style.backgroundColor ="#d56d4a79";
  }  
  else if(document.body.scrollTop > 560)  
{     document.getElementById("nav").style.backgroundColor ="#d56d4a";
     document.getElementById("menu-drop").style.backgroundColor ="#d56d4a";
}

}