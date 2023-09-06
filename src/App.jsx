import { useState, useEffect } from 'react'
import { fetchDataFromApi } from "./Utils/api"
function App() {

  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = () => {
    fetchDataFromApi("/tv/popular").then((res) => {
      console.log(res.results);
    })
  }

  return (
    <>
      <div className='app'>App</div>

    </>
  )
}

export default App
