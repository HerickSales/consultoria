
let phraseHelp = document.getElementById('phraseHelp');
let topics= document.querySelectorAll('.topic')
let topicClass=['topic', 'topicActive']




topics.forEach(topic =>{  
 topic.addEventListener('click', ()=>{
    console.log('clock')
    if(topic.classList==topicClass[0]){
        topic.classList.remove('topic')
        topic.classList.add(topicClass[1])
    }else{
        topic.classList.remove('topicActive')
        topic.classList.add(topicClass[0])

    }
    console.log(topic.classList)
   })
})
