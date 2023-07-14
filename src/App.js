import Menu from './Menu';
import Planner from './Planner';
import List from './List';
import './App.css';

function App() {
  return (
    <div>
      <table>
        <tr>
          <th>
            <h1>Menu</h1>
          </th>
          <th>
            <h1>Planner</h1>
          </th>
          <th>
            <h1>List</h1>
          </th>         
        </tr>
        <tr>
          <th>
            <Menu />
          </th>
          <th>
            <Planner />
          </th>
          <th>
            <List />
          </th>
        </tr>
      </table>
    </div>
  );
}

export default App;
