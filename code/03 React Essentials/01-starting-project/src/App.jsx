import reactCoreImg from './assets/react-core-concepts.png';
// import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

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

// function CoreConcept(coreValues) { ----same as the code below but with destructuring
//   return (
//     <li>
//       <img src={coreValues.image} alt={coreValues.title} />
//       <h3>{coreValues.title}</h3>
//       <p>{coreValues.description}</p>
//     </li>
//   );
// } 

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">  
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            {...CORE_CONCEPTS[0]}/>
            {/* title: {CORE_CONCEPTS[0].title}
            description: {CORE_CONCEPTS[0].description}
            image: {CORE_CONCEPTS[0].image}
            this is the same, but with the spread operator for destructuring */}
          <CoreConcept 
            {...CORE_CONCEPTS[1]}/>
          <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
          <CoreConcept 
            {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
