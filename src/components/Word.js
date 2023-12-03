import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { searchWord } from '../redux/actions/searchActions'
import Card from './Card'
import CircularProgress from '@mui/material/CircularProgress';



const Word = () => {
    const { word } = useParams()
    const result = useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchWord(word))
    }, [])
  
    
    if(result[0]=='error') return <p style={{textAlign:"center", margin:"2rem"}} >No result found</p>
    return (
        <div>
            {
                result.length == 0 ?
                    <CircularProgress />
                    :
                    result.map((result, i) => <Card key={i} result={result} />)

            }
        </div>
    )
}

export default Word