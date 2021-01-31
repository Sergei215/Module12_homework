const object = {
    a:1,
    b:444,
    prom:"машиностроение",
    name:true
}
function keys(obj){
    for (let key in obj){
        console.log(key)
    }
}

keys(object)