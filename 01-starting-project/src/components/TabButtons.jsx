export default function TabButtons({children, onSubmit, isSelected}){
    function handleClick(){
        console.log("i was clicked");
        
    }
    return(
        <li><button className={isSelected ? 'active' : null} onClick={onSubmit}>{children}</button></li>
    )
}