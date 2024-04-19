let x = document.querySelector('body')
let input = document.querySelector('input')
let absolute = 40
function position_input(value){
    if(value === 'ArrowUp'){
        setInterval(()=>{
            input.style.top = `${absolute}px`
        },100)
        absolute += 1
    }else if(value === 'ArrowLeft'){
        let left = 40
        setInterval(()=>{
            input.style.right= `${left}px`
        },100)
        left += 20
        console.log(left);
    }
}
x.addEventListener("keydown",(item)=>{


    let pTag = document.querySelector(`p[data-key="${item.key}"]`)
    position_input(item.key)
    if(item.key === 'ArrowUp'){
    }
    if(item.key === 'Backspace'){
        input.value = input.value.slice(0,input.value.length - 1)
    }else if(item.key === 'Shift' || item.key === 'Tab'){
        input.value += " "
    }else if(item.key !== 'Alt' && item.key !== 'Control'){
        input.value += item.key
    }
    if (pTag) {
        let pTags = document.querySelectorAll('#main p');
        pTags.forEach((tag) => {
            tag.classList.remove('key_hover');
        });
        pTag.classList.add('key_hover')
        setTimeout(() => {
            pTag.classList.remove('key_hover')
        }, 1000)
    }
})

let keysArray = []

fetch("./keys.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((keysArray) => {
        let mainDiv = document.getElementById('main')
        let keysHtml = ''

        keysArray.forEach((element) => {
            if(element.stylerevers == 13 ){
                keysHtml += '<p class="p1 p1-1" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 18){
                keysHtml += '<p class="p1 p1-2" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 35){
                keysHtml += '<p class="p1 p1-3" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 36){
                keysHtml += '<p class="p1 p1-4" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 48 || element.stylerevers == 52 || element.key == 79){
                keysHtml += '<p class="p1 p1-5" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.key == 63){
                keysHtml += '<p class="p1 p1-6" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.key == 67){
                keysHtml += '<p class="p1 p1-7" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 72){
                keysHtml += '<p class="p1 p1-8" data-key="' + element.key + '">' + element.value +'</p>'
            }else if(element.stylerevers == 81){
                keysHtml += '<p class="p1 p1-9" data-key="' + element.key + '">' + element.value +'</p>'
            }
            else{
                keysHtml += '<p class="p1" data-key="' + element.key + '">' + element.value +'</p>'
            }
        })
          mainDiv.insertAdjacentHTML('afterbegin', keysHtml)
    }); 