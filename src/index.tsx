import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Label from './routes/label';
import Home from './routes/statistics';
import Tally from './routes/tally';
import Tag from './components/label/TagEdit';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='tally' element={<Tally />}/>
        <Route path='tally/label' element={<Label />} />
        <Route path='tally/label/:id' element={<Tag />} />
        <Route
          path='*'
          element={
            <main>
              <h2>404!</h2>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
