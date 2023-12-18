import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  // State variable to store the list of puppies
  const [puppies, setPuppies] = useState(puppyList)

  // State variable to store the ID of the selected puppy
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList)

  return (
    <div className="App">
      {puppies.map((puppy) => (
        // Set a unique key for each paragraph using puppy.id
        <p
          key={puppy.id}
          // onClick handler that calls setFeatPupId with puppy.id
          onClick={() => {
            setFeatPupId(puppy.id)
          }}
        >
          {puppy.name}
        </p>
      ))}

      {/* Conditionally render the <p> tag if featPupId is not null */}
      {featPupId && <p>{featPupId}</p>}
    </div>
  )
}

export default App