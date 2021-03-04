import axios from 'axios';
import styles from '../styles/components/VotePanel.module.css';

export default function VotePanel() {
    function handleVote() {
        axios.post('/api/vote', { 
            email: 'jdsc@cin.ufpe.br',
            password: "Danilo123"
        }).then((data) => {
            console.log(data);
        })
    }

    return (
        <div className = {styles.voteContainer}>
            <header>
                <h1>
                    Perci Pereira
                </h1>
                <img className = {styles.flag}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>    
            </header>
            <section className = {styles.timing}>
                <div className = {styles.profile} >
                    <img src="https://www.camara.leg.br/imgproxy/qultjITRBjGmq0sdq6nQa_wdhgDJCgDjz1tzqcmqHp0/fill/750/500/no/1/aHR0cDovL3d3dy5jYW1hcmEubGVnLmJyL2ludGVybmV0L2JhbmNvaW1hZ2VtL2JhbmNvLzIwMTcvMTAvaW1nMjAxNzEwMjYxNDUyMzc1MzU1NzQ4LmpwZw.jpg"/> 
                </div>
                <span> 00:06:21 </span>
            </section>
            <main>
                <div className = {styles.infos}>
                    <h1>
                        Exp 5372 - Projeto de Lei do Executivo n° 1180/20
                    </h1>
                    <div>
                        <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/633/633991.svg?token=exp=1614827936~hmac=417c0f4e62ad5b575ddcf07fbeaca11f"/>
                            <p> 4 </p>
                        </span>
                        <span className = {styles.red}>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/633/633990.svg?token=exp=1614828047~hmac=18104d73022e58e4d63724f06591e257"/>
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
                            <img src="https://www.camara.leg.br/imgproxy/qultjITRBjGmq0sdq6nQa_wdhgDJCgDjz1tzqcmqHp0/fill/750/500/no/1/aHR0cDovL3d3dy5jYW1hcmEubGVnLmJyL2ludGVybmV0L2JhbmNvaW1hZ2VtL2JhbmNvLzIwMTcvMTAvaW1nMjAxNzEwMjYxNDUyMzc1MzU1NzQ4LmpwZw.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span>
                        <div className = {styles.profile}>
                            <img src="https://www.camara.leg.br/imgproxy/qultjITRBjGmq0sdq6nQa_wdhgDJCgDjz1tzqcmqHp0/fill/750/500/no/1/aHR0cDovL3d3dy5jYW1hcmEubGVnLmJyL2ludGVybmV0L2JhbmNvaW1hZ2VtL2JhbmNvLzIwMTcvMTAvaW1nMjAxNzEwMjYxNDUyMzc1MzU1NzQ4LmpwZw.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span className = {styles.agree}>
                        <div className = {styles.profile}>
                            <img src="https://www.camara.leg.br/imgproxy/qultjITRBjGmq0sdq6nQa_wdhgDJCgDjz1tzqcmqHp0/fill/750/500/no/1/aHR0cDovL3d3dy5jYW1hcmEubGVnLmJyL2ludGVybmV0L2JhbmNvaW1hZ2VtL2JhbmNvLzIwMTcvMTAvaW1nMjAxNzEwMjYxNDUyMzc1MzU1NzQ4LmpwZw.jpg"/>
                        </div>
                        <div>
                            <p> Julio Gupermann </p>
                            <img className = {styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PT_%28Brazil%29_logo.svg/1200px-PT_%28Brazil%29_logo.svg.png"/>
                        </div>
                    </span>
                    <span>
                        <div className = {styles.profile}>
                            <img src="https://www.camara.leg.br/imgproxy/qultjITRBjGmq0sdq6nQa_wdhgDJCgDjz1tzqcmqHp0/fill/750/500/no/1/aHR0cDovL3d3dy5jYW1hcmEubGVnLmJyL2ludGVybmV0L2JhbmNvaW1hZ2VtL2JhbmNvLzIwMTcvMTAvaW1nMjAxNzEwMjYxNDUyMzc1MzU1NzQ4LmpwZw.jpg"/>
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
