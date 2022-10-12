import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import Navbar from '../ui/components/Navbar'


const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='login' element={<LoginPage />} />

            <Route path='/*' element={<HeroesRoutes />} />


        </Routes>
    </div>
  )
}

export default AppRouter
