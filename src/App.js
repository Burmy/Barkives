import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import AuthProvider from './utils/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<Landing />} /> {/* Redirect unknown routes */}
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
