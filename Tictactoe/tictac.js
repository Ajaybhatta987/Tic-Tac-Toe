var headone=document.querySelector("h2")

headone.addEventListener('mouseover',function(){
headone.textContent="SingleClick/Tap:X  DoubleClick/Tap:O"
})
headone.addEventListener('mouseout',function(){
  headone.textContent="Welcome to the game"
})




var restart=document.querySelector("#b")

var squares=document.querySelectorAll("td")
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener('click', clearBoard)

function changeMarker(){
  if(this.textContent ===''){
    this.textContent='X'
  }else if(this.textContent==='X'){
    this.textContent='O'
  }else{
    this.textContent=''
  }
}
for(var i=0; i<squares.length; i++){
  squares[i].addEventListener('click', changeMarker)
}
