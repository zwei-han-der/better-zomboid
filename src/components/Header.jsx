import "../styles/components.Header.css";

function Header() {
  
  
  return (
    <header>
    <div class="logo-container">
      <img class="logo-icon" src="./src/assets/icons/" alt="Better Zomboid Logo" />
      <h1>Better Zomboid [Desatualizado]</h1>
    </div>
    <div class="theme-controller">
      <button class="theme-button" id="theme-button" aria-label="Toggle theme">
        botao de tema
      </button>
    </div>
    </header>
  )
}

export default Header;
