import '../styles/components.App.css'
import TreeView from './TreeView'
import Card from './Card'
import mods from '../data/mods.json'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <TreeView />
      <div className="cards">
        {mods.map(mod => (
          <Card key={mod.name} {...mod} />
        ))}
      </div>
    </>
  )
}

export default App
