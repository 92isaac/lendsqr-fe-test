import { Routes, Route } from 'react-router-dom'
import ShareLayout from './components/sharedlayouts/ShareLayout';
import Login from './routes/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<ShareLayout />}>
      </Route>
    </Routes>
    </>
  )
}

export default App
