var pronoun = ["La","Nuestra","Aquella","Esa","Esta"];
var adj = ["pelota","ventana","pared","tele","marioneta","lavadora","bicicleta","ballena","maquina","nave"];
var noun = ["roja","alta","pequeña","arrugada","limpia","sucia","grande","fea"];

function dominio() {

    pronoun.forEach(function (item1) {
        adj.forEach(function(item2){
            noun.forEach(function(item3){
                console.log(item1+item2+item3+ex());
            }) 
        }) 
    })
}

function ex(){

    let dom=[".com",".es",".net",".tv",".cl",".org"];
    let ran= Math.floor(Math.random()*6);
    return dom[ran];
}

dominio();