const value=document.querySelector(".inp-tmp");
const select=document.querySelector(".select")

document.querySelector(".button").addEventListener('click',()=>{
    
let T=parseInt(value.value);
let con=select.value;
if(con=="C to F")
    {
        let F=(T*9/5)+32;
        document.querySelector(".result").innerHTML=F.toFixed(2) + "F";
    }
    
    else{
        let C=(T-32)*5/9;
        document.querySelector(".result").innerHTML=C.toFixed(2) + "C";
    }
})
