import logo from "./logo.svg";

function Card() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    },
    {
      title: "McCartney",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.",
    },
  ];
  const listItems = celebrities.map((element) => {
    return (
      <div className="card m-5" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src={element.imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.description}</p>
          <a href={element.buttonUrl} className="btn btn-primary">
            {element.buttonLabel}
          </a>
        </div>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default Card;
