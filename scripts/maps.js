let Bermuda = document.getElementById('bermuda')
let Bermuda_2 = document.getElementById('bermuda_2')
let Alphs = document.getElementById('Alphs')
let Chistilishe = document.getElementById('Chistilishe')
let Kalahari = document.getElementById('Kalahari')
let Next_Erra = document.getElementById('Next_Erra')

// when page is loaded every block is hidden
Bermuda.style.display = 'none'
Bermuda_2.style.display = 'none'
Alphs.style.display = 'none'
Chistilishe.style.display = 'none'
Kalahari.style.display = 'none'
Next_Erra.style.display = 'none'

// hidden elements

// button for showing bermuda
document.getElementById('map_1').addEventListener('click', showBermuda);
let isBermudaShown = true
function showBermuda (){
  
  alert('Bermuda')

  if (isBermudaShown){
    Bermuda.style.display = 'block'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isBermudaShown = false
    isBermuda_2Shown = true
    isAlphsShown = true
    isChistilisheShown = true
    isKalahariShown = true
    isNext_ErraShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isBermudaShown = true
  }
}

// ========================
document.getElementById('map_2').addEventListener('click', showBermuda_2);
let isBermuda_2Shown = true
function showBermuda_2 (){
  
  alert('Bermuda 2.0')

  if (isBermuda_2Shown){
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'block'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isBermuda_2Shown = false
    isBermudaShown = true
    isAlphsShown = true
    isChistilisheShown = true
    isKalahariShown = true
    isNext_ErraShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isBermuda_2Shown = true
  }
}

// button for showing Alphs
document.getElementById('map_3').addEventListener('click', showAlph);
let isAlphsShown = true
function showAlph (){
  
  alert('Alphs')

  if (isAlphsShown){
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'block'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isAlphsShown = false
    isBermudaShown = true
    isBermuda_2Shown = true
    isChistilisheShown = true
    isKalahariShown = true
    isNext_ErraShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isAlphsShown = true
  }
}

// button for showing Chistilishe
document.getElementById('map_4').addEventListener('click', showChistilishe);
let isChistilisheShown = true
function showChistilishe (){
  
  alert('Chistilishe')

  if (isChistilisheShown){
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'block'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isChistilisheShown = false
    isBermudaShown = true
    isBermuda_2Shown = true
    isAlphsShown = true
    isKalahariShown = true
    isNext_ErraShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isChistilisheShown = true
  }
}

// button for showing Kalahari
document.getElementById('map_5').addEventListener('click', showKalahari);
let isKalahariShown = true
function showKalahari (){
  
  alert('Kalahari')

  if (isKalahariShown){
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'block'
    Next_Erra.style.display = 'none'
    isKalahariShown = false
    isBermudaShown = true
    isBermuda_2Shown = true
    isAlphsShown = true
    isChistilisheShown = true
    isNext_ErraShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isKalahariShown = true
  }
}

// button for showing Next_Erra
document.getElementById('map_6').addEventListener('click', showNext_Erra);
let isNext_ErraShown = true
function showNext_Erra (){
  
  alert('Next Erra')

  if (isNext_ErraShown){
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'block'
    isNext_ErraShown = false
    isBermudaShown = true
    isBermuda_2Shown = true
    isAlphsShown = true
    isChistilisheShown = true
    isKalahariShown = true
  }
  else {
    Bermuda.style.display = 'none'
    Bermuda_2.style.display = 'none'
    Alphs.style.display = 'none'
    Chistilishe.style.display = 'none'
    Kalahari.style.display = 'none'
    Next_Erra.style.display = 'none'
    isNext_ErraShown = true
  }
}