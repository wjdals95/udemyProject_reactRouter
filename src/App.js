import { Route, Switch, Redirect } from "react-router-dom";
//Route: 특정 경로를 정의한 다음 URL에서 경로가 활성화될 때 로드되어야 하는
//리액트 컴포넌트를 정의하는 컴포넌트이다.

// Switch: 라우트 컴포넌트 주위에 래핑 될 수 있다.

// Redirect: 렌더링이 되면 그 이름이 의미하는 바를 실행하게 된다.
//사용자를 다른 곳으로 리디렉션 하는 것이다.
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            {/* 라우터는 위에서 아래로 읽는데 경로가 products로 시작해서 뒤에 다른 경로가
            붙으면 화면에 동시에 띄우는데 한 페이지만 송출하기 위해 Switch를 사용하는데
            Switch를 사용해도 url은 같지만 화면이 변하지않고 /products의 하면만
            송출하게 되는데 Switch는 경로 앞이 똑같은것을 읽으면 거기서 종료되므로
            그 화면만 계속 송출하게 되는건데 이를 막기위해 순서를 바꾸거나, exact prop을 
            사용하여 정확히 경로가 같은것을 송출하게 할 수 있다. */}
            <Products />
          </Route>
          <Route path="/products/:productId">
            {/* : 동적 경로 세그먼트로 이 페이지가 로드되어야 하는 전체 경로는 
          다음과 같을 것이라고 리액트 라우터에 알려주는 것이다. */}
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// 리액트 라우터
// my-domain.com/welcome ==> Welcome Component
// my-domain.com/products ==> Products Component
// my-domain.com/product-detail/anything
