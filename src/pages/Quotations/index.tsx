import { useState } from "react"
import { getAllQuotations } from "../../api/quotations"



const Quotations = () => {
  const [quotations, setQuotations] = useState([])

  const showAllQuotes = () => {
    getAllQuotations(
      // headers: 
    )
    .then(response=>{
      setQuotations(response.data.results)
      console.log(quotations)
      console.log(response)

    })
    .catch(error=>{
      console.log("error", error.response)
      console.log(quotations)

    })
  }
  return (
    <div>
      This is Quotations Page

      <button
        type="submit"
        onClick={(e)=>{
          e.preventDefault()
          showAllQuotes()
        }}
      >Show all quotations</button>
    </div>
  )
}

export default Quotations