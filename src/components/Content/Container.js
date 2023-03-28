import styles from './Container.module.scss';

function Container(props) {
  return (
    <div className={`${styles.container} container`}>{props.children}</div>
  );
}
export default Container;
