import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 注意此处的更改 */}
        <Route path="/home" element={<Home />} />
        <Route path="/recipedetail" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



