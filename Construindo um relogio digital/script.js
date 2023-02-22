const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    clockContainer.innerHTML = `
    <spam> ${String(hours).length === 1 ? '0' + hours : hours}</spam> :
    <spam> ${String(minutes).length === 1 ?'0' + minutes : minutes}</spam> :
    <spam> ${String(seconds).length === 1 ? '0' + seconds : seconds}</spam>`
}
setInterval(updateClock, 1000)