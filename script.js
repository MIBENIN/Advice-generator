const generateBtn=document.getElementById("generateBtn");

const fetchData=async()=>{
    try{
        // const response=await fetch('https://api.adviceslip.com/advice');
        const response = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
        const adviceData=await response.json();
        document.querySelector("#advice-id").innerText=`${adviceData.slip.id}`;
        document.querySelector("#advice").innerText=`${adviceData.slip.advice}`;
    }
    catch(error){
        console.log(error);
    }
}

generateBtn.onclick=()=>fetchData();