import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/components/VotePanel.module.css';

let countdownTimeout: NodeJS.Timeout;

export default function VotePanel() {
    const [time, setTime] = useState(60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else {
            setIsActive(false);
        }
        // clearTimeout(countdownTimeout)
    }, [time])

    function handleVote() {
        axios.post('/api/vote', { 
            email: 'jdsc@cin.ufpe.br',
            password: ""
        }).then((data) => {
            console.log(data);
        })
    }

    function leftPad(number: number) {
        return ("00" + number).slice(-2)
    }

    const hour = leftPad(Math.floor(time / 3600))
    const minutes = leftPad(Math.floor((time % 3600) / 60))
    const seconds = leftPad(Math.floor(((time % 3600) % 60)))

    return (
        <div className = {styles.voteContainer}>
            <header>
                <h1>
                    Perci Pereira
                </h1>
                <img className = {styles.flag}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>    
            </header>
            <hr className = {styles.hr}/>
            <section className = {styles.timing}>
                <div className = {styles.profile} >
                    <img src="/profile.jpg"/> 
                </div>
                <span> {hour}:{minutes}:{seconds} </span>
            </section>
            <hr className = {styles.hr}/>
            <main>
                <div className = {styles.infos}>
                    <h1>
                        Exp 5372 - Projeto de Lei do Executivo n° 1180/20
                    </h1>
                    <div>
                        <span>
                            <img src="/like.svg"/>
                            <p> 4 </p>
                        </span>
                        <span className = {styles.red}>
                            <img src="/dislike.svg"/>
                            <p> 0 </p>
                        </span>
                    </div>
                </div>
                <details className = {styles.details}>
                    <h3>
                        autoriza o poder executivo municial a abrir crédito especial no orçamento do município no valor de R$ 305.750.80
                    </h3>
                    <p>
                        Executivo Municial
                    </p>
                    <p>
                        15872572642184
                    </p>
                </details>
                <div className = {styles.participants}>
                    <span className = {styles.disagree}>
                        <div className = {styles.profile}>
                            <img src="/profile.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span>
                        <div className = {styles.profile}>
                            <img src="/profile.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span className = {styles.agree}>
                        <div className = {styles.profile}>
                            <img src="/profile.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span>
                        <div className = {styles.profile}>
                            <img src="/profile.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                </div>
            </main>
        </div>
    );
}
