import "./CarousalCard.css";

export function CarousalCard(props) {
  return (
        <div className={(props.selected)?"CarousalCardSelected":"CarousalCard"}>
          <div className="CardTopBar"></div>
          <div className="CarousalContent">
            <h1 className="CardTitle">{props.props.title}</h1>
            <img src={props.props.image} className="CardImage" />
            <p className="CardText">
             {props.props.content}
            </p>
          </div>
        </div>
  );
}
