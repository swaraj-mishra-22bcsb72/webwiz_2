import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Article from '../components/Article/article';
import CategoryList from '../pages/CategoryList';
import EditPage from '../pages/EditPage';
import HistoryPage from '../pages/HistoryPage';
import TalkPage from '../pages/TalkPage';
import ListAllArticles from '../pages/ListAllArticles.jsx'; // Adjust the path if needed

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/article/:title" element={<Article />} />
      <Route path="/category/:name" element={<CategoryList />} />
      <Route path="/edit/:title" element={<EditPage />} />
      <Route path="/history/:title" element={<HistoryPage />} />
      <Route path="/talk/:title" element={<TalkPage />} />
      <Route path="/articles" element={<ListAllArticles />} />
    </Routes>
  );
};

export default AppRoutes; 