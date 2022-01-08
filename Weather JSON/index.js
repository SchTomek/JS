const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')
button.onclick = () =>{
//1.feladat
const jsonvalue = JSON.parse(textarea.value)

function jsonkiir(){
    console.log(jsonvalue)
}


//2.feladat
const napi = jsonvalue.daily


for(let i =0;i<napi.length;i++){
    if(napi[i].wind_deg>134 && napi[i].wind_deg<226 && napi[i].weather[0].main ==="Clouds"){
        task1.innerHTML= task1.innerHTML + napi[i].dt + ", "
    }
}

console.log(napi)

//3.feladat
let napimaximum = 100
for(let i =0;i<napi.length;i++){
    if(napi[i].temp.max<napimaximum){
        napimaximum=napi[i].temp.max
    }
}
task2.innerHTML=napimaximum

//4.feladat
let nyomas=true
for(let i =0;i<napi.length;i++){
    if(napi[i].pressure<1010){
        nyomas=false
    }
}

task3.innerHTML=nyomas

//5.feladat
let atlag =0
for(let i =0;i<napi.length;i++){
    atlag= atlag+ napi[i].feels_like.day
    }
atlag= atlag/napi.length

task4.innerHTML=atlag


//6.feladat
const orai = jsonvalue.hourly

let orakszama=0

for(let i = 0;i<orai.length;i++){
    if(orai[i].wind_speed > 3){
       orakszama++
    }
}
task5.innerHTML=orakszama
}