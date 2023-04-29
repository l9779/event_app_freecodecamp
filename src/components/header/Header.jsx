import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <div>LOGO</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/events'>Events</Link>
            </li>
            <li>
              <Link href='/about-us'>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    </header>
  );
};
export default Header;
