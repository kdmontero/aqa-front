import { Route, Routes } from "react-router-dom"

import { Home, Login, Quotations } from "../pages"
import MainLayout from "../layout/MainLayout"

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quotations" element={<Quotations />} />
      </Route>
    </Routes>
  )
}

export default ProjectRoutes