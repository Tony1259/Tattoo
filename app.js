const containers = document.querySelectorAll('.container')
const lorems = document.querySelectorAll('.lorem')
const heals = document.querySelectorAll('.heal')
const alcohol = document.querySelectorAll('.alcohol')
const pictures = document.querySelectorAll('.pictures')
const loremContainer = document.querySelector('.lorem-container')
const healContainer = document.querySelector('.heal-container')
const alcoholContainer = document.querySelector('.alcohol-container')
const pictureContainer = document.querySelector('.picture-container')
const downTransition = document.querySelectorAll('.transition-down')


window.addEventListener('load',function(){
    downTransition.forEach(function(transition){
        transition.classList.add('show')
    })
})
   






window.addEventListener('scroll',()=>{
    const scrollHeight = window.innerHeight
    const loremHeight = Math.ceil(loremContainer.getBoundingClientRect().top)
    const healHeight = Math.ceil(healContainer.getBoundingClientRect().top)
    const alcoholHeight = Math.ceil(alcoholContainer.getBoundingClientRect().top)
    
    if(scrollHeight > loremHeight){
        lorems.forEach(function(lorem){
            lorem.classList.add('show')
        })
    }else{
        lorems.forEach(function(lorem){
            lorem.classList.remove('show')
        })
    }
    
    if(scrollHeight > alcoholHeight){
        alcohol.forEach(function(alco){
            alco.classList.add('show')
        })
    }else{
        alcohol.forEach(function(alco){
            alco.classList.remove('show')
        })
    }
    
    if(scrollHeight > healHeight){
        heals.forEach(function(heal){
            heal.classList.add('show')
        })
    }else{
        heals.forEach(function(heal){
            heal.classList.remove('show')
        })
    }
    console.log(loremHeight)
    
    if(scrollHeight > pictureHeight){
        pictures.forEach(function(picture){
            picture.classList.add('show')
        })
    }else{
        pictures.forEach(function(picture){
            picture.classList.remove('show')
        })
    }
    console.log(loremHeight)
    
})