const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

const results = []

const sorok = textarea.value.split("\n")
var lessThanTwelve = 0
var javaScriptZhResult =0
var greatestTotalScore=0
var studentWithLessThanTwelve
var bothMoreThan24 =0

sorok.forEach(element => {
    const values = element.split(",")
    results.push({neptun: values[0], javascript: parseFloat(values[1]), php: parseFloat(values[2])})
    if(parseFloat(values[1])<12){
        lessThanTwelve = lessThanTwelve+1;
        studentWithLessThanTwelve = values[0]
    }
    javaScriptZhResult = javaScriptZhResult+parseFloat(values[1])
    if(greatestTotalScore<parseFloat(values[1])+parseFloat(values[2])){
        greatestTotalScore=parseFloat(values[1])+parseFloat(values[2])
    }
    if(parseFloat(values[1])>24 && parseFloat(values[2])>24){
        bothMoreThan24=1
    }
    }
)

console.log(results)

button.onclick = () => {
    task1.innerHTML=lessThanTwelve
    task2.innerHTML=javaScriptZhResult/sorok.length
    task3.innerHTML=greatestTotalScore
    task4.innerHTML=studentWithLessThanTwelve
    if(bothMoreThan24==1){
        task5.innerHTML="Yes"
    }else{
        task5.innerHTML="No"
    }
}
