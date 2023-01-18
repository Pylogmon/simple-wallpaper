import { Navigate } from 'react-router-dom'
import Base from './base'

const routes = [
    {
        path: "/base",
        element: <Base />,
    },
    {
        path: "/app",
        element: <Base />,
    },
    {
        path: "/",
        element: <Navigate to='/base' />
    }
]
export const list = [
    {
        path: "/base",
        label: '基础'
    },
    {
        path: "/app",
        label: "应用设置"
    }
]
export default routes