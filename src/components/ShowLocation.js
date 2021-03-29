
// how to destructure here
export default function ShowLocation(props){
  return(
    <div>
      <img className="show-img" alt='location' src={props.data.image_url} /> 
      <h2>{props.data.name}</h2>
      <ul>
        <li>Address: {props.data.image_url}</li>
        <li>Phone: {props.data.phone_num}</li>
        <li>Category: {props.data.categories}</li>
        <li>Rating: {props.data.rating}/5</li>
      </ul>
    </div>
  )
}