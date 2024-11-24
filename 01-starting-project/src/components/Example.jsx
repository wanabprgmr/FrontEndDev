
import { useState } from 'react';
import TabButtons from './TabButtons.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Example(){
    
  const [content , setContent] = useState('components')
  function handleSubmit(selectedButton){
    setContent(selectedButton)
    
  }
    return (
        
      <Section id='examples' sectionHeader='Examples' >
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
      
    </Section>
    )
}