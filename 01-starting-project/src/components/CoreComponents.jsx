export default function CoreComponents({image, title, description}){
    return(
      <div>
        <img src={image} alt={title}  />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }