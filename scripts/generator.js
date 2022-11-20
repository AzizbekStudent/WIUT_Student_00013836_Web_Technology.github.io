
// changing the border
function change_block(){
    let top_left = document.getElementById('range_top_left').value;
    let top_right =document.getElementById('range_top_right').value;
    let bottom_left = document.getElementById('range_bottom_left').value;
    let bottom_right = document.getElementById('range_bottom_right').value;

    let top_left_text = document.getElementById('text_top_left')
    let top_right_text =document.getElementById('text_top_right')
    let bottom_left_text = document.getElementById('text_bottom_left')
    let bottom_right_text = document.getElementById('text_bottom_right')

    let block = document.getElementById('block_element')
    let final_code = document.getElementById('final_code')

    top_left_text.value = top_left
    top_right_text.value = top_right
    bottom_left_text.value = bottom_left
    bottom_right_text.value = bottom_right

    block.style.borderRadius = top_left + 'px ' + top_right + 'px ' + bottom_right + 'px ' + bottom_left + 'px'
    final_code.value ='border-radius: ' + block.style.borderRadius + ';'
}



// changing the color
function change_color(){
    let Red = document.getElementById('Red').value
    let Green = document.getElementById('Green').value
    let Blue = document.getElementById('Blue').value

    let Red_text = document.getElementById('Red_text')
    let Green_text = document.getElementById('Green_text')
    let Blue_text = document.getElementById('Blue_text')

    let block_color = document.getElementById('block_color')
    let changing_color = document.getElementById('changing_color')

    Red_text.value = Red
    Green_text.value = Green
    Blue_text.value = Blue

    block_color.style.backgroundColor = 'rgb( ' + Red + "," + Green + ',' + Blue + ')'
    changing_color.value = "background color: " + block_color.style.backgroundColor + ';'
}
// change the size
function change_the_size(){
    let height = document.getElementById('height_size').value
    let height_text = document.getElementById('height_size_text')
    let width = document.getElementById('width_size').value
    let width_text = document.getElementById('width_size_text')

    let result_block = document.getElementById('result_size')
    let result_block_text = document.getElementById('result_size_text')


    width_text.value = width
    height_text.value = height

    width.value =width_text.value

    result_block.style.height = height +'px'
    result_block.style.width = width + 'px'

    result_block_text.value = 'height: ' +  result_block.style.height + '         ' + 'width: ' + result_block.style.width + ';'
}
// function for changing the padding
function change_padding(){
    let top_p = document.getElementById('top_padding').value
    let right_p = document.getElementById('right_padding').value
    let bottom_p = document.getElementById('bottom_padding').value
    let left_p = document.getElementById('left_padding').value

    let top_p_text = document.getElementById('top_padding_text')
    let right_p_text = document.getElementById('right_padding_text')
    let bottom_p_text = document.getElementById('bottom_padding_text')
    let left_p_text = document.getElementById('left_padding_text')

    let block_padding = document.getElementById('padding_block')
    let block_padding_text = document.getElementById('padding_block_text')


    top_p_text.value = top_p
    right_p_text.value =right_p
    bottom_p_text.value = bottom_p
    left_p_text.value = left_p

    block_padding.style.paddingTop = top_p + 'px'
    block_padding.style.paddingRight = right_p + 'px'
    block_padding.style.paddingBottom = bottom_p + 'px'
    block_padding.style.paddingLeft = left_p + 'px'
    
    block_padding_text.value =  'padding: ' + block_padding.style.padding + ';'
}

// button 1 and its block
let button_chBR = document.getElementById('btn_1').addEventListener('click', showBlock_radius)
let change_block_radius = document.getElementById('change_block_radius')
// button 2 and its block
let button_change_color = document.getElementById('btn_2').addEventListener('click', showChange_color)
let change_block_color = document.getElementById('changing_the_color')
// button 3 and its block
let button_ch_size = document.getElementById('btn_3').addEventListener('click', showChange_size)
let change_block_size = document.getElementById('change_box_size')
// button 4 and its block
let button_ch_padding = document.getElementById('btn_4').addEventListener('click', showChangePadding)
let change_block_padding = document.getElementById('changing_the_padding')


// when page is loaded
function hide_all(){
    change_block_radius.style.display = 'none'
    change_block_color.style.display ='none'
    change_box_size.style.display = 'none'
    change_block_padding.style.display = 'none'

}

let isShown = true
hide_all()
// calling div of changing the radius
function showBlock_radius (){

    if (isShown){
        hide_all()
        change_block_radius.style.display = 'block'
        isShown = false
    }
    else{
        hide_all()
        isShown = true
    }
}
// calling div of changing the color
function showChange_color(){
    if (isShown){
        hide_all()
        change_block_color.style.display = 'block'
        isShown = false
    }
    else{
        hide_all()
        isShown = true
    }
}

function showChange_size(){
    if (isShown){
        hide_all()
        change_block_size.style.display = 'block'
        isShown = false
    }
    else{
        hide_all()
        isShown = true
    }
}

function showChangePadding(){
    if (isShown){
        hide_all()
        change_block_padding.style.display = 'block'
        isShown = false
    }
    else{
        hide_all()
        isShown = true
    }
}