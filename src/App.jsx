import { BrowserRouter as Router } from 'react-router-dom';
import { RouterMain } from './routes/RouterMain';
import "./App.scss";
import { DefaultTemplate } from './components';

function App() {
  return (
    <Router>
      <DefaultTemplate>
        <RouterMain />
      </DefaultTemplate>
    </Router>
  );
}

export default App;