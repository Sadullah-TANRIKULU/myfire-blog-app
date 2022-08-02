import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app-router/AppRouter';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';

function App() {
  return (
    <div className="App h-screen font-ffKanit ">
      <BrowserRouter >
        <AuthContextProvider >
          <BlogContextProvider >
            <AppRouter />
            {/* <Deneme /> */}
          </BlogContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
