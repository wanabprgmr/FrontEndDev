
import {CORE_CONCEPTS} from '../data.js'
import CoreComponents  from './CoreComponents.jsx';


export default function CoreConcepts(){
    return (
        
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
    )
}