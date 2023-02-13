import styles from './user.module.scss';

/* eslint-disable-next-line */
export interface UserProps {
  username: String,
  password: String,
  token: String
}

export const UserList: UserProps[] = [
  {
    username: 'alex',
    password: '1234',
    token: ''
  },
  {
    username: 'max',
    password: '1234',
    token: ''
  },
];

export const UserPage = (props: UserProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to User {props.username}!</h1>
    </div>
  );
}

// export default UserPage;



