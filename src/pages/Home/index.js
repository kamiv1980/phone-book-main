import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to="/sign_in">Sign In</Link>
      <Link to="/sign_up">Sign Up</Link>
      <h1>HOME PAGE</h1>
    </div>
  );
};
