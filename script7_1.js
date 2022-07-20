// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// request.send();
// request.onload=function(){
//     var result = JSON.parse(request.response)
//     var res = result.filter(e=>e.population>200000)
//     console.log(res)


// }

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// request.send();
// request.onload=function(){
//     var result = JSON.parse(request.response)
//     var res = result.map(e=>e.capital)
//     var rem = result.map(e=>e.name)
//     console.log(res)
//     console.log(rem)


// }


// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// request.send();
// request.onload=function(){
//     var result = JSON.parse(request.response)
//     var out = result.filter((e)=>e.region==="Asia").map(e=>e.name)
//     console.log(out)


// }


// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// request.send();
// request.onload=function(){
//     var result = JSON.parse(request.response)
//     var out = result.filter(e=>e.currencies.name==="United State Dollar")
//     console.log(out)
    

// }


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var result = JSON.parse(request.response)
    var out = result.map(e => e.population).reduce((acc, y) => acc + y)
    console.log(out)
    

}