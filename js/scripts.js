let phraseHelp = document.getElementById('phraseHelp');
let topics= document.querySelectorAll('.topic')
let topicsActive= document.querySelectorAll('.topicActive')
let topicClass=['topic', 'topicActive']




topics.forEach(topic =>{  
    /*decid9r  a melhor animação */
    topic.addEventListener('click', ()=>{
        topic.style.animation='frontFlip 1s'
        setTimeout(()=>{
            topic.style.display='none';
            topic.nextElementSibling.style.display='flex';
        }, 400)
    })
})

topicsActive.forEach(topic =>{
    topic.addEventListener('click', ()=>{
        

       
            topic.previousElementSibling.style.display='flex';
            topic.style.display='none';
       
        topic.previousElementSibling.style.animation='backFlip 1s';
        
    })
})