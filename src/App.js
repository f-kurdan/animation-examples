import Container from './main/container/container';
import SettingsPanel from './main/settings-panel/settings-panel';
import TopPanel from './top-panel/top-panel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopPanel />
      </header>
      <main>
        <Container />
        <SettingsPanel />
      </main>
    </div>
  );
}

export default App;
