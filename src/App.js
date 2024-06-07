import logo from './logo.svg';
import './App.css';
import AddBook from './component/AddBook';
import SearchBook from './component/SearchBook';
import DeleteBook from './component/DeleteBook';
import ViewBook from './component/ViewBook';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
      <ViewBook/>
    </div>
  );
}

export default App;
