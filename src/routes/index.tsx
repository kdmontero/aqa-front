import { Route, Routes } from "react-router-dom"

import { Home, Login } from "../pages"

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      >

      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  )
}

export default ProjectRoutes