import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreComponents  from './components/CoreComponents.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from './data.js';




function App() {
  const [content , setContent] = useState(null)
  function handleSubmit(selectedButton){
    setContent(selectedButton)
    
  }
  return (
    <div>
      <Header />
      
      <main>
      <section id='core-concepts'>
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreComponents {...conceptItem} />)}
          {/* <CoreComponents title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreComponents title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreComponents title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/> */}
          {/* if the data has the same key as the props name we can use the following syntax to instead of the above code. */}
          {/* <CoreComponents {...CORE_CONCEPTS[3]} />     */}
        </ul>
        
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButtons isSelected={content === 'components'} onSubmit={() => handleSubmit('components')}>Components</TabButtons>
          <TabButtons isSelected={content === 'jsx'} onSubmit={() => handleSubmit('jsx')}>JSX</TabButtons>
          <TabButtons isSelected={content === 'props'} onSubmit={() => handleSubmit('props')}>Props</TabButtons>
          <TabButtons isSelected={content === 'state'} onSubmit={() => handleSubmit('state')}>States</TabButtons>

        </menu>
        {!content ? (<p>Please select a topic</p>) : (<div id='tab-content'>
          <h3>{EXAMPLES[content].title}</h3>
          <p>{EXAMPLES[content].description}</p>
          <pre>
            <code>{EXAMPLES[content].code}</code>
          </pre>
        </div>)}
        
      </section>
      </main>
      
    </div>
  );
}

export default App;
