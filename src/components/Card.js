import React from 'react'

const Card = ({ result }) => {
    return (
        <div className='card' >
            <h3>{result.word}</h3>
            <p>{result.phonetic}</p>
            {
                result.phonetics.map((el,i)=> (
                    <div key={i}>
                        <audio controls>
                            <source src={el.audio} />
                            Your browser does not support the audio element.
                        </audio>
                        <p>{el.text}</p>
                    </div>
                ))
            }
            {
                result.meanings.map((el,i)=>(
                    <div key={i}>
                    <h4>{el.partOfSpeech}</h4>
                    {
                        el.definitions?.map((def,i)=><p key={i} >{def.definition}</p>)
                    }
                    </div>
                ))
            }
        </div>
    )
}

export default Card