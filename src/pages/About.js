import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
function About() {
  return (
    <Card>
      <div>
        This app was created with create React app. It is a project from Udemy:
        React Front To Back 2022, by Traversy Media
      </div>
      <p>
        <Link to="/">Back to app</Link>
      </p>
    </Card>
  );
}

export default About;
