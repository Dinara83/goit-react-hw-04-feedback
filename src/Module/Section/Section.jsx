import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ children, title }) {
  return (
    <div className={css.block}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
}
Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};

export default Section;
