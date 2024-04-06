

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



// const btn = document.querySelector('.btn');
// const header1 = document.querySelector('p');

// header1.addEventListener(('click'), function(e){
//     this.classList.add('blue')
//     console.log(e.currentTarget)
// })
// btn.addEventListener(('click'), function(e){
  
//     console.log(e.currentTarget)
// })

// const container = document.querySelector('.container');
// const listItem = document.querySelector('.list-item');

// container.addEventListener('click',(e)=>{
   
//         console.log(e.target)
//         console.log(e.currentTarget)
    
// })

const friends =["what your name", 'Going anywhere', 'today na oday']

localStorage.setItem("name", JSON.stringify(friends))

const itemget = JSON.parse(localStorage.getItem("name"))



const btns = document.querySelectorAll('.btn');
const counterHtml = document.querySelector('.counter');
let counter = 0;
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    const check = e.currentTarget.classList;
        if(check.contains("decrease")){
          counter--
        }
        else if(check.contains("increase")){
            counter++
        }
        else{
            counter = 0
        }
counterHtml.textContent = counter;
})
})


/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 * 
 
 * 
*/


const  reviewsdata =  [
    {
        id:1,
        name:"susan peters",
        img:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    }
]
