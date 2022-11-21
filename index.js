let myForm= document.querySelector('#myform');

let userList= document.querySelector('#itemharu');

let butt= document.querySelector('#demo');

let nameInput= document.querySelector('#name');

let press = document.querySelector('#press');

let del = okdelete();


function okdelete(){

}

press.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText= nameInput.value;
    userList.appendChild(paragraph);
    nameInput.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        userList.removeChild(paragraph);
    })
})

