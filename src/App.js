import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SingleUser from './components/SingleUser';
import Users from './components/Users';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Users></Users>
    },
    {
      path: '/user/:id',
      element:<SingleUser></SingleUser>,
      loader: async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      }
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
