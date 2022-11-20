// main buttons
let Pistols = document.getElementById('btn_1').addEventListener('click', showPistols)
let Combat = document.getElementById('btn_2').addEventListener('click', showCombat)
let Automat = document.getElementById('btn_3').addEventListener('click', showAvtomat)
let PP = document.getElementById('btn_4').addEventListener('click', showPP)
let Shotgun = document.getElementById('btn_5').addEventListener('click', showShotgun)
let Sniper = document.getElementById('btn_6').addEventListener('click', showSniper)


// id of divs with guns list

let list_pistol = document.getElementById('list_of_pistol')
let list_combat = document.getElementById('list_of_close_combat')
let list_automat = document.getElementById('list_of_avtomat')
let list_pp = document.getElementById('list_of_machine_pistol')
let list_shotgun = document.getElementById('list_of_shotgun')
let list_sniper = document.getElementById('list_of_sniper')




// when page is loaded
function hideAll(){
    list_pistol.style.display = 'none'
    list_combat.style.display = 'none'
    list_automat.style.display = 'none'
    list_pp.style.display = 'none'
    list_shotgun.style.display = 'none'
    list_sniper.style.display = 'none'
}

hideAll()

//booleans
let isShown = true
// functions
function showPistols(){
    if (isShown){
        hideAll()
        list_pistol.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}

// =================
function showCombat(){
    if (isShown){
        hideAll()
        list_combat.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}
// =================
function showAvtomat(){
    if (isShown){
        hideAll()
        list_automat.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}
// =================
function showPP(){
    if (isShown){
        hideAll()
        list_pp.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}
// =================
function showShotgun(){
    if (isShown){
        hideAll()
        list_shotgun.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}
// =================
function showSniper(){
    if (isShown){
        hideAll()
        list_sniper.style.display = 'block'
        isShown = false
    }
    else{
        hideAll()
        isShown = true
    }
}

//  secondary buttons

let btn_deagle = document.getElementById('btn_1_1').addEventListener('click', show_Deagle)
let btn_usp = document.getElementById('btn_1_2').addEventListener('click', show_usp)
let btn_g18 = document.getElementById('btn_1_3').addEventListener('click', show_g18)
let btn_scythe = document.getElementById('btn_2_1').addEventListener('click', show_scythe)
let btn_bita = document.getElementById('btn_2_2').addEventListener('click', show_bita)
let btn_machete = document.getElementById('btn_2_3').addEventListener('click', show_machete)
let btn_pan = document.getElementById('btn_2_4').addEventListener('click', show_pan)
let btn_katana = document.getElementById('btn_2_5').addEventListener('click', show_katana)
let btn_m4a1 = document.getElementById('btn_3_1').addEventListener('click', show_m4a1)
let btn_an94 = document.getElementById('btn_3_2').addEventListener('click', show_an94)
let btn_xm8 = document.getElementById('btn_3_3').addEventListener('click', show_xm_8)
let btn_ak47 = document.getElementById('btn_3_4').addEventListener('click', show_ak47)
let btng_36 = document.getElementById('btn_3_5').addEventListener('click', show_g_36)
let btn_mp5 = document.getElementById('btn_4_1').addEventListener('click', show_mp5)
let btn_mp40 = document.getElementById('btn_4_2').addEventListener('click', show_mp40)
let btn_tompson = document.getElementById('btn_4_3').addEventListener('click', show_tompson)
let btn_m1014 = document.getElementById('btn_5_1').addEventListener('click', show_m1014)
let btn_spas = document.getElementById('btn_5_2').addEventListener('click', show_spas)
let btn_winchester = document.getElementById('btn_5_3').addEventListener('click', show_winchester)
let btn_AWM = document.getElementById('btn_6_1').addEventListener('click', show_AWM)
let btn_M82 = document.getElementById('btn_6_2').addEventListener('click', show_M82)
let btn_SVD = document.getElementById('btn_6_3').addEventListener('click', show_SVD)

// dib blocks ids

let gun_1 = document.getElementById('g_1')
let gun_2 = document.getElementById('g_2')
let gun_3 = document.getElementById('g_3')
let gun_4 = document.getElementById('g_4')
let gun_5 = document.getElementById('g_5')
let gun_6 = document.getElementById('g_6')
let gun_7 = document.getElementById('g_7')
let gun_8 = document.getElementById('g_8')
let gun_9 = document.getElementById('g_9')
let gun_10 = document.getElementById('g_10')
let gun_11 = document.getElementById('g_11')
let gun_12 = document.getElementById('g_12')
let gun_13 = document.getElementById('g_13')
let gun_14 = document.getElementById('g_14')
let gun_15 = document.getElementById('g_15')
let gun_16 = document.getElementById('g_16')
let gun_17 = document.getElementById('g_17')
let gun_18 = document.getElementById('g_18')
let gun_19 = document.getElementById('g_19')
let gun_20 = document.getElementById('g_20')
let gun_21 = document.getElementById('g_21')
let gun_22 = document.getElementById('g_22')

// boollean
let is_gun_shown = true

//function
function hide_guns(){
    gun_1.style.display = 'none'
    gun_2.style.display = 'none'
    gun_3.style.display = 'none'
    gun_4.style.display = 'none'
    gun_5.style.display = 'none'
    gun_6.style.display = 'none'
    gun_7.style.display = 'none'
    gun_8.style.display = 'none'
    gun_9.style.display = 'none'
    gun_10.style.display = 'none'
    gun_11.style.display = 'none'
    gun_12.style.display = 'none'
    gun_13.style.display = 'none'
    gun_14.style.display = 'none'
    gun_15.style.display = 'none'
    gun_16.style.display = 'none'
    gun_17.style.display = 'none'
    gun_18.style.display = 'none'
    gun_19.style.display = 'none'
    gun_20.style.display = 'none'
    gun_21.style.display = 'none'
    gun_22.style.display = 'none'

}

hide_guns()
// show deagle
function show_Deagle(){
    if (is_gun_shown){
        hide_guns() // we hide everything
        gun_1.style.display = 'block' // we display needed gun
    }
    else{
        hide_guns() // if it is shown we hide it again
    }
}
// show USP
function show_usp(){
    if (is_gun_shown){
        hide_guns()
        gun_2.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show g18
function show_g18(){
    if (is_gun_shown){
        hide_guns()
        gun_3.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show scythe
function show_scythe(){
    if (is_gun_shown){
        hide_guns()
        gun_4.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show baseball bita
function show_bita(){
    if (is_gun_shown){
        hide_guns()
        gun_5.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show machete
function show_machete(){
    if (is_gun_shown){
        hide_guns()
        gun_6.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show pan
function show_pan(){
    if (is_gun_shown){
        hide_guns()
        gun_7.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show katana
function show_katana(){
    if (is_gun_shown){
        hide_guns()
        gun_8.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun M4A1
function show_m4a1(){
    if (is_gun_shown){
        hide_guns()
        gun_9.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun an94
function show_an94(){
    if (is_gun_shown){
        hide_guns()
        gun_10.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
//================ 10
// show gun XM-8
function show_xm_8(){
    if (is_gun_shown){
        hide_guns()
        gun_11.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun ak-47
function show_ak47(){
    if (is_gun_shown){
        hide_guns()
        gun_12.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun g-36
function show_g_36(){
    if (is_gun_shown){
        hide_guns()
        gun_13.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun mp5
function show_mp5(){
    if (is_gun_shown){
        hide_guns()
        gun_14.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun mp40
function show_mp40(){
    if (is_gun_shown){
        hide_guns()
        gun_15.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun tompson
function show_tompson(){
    if (is_gun_shown){
        hide_guns()
        gun_16.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show shotgun M1014
function show_m1014(){
    if (is_gun_shown){
        hide_guns()
        gun_17.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show shot gun SPAS-12
function show_spas(){
    if (is_gun_shown){
        hide_guns()
        gun_18.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show winchester
function show_winchester(){
    if (is_gun_shown){
        hide_guns()
        gun_19.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun AWM
function show_AWM(){
    if (is_gun_shown){
        hide_guns()
        gun_20.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun m82
function show_M82(){
    if (is_gun_shown){
        hide_guns()
        gun_21.style.display = 'block'
    }
    else{
        hide_guns()
    }
}
// show gun SVD
function show_SVD(){
    if (is_gun_shown){
        hide_guns()
        gun_22.style.display = 'block'
    }
    else{
        hide_guns()
    }
}