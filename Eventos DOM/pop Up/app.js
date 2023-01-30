const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const x = document.querySelector('.popup-close')


button.addEventListener('click', ()=>{
    popup.style.display = 'block'
})

// x.addEventListener('click', ()=>{
//     popup.style.display ='none'
// })

popup.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close','popup-link','popup-wrapper']
    const sholdClosePopup = classNames.some(className => className === classNameOfClickedElement)
    
    if(sholdClosePopup){
        popup.style.display = 'none'
        }
    }
)