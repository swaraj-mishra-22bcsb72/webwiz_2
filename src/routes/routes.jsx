import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Article from '../components/Article/article';
import CategoryList from '../pages/CategoryList';
import EditPage from '../pages/EditPage';
import HistoryPage from '../pages/HistoryPage';
import TalkPage from '../pages/TalkPage';
import ListAllArticles from '../pages/ListAllArticles.jsx'; // Adjust the path if needed
import BookmarksPage from '../pages/Bookmarks.jsx';
import ExploreByCuriosity from '../pages/ExploreByCuriosity.jsx'

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/article/:title" element={<Article />} />
      <Route path="/category/:name" element={<CategoryList />} />
      <Route path="/edit/:title" element={<EditPage />} />
      <Route path="/history/" element={<HistoryPage />} />
      <Route path="/talks/" element={<TalkPage />} />
      <Route path="/articles" element={<ListAllArticles />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path='/explore' element={<ExploreByCuriosity/>} /> 
    </Routes>
  );
};

export default AppRoutes; 