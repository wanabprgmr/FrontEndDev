export default function Section({sectionHeader, children ,...props}){
    return(
        <section {...props}>
            <h2>{sectionHeader}</h2>
            {children}
        </section>
    )
}