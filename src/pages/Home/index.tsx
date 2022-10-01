import { useState } from "react"

const Home = () => {

  const [quotations, setQuotations] = useState([
    {
      id: 10,
      name: "0x"
    },
    {
      id: 11,
      name: "1x"
    },
    {
      id: 12,
      name: "2x"
    },
    {
      id: 13,
      name: "3x"
    }
  ])

  const deleteItem = (idx: number) => {
    setQuotations(prevState => {
      const state = JSON.parse(JSON.stringify(prevState))
      state.splice(idx, 1)
      return state
    })
  }

  return (
    <div>
      Home page

      <div>
        {quotations.map((element, idx)=>{
          return (
            <div className="space-x-2">
              <span>{idx}:</span>
              <span>{element.id}</span>
              <span>{element.name}</span>
              <span>
                <input
                  value={element.id}
                />
              </span>
              <span>
                <button onClick={()=>deleteItem(idx)}>Delete</button>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home