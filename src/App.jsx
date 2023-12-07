
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Head from './components/body/Head'

import MeetingDetails from './components/addMeeting/MeetingDetails'
import PhysicalMeeting from './components/addMeeting/PhysicalMeeting'
import EditPhysicalMeeting from './components/editMeeting/PhysicalMeeting'
import EditVirtualMeeting from './components/editMeeting/VertualMeeting'
import VirtualMeeting from './components/addMeeting/VirtualMeeting'

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
     path:'/',
     element:<Head/>,
     children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/virtualMeeting',
        element:<VirtualMeeting/>
      },
      {
        path:'/physicalMeeting',
        element:<PhysicalMeeting/>
      },
      {
        path:'/meetingDetails',
        element:<MeetingDetails/>
      },
      {
        path:'/editPhysicalMeeting/:id',
        element:<EditPhysicalMeeting/>
      },
      {
        path:'/editVirtualMeeting/:id',
        element:<EditVirtualMeeting/>
      }
     ]
    }
  ])
 
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
