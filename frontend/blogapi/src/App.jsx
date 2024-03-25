import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe-detail" element={<RecipeDetail />} /> {/* 添加新路径 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


