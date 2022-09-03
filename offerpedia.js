let menu=document.getElementById('sreyas')

menu.addEventListener("click",function(){
    console.log('button is clicked')

    document.getElementById('menubar').style.width="300px"
    document.getElementById('menubar').style.padding="10px"
})

let close=document.getElementById('close')

close.addEventListener("click",function(){
    console.log('button is clicked')

    document.getElementById('menubar').style.width="0"
    document.getElementById('menubar').style.padding="0"
})