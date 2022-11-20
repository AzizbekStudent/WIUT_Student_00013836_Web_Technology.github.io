// divs names 00013836
let Alok = document.getElementById('alok')
let a124 = document.getElementById('a124')
let Hayato = document.getElementById('Hayato')
let Carolina = document.getElementById('Carolina')
let Timur = document.getElementById('Timur')
let Moco = document.getElementById('Moco')
let Miguel = document.getElementById('Miguel')

// when page loaded divs are hiden

Alok.style.display = 'none'
a124.style.display = 'none'
Hayato.style.display = 'none'
Carolina.style.display = 'none'
Timur.style.display = 'none'
Moco.style.display = 'none'
Miguel.style.display = 'none'

// bollean points for each card

let is_Alok_shown = true
let is_A124_shown = true
let is_Hayato_shown = true
let is_Carolina_shown = true
let is_Timur_shown = true
let is_Moco_shown = true
let is_Miguel_shown = true

// settings when buttons are pressed

//button for showing Alok
document.getElementById('char_1').addEventListener('click', showAlok);
function showAlok(){
    if (is_Alok_shown){
        Alok.style.display = 'block'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = false
        let is_A124_shown = true
        let is_Hayato_shown = true
        let is_Carolina_shown = true
        let is_Timur_shown = true
        let is_Moco_shown = true
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_Alok_shown = true
    }
}

//button for showing A124
document.getElementById('char_2').addEventListener('click', showA124);
function showA124(){
    if (is_A124_shown){
        Alok.style.display = 'none'
        a124.style.display = 'block'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = false
        let is_Hayato_shown = true
        let is_Carolina_shown = true
        let is_Timur_shown = true
        let is_Moco_shown = true
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_A124_shown = true
    }
}

//button for showing Hayato
document.getElementById('char_3').addEventListener('click', showHayato);
function showHayato(){
    if (is_Hayato_shown){
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'block'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = true
        let is_Hayato_shown = false
        let is_Carolina_shown = true
        let is_Timur_shown = true
        let is_Moco_shown = true
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_Hayato_shown = true
    }
}

//button for showing Carolina
document.getElementById('char_4').addEventListener('click', showCarolina);
function showCarolina(){
    if (is_Carolina_shown){
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'block'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = true
        let is_Hayato_shown = true
        let is_Carolina_shown = false
        let is_Timur_shown = true
        let is_Moco_shown = true
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_Carolina_shown = true
    }
}

//button for showing Timur
document.getElementById('char_5').addEventListener('click', showTimur);
function showTimur(){
    if (is_Timur_shown){
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'block'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = true
        let is_Hayato_shown = true
        let is_Carolina_shown = true
        let is_Timur_shown = false
        let is_Moco_shown = true
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_Timur_shown = true
    }
}

//button for showing Moco
document.getElementById('char_6').addEventListener('click', showMoco);
function showMoco(){
    if (is_Moco_shown){
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'block'
        Miguel.style.display = 'none'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = true
        let is_Hayato_shown = true
        let is_Carolina_shown = true
        let is_Timur_shown = true
        let is_Moco_shown = false
        let is_Miguel_shown = true
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        is_Moco_shown = true
    }
}

//button for showing Miguel
document.getElementById('char_7').addEventListener('click', showMiguel);
function showMiguel(){
    if (is_Miguel_shown){
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'block'
        // =========================
        let is_Alok_shown = true
        let is_A124_shown = true
        let is_Hayato_shown = true
        let is_Carolina_shown = true
        let is_Timur_shown = true
        let is_Moco_shown = true
        let is_Miguel_shown = false
    }
    else {
        Alok.style.display = 'none'
        a124.style.display = 'none'
        Hayato.style.display = 'none'
        Carolina.style.display = 'none'
        Timur.style.display = 'none'
        Moco.style.display = 'none'
        Miguel.style.display = 'none'
        isMiguel = true
    }
}