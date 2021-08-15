import "./Exercise.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Exercise(props) {
  return (
    <div class="cat">
      <img src={props.image} alt={props.name} />
      <div class="kittens">
        <h1>{props.name}</h1>
        <div class="icon">
          <h3>
            <PhoneIcon />
            {props.number}
          </h3>
        </div>
        <div class="icon">
          <h3>
            <EmailIcon />
            {props.email}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
