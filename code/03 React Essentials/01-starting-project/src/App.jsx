import reactCoreImg from './assets/react-core-concepts.png';


const reactDescriptions = [
  'Fundamental',
  'Crucial',
  'Core',
]

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src={reactCoreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      {/* I had to change the number to 3 or else it was never displaying "core" */}
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
