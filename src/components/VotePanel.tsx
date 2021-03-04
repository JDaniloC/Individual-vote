import axios from 'axios';
import { FormEvent } from 'react';
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
        <div className = {styles.profileContainer}>
            <button type = 'button' onClick = {handleVote}>
                Clique em mim!
            </button>
        </div>
    );
}
