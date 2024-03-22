// import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [buttonContent, setButtonContent] = useState('');

  function handleSelect(selectedButton) {
    setButtonContent(selectedButton);
  }

  // let tabContent = <p>Please select a topic.</p>;   
  // ---this is the alternative conditional rendering if you don't want to use the && operator,
  // ---but it's not as clean as the && operator in this case and you would need to inject {buttonContent} 
  // ---where the current structure is in the return statement

  // if (buttonContent)  {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[buttonContent].title}</h3>
  //       <p>{EXAMPLES[buttonContent].description}</p>
  //       <pre>
  //         <code>
  //           {EXAMPLES[buttonContent].code}
  //         </code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">  
        <h2>Core Concepts</h2>
        
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          {/* <CoreConcept 
            {...CORE_CONCEPTS[0]}/>
            {/* title: {CORE_CONCEPTS[0].title}
            description: {CORE_CONCEPTS[0].description}
            image: {CORE_CONCEPTS[0].image}
            this is the same, but with the spread operator for destructuring */}
          {/* <CoreConcept 
            />
          <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
          <CoreConcept 
            {...CORE_CONCEPTS[3]}/>  */}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={buttonContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={buttonContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={buttonContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={buttonContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
            {!buttonContent && <p>Please select a topic.</p>}
            {buttonContent && <div id="tab-content">
            <h3>{EXAMPLES[buttonContent].title}</h3>
            <p>{EXAMPLES[buttonContent].description}</p>
            <pre>
              <code>
              {EXAMPLES[buttonContent].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
