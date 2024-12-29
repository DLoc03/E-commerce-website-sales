import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrderPage from "../page/OrderPage/OrderPage";
import ProductPage from "../page/ProductPage/ProductPage";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage";
import ProductDetail from "../page/ProductDetail/ProductDetail";
import SigninPage from "../page/SigninPage/SigninPage";
import SignUpPage from "../page/SignupPage/SignUpPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/type",
    page: TypeProductPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/product-detail",
    page: ProductDetail,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/sign-in",
    page: SigninPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
