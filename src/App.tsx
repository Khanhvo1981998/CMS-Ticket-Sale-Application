import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouteType } from './Interfaces/Interface';
import { userRoutes } from './routes/userRoute';




function App() {
  return (
    <BrowserRouter >

      <Routes>
        {userRoutes.map((route:RouteType, index:number) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
