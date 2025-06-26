let div1 = document.querySelectorAll(".boxes");
let val=0;
let k=0;
//this has error when event listnner call it will 
// perform action div but at that time div will be refrencing to last div so everytime make
//  write new div i is used or u can used for each
// for(div of div1)
// {div.onclick = () => {
//     if(val==0)
//         {div.innerText="O";
//             val=1;
//         }
//     else {
//         div.innerText="X";
//         val=0;
//     }
// };}
let arr=[0,0,0,0,0,0,0,0,0];
for(let i=0;i<div1.length;i++)
    {div1[i].onclick = () => {
        if(val==0 && arr[i]==0)
            {div1[i].innerText="O";
                val=1;
            }
        else if(val==1 && arr[i]==0) {
            div1[i].innerText="X";
            val=0;
        }
        arr[i]=1;
        for(let order of patterns){
            console.log("doing");
            if(div1[order[0]].innerText != "" && div1[order[1]].innerText != "" && div1[order[2]].innerText != "" ){
                if(div1[order[0]].innerText==div1[order[1]].innerText&& div1[order[2]].innerText==div1[order[1]].innerText){
                    
                    let cr = document.querySelector(".winner");
                    cr.innerText=`Congratulations , Winner is ${div1[order[2]].innerText}`
                    cr.style.visibility="visible";
                    document.querySelector("#newgame").style.visibility="visible";
                    document.querySelector("#reset").style.visibility="hidden";
                    
                }
            }
        }
    };}
    patterns=[
        [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
    ]
  let b1 = document.querySelector("#reset");
  b1.onclick=()=>{
    for( i=0;i<div1.length;i++){
        div1[i].innerText="";
        arr[i]=0;
    }
  }
  document.querySelector("#newgame").onclick=()=>{

    document.querySelector("#reset").style.visibility="Visible";
    for( i=0;i<div1.length;i++){
        div1[i].innerText="";
        arr[i]=0;
        let cr = document.querySelector(".winner");

                    cr.style.visibility="hidden";
                    document.querySelector("#newgame").style.visibility="hidden";

  }};