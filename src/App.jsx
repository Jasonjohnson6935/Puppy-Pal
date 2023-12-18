import './App.css'
import './index.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {
  // State variable to store the list of puppies
  const [puppies, setPuppies] = useState(puppyList)

  // State variable to store the ID of the selected puppy
  const [featPupId, setFeatPupId] = useState(null)

  // Find the featured puppy with a matching ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId)

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

      {/* Conditionally render the details about the featured puppy if featPupId is not null */}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            {/* Add more details as needed */}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App