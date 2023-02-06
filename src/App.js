import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInput, userInputs } from './components/formsource';
import Home from './pages/home/Home';
import List from './pages/list/list';
import Login from './pages/login/login';
import New from './pages/new/new';
import Single from './pages/single/single';

function App() {
  return (
    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInput} title="Add new Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
