import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />} >

                </Route>
            </Routes>
        </BrowserRouter>
    )
}