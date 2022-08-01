import AppRouter from './app-router/AppRouter';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App h-screen font-ffKanit ">
      <AuthContextProvider >
        <AppRouter />
        {/* <Deneme /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
