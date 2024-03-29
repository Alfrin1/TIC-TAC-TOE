const boxs=document.querySelectorAll(".box");
const statustxt=document.querySelector(".status");
const btn=document.querySelector(".restart");
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options=["","","","","","","","",""];
let current='X';
let player='X';
let start=false;
init();

function init()
{
  boxs.forEach(box=>box.addEventListener('click',boxClick));
  btn.addEventListener('click',restart);
  statustxt.textContent=`${player} YOUR TURN`;
  start=true;
}
function boxClick()
{
   
   const index=this.dataset.index;
   if(options[index]!="" || !start)
   {
    return;
   }
   update(this,index);
   checkWinnner();
}
function update(box,index)
{
   options[index]=player;
   box.innerHTML=current;

}

function checkWinnner()
{
  let isWon=false;
  for(let i=0;i<win.length;i++)
  {
    const condition=win[i];
    let box1=options[condition[0]];
    let box2=options[condition[1]];
    let box3=options[condition[2]];
    if(box1==""||box2==""||box3=="")
    {
        continue;
    }
    if(box1==box2 && box2==box3)
    {
       isWon=true;
       boxs[condition[0]].classList.add('win');
       boxs[condition[1]].classList.add('win');
       boxs[condition[2]].classList.add('win');

    }

}

if(isWon)
{
    statustxt.textContent=`${player} WON!`;
    start=false;
 
}
else if(!options.includes("")){
    statustxt.textContent=`GAME DRAW...`;
    start=false;
 
}
else 
{
    changePlayer();
}
}

function changePlayer()
{
   player=(player=='X')? "O" : "X";
   current=(current=='X')? "O" : "X";
   statustxt.textContent=`${player} YOUR TURN`;
 
}
function restart()
{
    options=["","","","","","","","",""];
    current='X';
    player='X';
    start=true;
    statustxt.textContent=`${player} YOUR TURN`;
    boxs.forEach(box=>
        {box.innerHTML="";
          box.classList.remove('win');
    });
}
