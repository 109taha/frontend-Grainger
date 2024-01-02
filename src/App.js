import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/Singup';
import ALLProductCatogiries from './Pages/ALLProductCatogiries';
import EmptyCart from './Pages/EmptyCart';
import Help from './Pages/Help'
import MainCategories from './Pages/MainCategories';
import SubCategories from './Pages/SubCategories';
import LastCategori from './Pages/LastCategori';
import ProductDescription from './Pages/ProductDescription';
import ProductBuying from './Pages/ProductBuying';
import InsertUrl from './Pages/InsertUrl';
import UrlPage from './Pages/UrlPage';
import Register from './Pages/Register';
import SearchProduct from './Pages/SearchProduct';
import AllProductBtn from './Components/AllProductBtn';
import Footer from './Components/Footer';
import ReplacementPartsSearch from './Pages/ReplacementPartsSearch';
import CatalogPage from './Pages/CatalogPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Catalog' element={<CatalogPage/>}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/CartPage' element={<EmptyCart />}></Route>
        <Route path='/AllProductCategories' element={<ALLProductCatogiries />}></Route>
        <Route path='/search/:query' element={<SearchProduct />}></Route>
        <Route path='/Help' element={<Help />}></Route>
        <Route path='/product/:id' element={<MainCategories />}></Route>
        {/* <Route path='/' element={<SubCategories />}></Route> */}
        <Route path='/LastCategori' element={<LastCategori />}></Route>
        <Route path='/productDescription/:id' element={<ProductDescription />}></Route>
        <Route path='/ProductBuying/:id' element={<ProductBuying />}></Route>
        <Route path='/InsertUrl' element={<InsertUrl />}></Route>
        <Route path='/UrlPage' element={<AllProductBtn />}></Route>
        <Route path='/search/parts/:query' element={<ReplacementPartsSearch />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
