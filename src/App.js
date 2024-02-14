import './App.css';
import Constainer from './main/canvas/constainer';
import SettingsPanel from './main/settings-panel/settings-panel';
import TopPanel from './top-panel/top-panel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopPanel />
      </header>
      <main>
        <Constainer />
        <SettingsPanel />
      </main>

    </div>
  );
}

export default App;
