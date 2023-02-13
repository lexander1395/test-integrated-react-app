import styles from './banner.module.scss';

/* eslint-disable-next-line */
export interface BannerProps {
  title: string;
}

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;
