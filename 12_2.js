const object = {
    a:1,
    b:444,
    prom:"машиностроение",
    name:true
}

const string="name"

function compare(obj,str){
    (str in obj) ? console.log("true"):console.log("false");
   }

compare(object,string)