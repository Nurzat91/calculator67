import Calculator from './containers/Calculator/Calculator';
import {Route, Routes} from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={(<Calculator/>)}/>
        <Route path="*" element={(<ErrorPage/>)}/>
      </Routes>
    </div>
  )
}

export default App
