import React,{ useEffect, useRef, useState } from 'react'
import './App.css';

export default function Timer() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('December 31, 2021 23:59:59').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0){
                // stop our timer
                clearInterval (interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

// componentDidMount
useEffect(() =>{
    startTimer();
    return() => {
        clearInterval (interval.current);
    };
})
    return (
       <div>
            <section className='timer-container'>
                <section className='timer'>
                    <div>
                        <section>
                            <p>{timerDays}</p>
                            <p><small>Дней</small></p>
                            </section>
                            <span>:</span>
                            <section>
                            <p>{timerHours}</p>
                            <p><small>Часов</small></p>
                            </section>
                            <span>:</span>
                            <section>
                            <p>{timerMinutes}</p>
                            <p><small>Минут</small></p>
                            </section>
                            <span>:</span>
                            <section>
                            <p>{timerSeconds}</p>
                            <p><small>Секунд</small></p>
                            </section>
                    </div>
                </section>
            </section>
       </div>
    )
}
