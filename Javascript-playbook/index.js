

// function checker(){
//     let hasClass = header1.classList.contains('red')
//     if(hasClass){
//         header1.classList.remove('red');
//     }else{
//         header1.classList.add('red')
//     }
// }


// btn.addEventListener('click', ()=>{
//     console.log('click event')
// })
// btn.addEventListener('mousedown', ()=>{ console.log('mousedown')})
// btn.addEventListener('mouseup', ()=>{ console.log('mouseup event')})
// btn.addEventListener('mouseenter', ()=>{ console.log('mouseenter event')})


// const nameI = document.getElementById('name');

// nameI.addEventListener('keypress', ()=>{ 
//     console.log(`${nameI.value}`)
//     console.log(typeof(nameI.value))

// })



const btn = document.querySelector('.btn');
const header1 = document.querySelector('p');

header1.addEventListener(('click'), function(e){
    this.classList.add('blue')
    console.log(e.currentTarget)
})
btn.addEventListener(('click'), function(e){
  
    console.log(e.currentTarget)
})