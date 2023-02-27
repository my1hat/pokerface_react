function Section(props) {
  return (
    <section className={props.addClass} id={props.id}>
      {props.children}
    </section>
  );
}
export default Section;
