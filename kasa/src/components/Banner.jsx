function Banner(props) {
  return (
    <aside>
      <h1>{props.sentence}</h1>
      <div>
        <img src={props.img} alt="banner-background" className="banner-background__img" />
      </div>
    </aside>
  );
}

export default Banner;
