import { useState } from 'react'
import data from '../utils/mockdata'
import Card from './Card'

const Body = () => {
  const [reslist, setreslist] = useState(data)

  return (
    <div className="body">
      {
        <button
          className="top-rated"
          onClick={function f() {
            const filtered = reslist.filter((res) => res.info.avgRating >= 4.5)
            console.log(filtered)
            setreslist(filtered)
          }}
        >
          filter
        </button>
      }
      <div className="card-container">
        {reslist.map((d) => (
          <Card resdata={d} key={d.info.id} />
        ))}
      </div>
    </div>
  )
}
export default Body
