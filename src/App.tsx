import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login';
import { ShareLayout } from './components';
import { UserDetail, Users } from './routes';
import { useEffect, useState } from 'react';
import Loading from './helpers/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
    {isLoading ? (<Loading />) : (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<ShareLayout />}>
        <Route path='/dashboard/users' element={<Users />} />
        <Route path='/dashboard/users/:userId' element={<UserDetail />} />
      </Route>
    </Routes>

    )}
    </>
  )
}

export default App
