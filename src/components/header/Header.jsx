import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <Image
          src={'/public/next.svg'}
          alt='aaa'
          width={50}
          height={50}
        ></Image>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about-us'>About Us</Link>
        </nav>
        https://youtu.be/KjY94sAKLlw?t=8999
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    </header>
  );
};
export default Header;
