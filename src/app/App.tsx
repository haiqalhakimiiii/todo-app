import './App.css'
import { useRoutes } from 'react-router-dom'
import { Todo } from './pages/Todo'

function App() {
    const routes = useRoutes([
        {
            index: true,
            element: <Todo />
        }
    ])

    return (
        <>
            <div>{routes}</div>
        </>
    )
}

export default App
