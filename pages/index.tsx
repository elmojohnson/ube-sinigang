import React from 'react'

const Home = () => {
  return (
    <div>
      {
        [...Array(50)].map((_, i) => {
          return <p key={i}>asdasdads</p>
        })
      }
    </div>
  )
}

export default Home