function Dropdown(props) {
  if (props.equipments) {
    return (
      <div>
        {props.equipments.map((equipment, index) => (
          <p key={index}>{equipment}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.description}</p>
      </div>
    );
  }
}

export default Dropdown;
