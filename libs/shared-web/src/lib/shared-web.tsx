import styles from './shared-web.module.scss';

/* eslint-disable-next-line */
export interface SharedWebProps {}

export function SharedWeb(props: SharedWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedWeb!</h1>
    </div>
  );
}

export default SharedWeb;
