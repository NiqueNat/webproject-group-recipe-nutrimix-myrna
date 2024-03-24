import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './page/RecipeDetail' // 导入 RecipeDetail 组件

<Routes>
  <Route index element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/recipe-detail" element={<RecipeDetail />} /> {/* 添加新路径 */}
</Routes>


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

