import Image from 'next/image';
import Link from 'next/link';

import AllEvents from 'import/src/components/events/EventPage';

const EventPage = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import('../../data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
