import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app-router/AppRouter';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App h-screen font-ffKanit ">
      <BrowserRouter >
        <AuthContextProvider >
          <AppRouter />
          {/* <Deneme /> */}
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
