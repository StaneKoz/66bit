import { createBrowserRouter } from "react-router-dom";
import NewsPage from "../components/news_page/NewsPage";
import ErrorPage from "../components/error_page/ErrorPage";
import Root from "../components/root/Root";
import ChoiceThemePage from "../components/choice_theme_page/ChoiceThemePage";

export const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      index: true,
      element: <NewsPage/>,
    },
    {
      path: '/choiceTheme',
      element: <ChoiceThemePage/>
    }
  ]
}])