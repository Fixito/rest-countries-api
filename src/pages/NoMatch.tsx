import { Link } from 'react-router';

export default function NoMatch() {
  return (
    <main>
      <div>
        <p>404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div>
          <Link to='/'>Go back home</Link>
        </div>
      </div>
    </main>
  );
}
