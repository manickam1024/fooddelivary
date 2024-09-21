import { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './Shimmer'

const Body = () => {
  const [reslist, setreslist] = useState([]) //soo here we was passing our mock data to the reslist as inital state soo if i click on the button the reslist is filterd and  at card-container  the resslist var is used
  const [filterd, setfilterd] = useState([])

  const [v, setv] = useState('')
  console.log(v)

  useEffect(() => {
    after()
  }, [])

  async function after() {
    const newdata = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await newdata.json()

    setreslist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setfilterd(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  if (!reslist.length) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <button
        className=" top-rated"
        onClick={function f() {
          const filtered = reslist.filter((res) => res.info.avgRating >= 4.5)
          setfilterd(filtered)
        }}
      >
        filter
      </button>
      <div className="search-filter">
        <input
          type="text"
          className="search"
          value={v}
          onChange={(x) => setv(x.target.value)}
        />
        <button
          className="filter"
          onClick={() => {
            const result = reslist.filter((res) =>
              res.info.name.toLowerCase().includes(v.toLowerCase())
            )

            setfilterd(result)
          }}
        >
          search
        </button>
      </div>

      <div className="card-container">
        {filterd.map((d) => (
          <Card resdata={d} key={d.info.id} />
        ))}
      </div>
    </div>
  )
}
export default Body
