import React, { useState } from "react";

function Collapsible(props) {
  const [open, setOPen] = useState(false);
  // info: open est une variable d'état et setOpen est une function pour maj l'état de open. Equivalent de open = ref("false") et setOpen = computed(() => open.value = "true") en vue.js

  const arrowDirection = () => {
    return open ? (
      <div className="collapsible__arrow collapsible__arrow--open"></div>
    ) : (
      <div className="collapsible__arrow collapsible__arrow--close"></div>
    );
  };

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className={`collapsible ${props.halfCollapsible}`}>
      <button className="collapsible__button" onClick={toggle}>
        <div className="collapsible__title">{props.title}</div>
        {arrowDirection()}
      </button>
      {/*info: {open && <div>{props.children}</div>} (jsx) === {open ? <div>{props.children}</div> : null} (js) */}
      {open && <div className="collapsible__content">{props.children}</div>}
    </div>
  );
}

export default Collapsible;
