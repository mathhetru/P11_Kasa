import { PropTypes } from "prop-types";

Banner.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string.isRequired,
};

function Banner(props) {
  return (
    <aside className="banner-background">
      {props.children}
      <div>
        <img src={props.img} alt="banner-background" className="banner-background__img" />
      </div>
    </aside>
  );
}

export default Banner;
