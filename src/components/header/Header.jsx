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
      <p className='title'>Lorem ipsum dolor sit amet consectetur.</p>
    </header>
  );
};
export default Header;
