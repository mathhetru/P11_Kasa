function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map((tag, index) => (
        <p className="tag" key={index}>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
