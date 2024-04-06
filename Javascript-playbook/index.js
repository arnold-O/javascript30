

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

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const namer = document.querySelector('.review-name');
const job = document.querySelector('.review-job');
const text = document.querySelector('.review-text');
const img = document.querySelector('.img-source');
 


const  reviewsdata =  [
    {
        id:1,
        name:"Gold Sachs",
        job:"Content Creator",
        img:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
        text:"o let us embrace the serendipity of randomness, for within its chaos lies the beauty of discovery. And who knows? Maybe in these seemingly."
    },
    {
        id:2,
        name:"susan peters",
        job:"System Analyst",
        img:"https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=",
        text:"a cosmic crossword where syllables intersect, creating riddles for our contemplation. Each sentence, a constellation of possibility, invites."
    },
    {
        id:3,
        name:"Ken Sarowiwa",
        job:"Developer",
        img:"https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=612x612&w=0&k=20&c=aQw5YhGl99hL1O77thwpQTmqVE7bc8rCX9H0gTeoX_k=",
        text:"a serendipitous dance of letters that pirouettes across the page. It flits between meaning and ambiguity, teasing our minds with its elusive charm."
    },
    {
        id:4,
        name:"Greden Sharoro",
        job:"Director",
        img:"https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=612x612&w=0&k=20&c=kUVdvBnwnZRxausswIKRZuC25bZgTXwrmGSPikdcOro=",
        text:"a serendipitous dance of letters that pirouettes across the page. It flits between meaning and ambiguity, teasing our minds with its elusive charm."
    },

    {
        id:5,
        name:"skies Tyler",
        job:"Photographer",
        img:"https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=e6sawVkyC7t_NTsFb13RWnLq4b9CYon4TJODpS2WU4I=",
        text:"a serendipitous dance of letters that pirouettes across the page. It flits between meaning and ambiguity, teasing our minds with its elusive charm."
    }
]
let count = 0;
function utils(count){
    namer.textContent = reviewsdata[count].name;
    job.textContent = reviewsdata[count].job;
    img.setAttribute('src', reviewsdata[count].img ) ;
    text.textContent = reviewsdata[count].text
}
prev.addEventListener('click', function(e){

    if(count < 0){
        count = reviewsdata.length - 1
        utils(count)
        console.log(count)
    }else { 
        utils(count)
        console.log(count)
        
    }
   
   count--
})
next.addEventListener('click', function(e){

    if(count >=  reviewsdata.length){
        count = 0
      utils(count)
        console.log(count)
    }else { 
       utils(count);
        console.log(count)
    }
    
    count++

})

