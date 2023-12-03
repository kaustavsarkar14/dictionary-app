import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const History = () => {
    const historyWords = useSelector(state => state.historyReducers)
    console.log(historyWords)
    return (
        <div className='history' >
            <h3>Search History</h3>
            {
                historyWords.length != 0 &&
                <div className='history-words'>
                    {
                        historyWords.map((word, i) => <Link key={i} to={`/word/${word}`}>{word}</Link>)
                    }
                </div>
            }
        </div>
    )
}

export default History