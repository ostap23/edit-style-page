const CONTAINER = document.querySelector('.container');
const TOP_BOX = document.querySelector('.top-box');
const TEXTAREA = document.querySelector('#code-data');
const EDIT_BLOCK = document.querySelector('.block-edit');
const STYLE_BLOCK = document.querySelector('.block-style');
const COLOR_BLOCK = document.querySelector('.color');
const BG_COLOR_BLOCK = document.querySelector('.background-color');
const ADD_BLOCK = document.querySelector('.add-block');
const TABLE_BLOCK = document.querySelector('.table');
const LIST_BLOCK = document.querySelector('.list');


const ADD_BTN = document.querySelector('.add');
const EDIT_BTN = document.querySelector('.edit');
const STYLE_BTN = document.querySelector('.style');
const SAVE_BTN = document.querySelector('.save');
const TEXT_COLOR_BTN = document.querySelector('.text-color');
const BACKGROUND_BTN = document.querySelector('.background');
const TABLE_BTN = document.querySelector('.table-btn');

let form_style = document.forms.formStyle;
let form_add = document.forms.formAdd;
let form_list = document.forms.formList;


EDIT_BTN.addEventListener('click', function() {
    EDIT_BLOCK.classList.add('show');
    STYLE_BLOCK.classList.remove('show');
    TEXTAREA.value = TOP_BOX.innerHTML;
});

SAVE_BTN.addEventListener('click', function() {
    TOP_BOX.innerHTML = TEXTAREA.value;
    EDIT_BLOCK.classList.remove('show');
});

STYLE_BTN.addEventListener('click', function() {
    STYLE_BLOCK.classList.add('show');
    EDIT_BLOCK.classList.remove('show');
});

// Change font size

form_style.addEventListener('click', function(event) {
    if (event.target.name === 'size') {
        TOP_BOX.style.fontSize = event.target.value;
    }
});

// Change font weight and style

form_style.addEventListener('click', function(event) {
    if (event.target.name === 'font-weight') {
        if (event.target.checked) {
            TOP_BOX.style.fontWeight = event.target.value;
        } else {
            TOP_BOX.style.fontWeight = 'normal';
        }
    } else if (event.target.name === 'font-style') {
        if (event.target.checked) {
            TOP_BOX.style.fontStyle = event.target.value;
        } else {
            TOP_BOX.style.fontStyle = 'normal';

        }
    }
});

// Change font family

form_style.addEventListener('click', function(event) {
    if (event.target.name === 'font-family') {
        TOP_BOX.style.fontFamily = event.target.value;
    }
});

// Chenge text color

TEXT_COLOR_BTN.addEventListener('click', function() {  
    COLOR_BLOCK.classList.add('flex');
    COLOR_BLOCK.addEventListener('click', function(event) {
        TOP_BOX.style.color = getComputedStyle(event.target).getPropertyValue('background-color');
        COLOR_BLOCK.classList.remove('flex');
    });
});

// Chenge background color

BACKGROUND_BTN.addEventListener('click', function() {
    BG_COLOR_BLOCK.classList.add('flex');
    BG_COLOR_BLOCK.addEventListener('click', function(event) {
        TOP_BOX.style.background = getComputedStyle(event.target).getPropertyValue('background-color');
        BG_COLOR_BLOCK.classList.remove('flex');
    });
});



ADD_BTN.addEventListener('click', function() {
    ADD_BLOCK.classList.add('show');
    CONTAINER.classList.add('unshow');
});

form_add.addEventListener('click', function(event) {
    if (event.target.name === 'table-list') {
        if (event.target.value === 'table') {
            TABLE_BLOCK.classList.add('grid');
            LIST_BLOCK.classList.remove('grid');
            ADD_BLOCK.style.height = '425px';
        } 
        else if (event.target.value === 'list') {
            TABLE_BLOCK.classList.remove('grid');
            LIST_BLOCK.classList.add('grid');
            ADD_BLOCK.style.height = '230px';
        }
    }
});


form_add.tableBtn.addEventListener('click', function(event) {
    let tr = '';
    for (let i = 0; i < form_add.tr.value; i++) {
        let td = '';
        for (let i = 0; i < form_add.td.value; i++) {
            td += '<td ' + 'style="' + 'width: ' + form_add.widthTd.value + 'px; '
             + 'height: ' + form_add.heightTd.value + 'px; ' + 'border: ' + form_add.borderWidth.value +
            'px ' + form_add.borderType.value + ' ' + form_add.borderColor.value + '">TD</td>';
        }
        tr += '<tr>' + td + '</tr>';
    }
    let tableCode = '<table>' + '<tbody>' + tr + '</tbody>' + '</table>';
    TEXTAREA.value += tableCode;
    ADD_BLOCK.classList.remove('show');
    CONTAINER.classList.remove('unshow');
    TABLE_BLOCK.classList.remove('grid');
    form_add.tr.value = null;
    form_add.td.value = null;
    form_add.widthTd.value = null;
    form_add.heightTd.value = null;
    form_add.borderWidth.value = null;
});

form_list.listBtn.addEventListener('click', function(event) {
    let li = '';
    for (let i = 1; i <= form_list.countLi.value; i++) {
        li += `<li>item ${i} </li>`;
    }
    
    let ul = '<ul type="' + form_list.mark.value + '">' + li + '</ul>';
    TEXTAREA.value += ul;
    ADD_BLOCK.classList.remove('show');
    CONTAINER.classList.remove('unshow');
    LIST_BLOCK.classList.remove('grid');
    form_list.countLi.value = null;
});


