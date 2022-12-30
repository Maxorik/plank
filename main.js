const timerList = document.querySelectorAll('.timer-block');
const startBtn = document.getElementById('start-button');
let oldPos = 0; // предыдущая позиция тача

timerList.forEach( timer => {
    timer.addEventListener('touchstart', e => {
        oldPos = e.target.getBoundingClientRect().y + (e.target.getBoundingClientRect().height / 2);
    })

    timer.addEventListener('touchmove', e => {
        const timerPos = e.target.getBoundingClientRect().y + e.target.getBoundingClientRect().height;    // координаты таймера
        const touchPos = e.changedTouches[0].clientY;                                                     // координаты тача
        const maxValue = +e.target.getAttribute('data-max');
        const timerNumberValue = +e.target.getAttribute('data-value');
        const timerStep = 15;   // шаг координат при котором меняем цифру
        const diff = touchPos - oldPos;
        const isMoveable = diff < 0 ? diff < -timerStep :  diff > timerStep;

        if(isMoveable) {
            oldPos = touchPos;
            let newValue;
            if(touchPos > timerPos) {
                newValue = timerNumberValue + 1 > maxValue ? 0 : timerNumberValue + 1;
                e.target.innerHTML = newValue;
                e.target.setAttribute('data-value', newValue)
            } else {
                newValue = timerNumberValue - 1 < 0 ? maxValue : timerNumberValue - 1;
                e.target.innerHTML = newValue;
                e.target.setAttribute('data-value', newValue)
            }
        }
    })

    timer.addEventListener('touchend', e => {
        //TODO записывать в переменную значение
        console.log(e.changedTouches[0].clientY);
    })
})

startBtn.addEventListener('click', () => {
    // берем все таймеры
    // берем значение первого, считаем
    // анимируем первый
    // когда первый закончился - запускаем второй и т.д. (цикл)

    const timerContainers = document.querySelectorAll('.timer-container');

    timerContainers.forEach( timer => {
        const time = timer.querySelectorAll('.timer-digital');

        // console.log(Array.from(time))
        //
        // let timeValue = [...time].reduce( (res, cur) => {
        //     res + cur.getAttribute('data-value');
        // }, 0);
        //
        // console.log(timeValue)
    })

})



