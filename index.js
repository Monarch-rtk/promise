function sum(n1,n2){
    return new Promise(function(res,rej){
        res(n1+n2)
    })
}

function subsraction(n1,n2){
    return new Promise((res, rej) => {
        res(n1-n2)
    })
}
function multiplication(n1,n2){
    return new Promise((res,rej)=>{
        res(n1*n2)
    })
}
function division(n1,n2){
    return new Promise((res,rej)=>{
        res(n1/n2)
    })
}

sum(12,20).then(function(data){
    console.log(data);
    return subsraction(data,18)
}).then((data) => {
    console.log(data);
    return multiplication(data,8)
}).then((data)=>{
    console.log(data);
    return division(data,2)
}).then((data)=> {
    console.log(data);
})