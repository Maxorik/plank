const timerList = document.querySelectorAll('.timer-block');
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



