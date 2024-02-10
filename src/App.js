import './App.css';
import SettingsPanel from './main/settings-panel/settings-panel';
import TopPanel from './top-panel/top-panel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopPanel />
      </header>
      <main>
        <SettingsPanel />
      </main>

    </div>
  );
}

export default App;
