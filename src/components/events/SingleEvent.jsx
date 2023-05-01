import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
//https://youtu.be/KjY94sAKLlw?t=15959
const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please insert a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/email_registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(response.status);
      const data = await response.json();

      console.log('POST', data);

      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (err) {
      console.log('ERROR:', err.message);
    }
  };

  return (
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description} </p>
      <form onSubmit={handleSubmit} className='email_registration'>
        <label>Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type='email'
          id='email'
          placeholder='Insert your email here.'
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
export default SingleEvent;
