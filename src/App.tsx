import { Routes, Route } from 'react-router-dom'
import ShareLayout from './components/sharedlayouts/ShareLayout';

function App() {
  return (
    <>
    <Routes>
      <Route path='/dashboard' element={<ShareLayout />}>

      </Route>
    </Routes>
    </>
  )
}

export default App
