import { Route } from "react-router-dom";
//Route: 특정 경로를 정의한 다음 URL에서 경로가 활성화될 때 로드되어야 하는
//리액트 컴포넌트를 정의하는 컴포넌트이다.

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

// 리액트 라우터
// my-domain.com/ ==> Component A
// my-domain.com/products ==> Component B
