import { Route, Routes } from "react-router-dom"

import { Home, Login, Quotations } from "../pages"
import { Navbar } from "../components"

const ProjectRoutes = () => {
  const completePage = (page: JSX.Element) => {
    return(
      <div>
        <Navbar/>
        {page}
      </div>
    )
  }

  return (
    <Routes>
      <Route
        path="/"
        element={completePage(<Home />)}
      />

      <Route
        path="/quotations"

        element={completePage(<Quotations />)}
      />


      <Route
        path="/login"
        element={completePage(<Login />)}
      />
    </Routes>
  )
}

export default ProjectRoutes