import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchWord } from '../redux/actions/searchActions'
import Card from './Card'
import { addToHistory } from '../redux/actions/historyActions'
import { LoadingButton } from '@mui/lab'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setLoading] = useState(false)
  const searchResult = useSelector(state => state.searchReducer)
  const dispatch = useDispatch()
  console.log(searchResult)

  useEffect(() => {
    setLoading(false)
  }, [searchResult])

  function handleClick() {
    setLoading(true)
    dispatch(searchWord(searchTerm))
    dispatch(addToHistory(searchTerm))
  }
  console.log(searchResult)
  return (
    <>
      <div className='input-box'>
        <TextField id="outlined-basic" variant="outlined" placeholder='seach a word...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <LoadingButton
        size="large"
        onClick={handleClick}
        loading={isLoading}
        variant="contained"
      >
        <span>Search</span>
      </LoadingButton>
      </div>
      <div className="result">

        {
          searchResult[0]=='error'?
          <p style={{textAlign:"center"}}>Sorry, no result found.</p>
          :
          searchResult.map((result, i) => <Card key={i} result={result} />)
        }

      </div>
    </>
  )
}

export default Home