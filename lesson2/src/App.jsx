import React from 'react'
import UserProfile from './components/UserProfile'
import MoviesList from './components/MoviesList'

const App = () => {
  return (
    <div className="App">
      <h2>Problem 1</h2>
      <UserProfile />
      <h2>Problem 2</h2>
      <MoviesList />
    </div>
  )
}

export default App