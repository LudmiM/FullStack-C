import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ListTaskView from './view/ListTaskView'
import AddTaskView from './view/AddTaskView'
import EditTaskView from './view/EditTaskView'
import DetailTaskView from './view/DetailTaskView'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />} >
                    <Route path='/' element={<ListTaskView />} index />
                    <Route path='/task/create' element={<AddTaskView />} />
                    <Route path= '/task/edit/:id' element= {<EditTaskView />}/>
                    <Route path= '/task/detail/:id' element= {<DetailTaskView />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}