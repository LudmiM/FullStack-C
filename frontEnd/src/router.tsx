import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ListTaskView from './view/ListTaskView'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />} >
                    <Route path='/' element={<ListTaskView />} index />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}