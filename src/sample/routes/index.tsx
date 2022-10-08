import { Route, Routes } from "react-router-dom"
import { Home, Login, Quotations } from "../../pages"
import MainLayout from "../layout/MainLayout"

const SampleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}  >
        <Route path="" element={<Home />} />
        <Route path="quotations" element={<Quotations />}/>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default SampleRoutes