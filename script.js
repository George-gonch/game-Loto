base=document.querySelector('.base') // первый билет
ticket=document.querySelector('.ticket');// второй билет
ticketOne =document.querySelector('.ticketOne')// третий билет
function ticketDraw(a,b){
  for(i=b;i<b+3;i++){
    for(j=0;j<9;j++){
      let div = document.createElement('div');
      div.className = "cell";
      div.dataset.y=i;
      div.dataset.x=j;
      a.append(div);
    }
    }
}



ticketDraw(base,0)
ticketDraw(ticket,3)
ticketDraw(ticketOne,6)
let ber =[1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90];

function poy(num){ // функция poy перемешивает массив в случайном порядке
   
    hoy=[];
    for(i=0;i<90;i++){
      let randomIndex = Math.floor(Math.random() * (num.length - 1));
      hoy.push(num[randomIndex] )
      num.splice(randomIndex, 1);
    }
    return hoy
}

function lineNumer(){ // функция создает массив из 5 случайных символов в промежутке от 0 до 9
    const lineNumer=[]
    const number =[0,1,2,3,4,5,6,7,8,9]
for(i=0;i<5;i++){
    let randomIndex = Math.floor(Math.random() * (number.length - 1));
    lineNumer.push(number[randomIndex])
    number.splice(randomIndex, 1);
}
return lineNumer
}

let number =[1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90];
numberN=poy(number)

function distributionOne(a){ //функция создает билет
  lineNumerA=lineNumer()
  lineNumerB=lineNumer()
  lineNumerC=lineNumer()



  for(i=0;i<5;i++){
  document.querySelector(`.cell[data-x="${lineNumerA[i]}"][data-y="${a}"]`).classList.add("ad");
  document.querySelector(`.cell[data-x="${lineNumerA[i]}"][data-y="${a}"]`).innerHTML =numberN[i];
  numberN.splice(i, 1);
  }
  for(i=0;i<5;i++){
    document.querySelector(`.cell[data-x="${lineNumerB[i]}"][data-y="${a+1}"]`).classList.add("ad");
    document.querySelector(`.cell[data-x="${lineNumerB[i]}"][data-y="${a+1}"]`).innerHTML =numberN[i];
    numberN.splice(i, 1);
    }
    for(i=0;i<5;i++){
      document.querySelector(`.cell[data-x="${lineNumerC[i]}"][data-y="${a+2}"]`).classList.add("ad");
      document.querySelector(`.cell[data-x="${lineNumerC[i]}"][data-y="${a+2}"]`).innerHTML =numberN[i];
      numberN.splice(i, 1);
      }
  console.log(numberN.length)
}
distributionOne(0)
distributionOne(3)
distributionOne(6)









    barelBase=document.querySelector('.barelBase')
  //  document.querySelector(".generation").onclick= go   document.querySelector(".generation").style.display='none'
   function drawBarel(){
    for(i=0;i<90;i++){
            let div = document.createElement('div');
            div.className = "barel";
            div.dataset.x=i+1;
           div.innerHTML=i+1
            barelBase.append(div);
        }       
}
drawBarel()
let numberTW=[1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90];
let ii =0;
let so = poy(numberTW);
y=0
function randomBarel(){

    document.querySelector(`.barel[data-x="${so[ii]}"]`).classList.add("po");
    document.querySelectorAll('.cell').forEach(function(element){
      if(element.innerText==so[ii]){
        element.classList.add('win')
      }
      })

    ii++
    if(base.getElementsByClassName('win').length==15){
      document.querySelector('.up').style.display = 'none';
      document.querySelector('.groundTicket').style.opacity = "0.1"
      document.querySelector('.end').style.display = 'block';
    }
    if(ticket.getElementsByClassName('win').length==15){
      document.querySelector('.up').style.display = 'none';
      document.querySelector('.groundTicket').style.opacity = "0.1"
      document.querySelector('.end').style.display = 'block';
    }
    if(ticketOne.getElementsByClassName('win').length==15){
      document.querySelector('.up').style.display = 'none';
      document.querySelector('.groundTicket').style.opacity = "0.1"
      document.querySelector('.end').style.display = 'block';
    }
    // console.log(base.getElementsByClassName('win').length)
  
}
document.querySelector('.butEnd').onclick=function(){
  location.reload();
}
document.querySelector('.up').onclick=randomBarel


// let rrr=base.childNodes.classList.contains('win')

