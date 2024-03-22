// import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [buttonContent, setButtonContent] = useState('components');

  function handleSelect(selectedButton) {
    setButtonContent(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[buttonContent].title}</h3>
            <p>{EXAMPLES[buttonContent].description}</p>
            <pre>
              <code>
              {EXAMPLES[buttonContent].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
