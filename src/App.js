import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
