import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }) => {
  return (
    <div className='home_body'>
      {data.map((ev) => (
        <Link className='card' key={ev.id} href={`events/${ev.id}`}>
          <div className='image'>
            <Image src={ev.image} alt={ev.title} width={500} height={350} />
          </div>
          <div className='content'>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default HomePage;
