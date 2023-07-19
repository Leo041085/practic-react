import css from './Section.module.css';

const Section = ({ children, title }) => {
  // console.log(children);
  return (
    <section className={title ? css.baseSection : css.superSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
