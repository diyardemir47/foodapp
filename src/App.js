import './App.css';

import Details from './pages/details/Details';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './pages/home/Main';
import MainLayout from './layouts/MainLayout';

const routes =createBrowserRouter([

  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {path:'/',element:<Main/> },
      {path:'/tarifler',element:<Main/> },
      {path:'/create',element:<Create/> },
      {path:'/tarifler/:id',element:<Details/> }, 
      {path:'/search',element:<Search/> },
    ]
  }
  

  
]);


function App() {
  return (

<RouterProvider router={routes}>


</RouterProvider>

  );
}

export default App;
