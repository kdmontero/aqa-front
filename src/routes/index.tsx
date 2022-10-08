import { Route, Routes } from "react-router-dom"

import { Home, Login, Quotations } from "../pages"

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/quotations"
        element={<Quotations />}
      />


      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  )
}

export default ProjectRoutes