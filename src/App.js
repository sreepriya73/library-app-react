import logo from './logo.svg';
import './App.css';
import AddBook from './component/AddBook';
import SearchBook from './component/SearchBook';
import DeleteBook from './component/DeleteBook';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
    </div>
  );
}

export default App;
