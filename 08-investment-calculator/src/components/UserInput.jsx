import { useState } from "react"

export default function UserInput({userInputObject, onChange}){
    

    return(
        <section id="user-input">
            <div className="input-group"> 
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                    required 
                    value={userInputObject.initialInvestment} 
                        onChange={(event) => onChange("initialInvestment", event.target.value )}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value={userInputObject.annualInvestment} 
                    onChange={(event) => onChange("annualInvestment", event.target.value )}/>
                </p>
            </div>
            <div className="input-group"> 
                <p>
                    <label>Expected Return</label>                    
                    <input type="number" required
                    value={userInputObject.expectedReturn} 
                    onChange={(event) => onChange("expectedReturn", event.target.value )}/>
                </p>
                <p>
                    <label>Duration</label>                    
                    <input type="number" required
                    value={userInputObject.duration} 
                    onChange={(event) => onChange("duration", event.target.value )}/>
                </p>
            </div>
        </section>
    )
}