const URL = 'https://api.pray.zone/v2/times/today.json?'; 
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const bomdod = document.querySelector(".bomdod")
const peshin = document.querySelector(".peshin")
const asr = document.querySelector(".asr")
const shom = document.querySelector(".shom")
const xufton = document.querySelector(".xufton")

btn.addEventListener('click',(e) => {
    e.preventDefault()
    getData()
});
input.addEventListener("keypress",(e)=>{
    if(e.key = "Enter"){
        getData();
    }
})

function getData(){
    fetch(URL+"city="+input.value)
    .then(res =>res.json())
    .then(data =>{
        let times = data.results.datetime[0].times;
        console.log(times);
        bomdod.textContent = times.Fajr;
        peshin.textContent = times.Dhuhr;
        asr.textContent = times.Asr;
        shom.textContent = times.Maghrib;
        xufton.textContent = times.Isha;
    })
    .catch(err => {
        console.log('Xatolik');
    })
}