
// how to destructure here
//add functionality to add card from here
export default function ShowLocation(props){
  return(
    <div>
      <img className="show-img" alt='location' src={props.data.image_url} /> 
      <h2>{props.data.name}</h2>
      <ul>
        <li>Address: {props.data.address}</li>
        <li>Phone: {props.data.phone_num}</li>
        <li>Category: {props.data.categories}</li>
        <li>Rating: {props.data.rating}/5</li>
      </ul>
    </div>
  )
}