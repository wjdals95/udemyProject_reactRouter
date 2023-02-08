import { Route } from "react-router-dom";
//Route: 특정 경로를 정의한 다음 URL에서 경로가 활성화될 때 로드되어야 하는
//리액트 컴포넌트를 정의하는 컴포넌트이다.

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

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
        <Route path="/product-detail/:productId">
          {/* : 동적 경로 세그먼트로 이 페이지가 로드되어야 하는 전체 경로는 
          다음과 같을 것이라고 리액트 라우터에 알려주는 것이다. */}
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

// 리액트 라우터
// my-domain.com/welcome ==> Welcome Component
// my-domain.com/products ==> Products Component
// my-domain.com/product-detail/anything
