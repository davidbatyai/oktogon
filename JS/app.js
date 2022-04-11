/*
File: app.js
Author: Bátyai Dávid
Copyright: 2022, Bátyai Dávid
Group: Szoft I E 1/3
Date: 2022-04-11
Github: https://github.com/davidbatyai/
Licence: GNU GPL
*/

const OktogonOldalMezo = document.querySelector("#OktogonOldal");
const oktogonTeruletMezo = document.querySelector("#oktogonTerulet");
const teruletSzamitasGomb = document.querySelector("#teruletSzamitas");

teruletSzamitasGomb.addEventListener('click',() =>{
    let oldal = OktogonOldalMezo.value;
    if(isNaN(oldal)){
        oktogonTeruletMezo.value="Számot kérek"
    }
    else{
        if(oldal<=0){
            oktogonTeruletMezo.value="Csak nagyobb szám lehet, mint 0"
        }
        else{
            let eredmeny = 2*(1+Math.sqrt(2))*Math.pow(oldal, 2);
            oktogonTeruletMezo.value=eredmeny.toFixed(2);
        }
    }
})
