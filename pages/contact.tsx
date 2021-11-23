import { NextPage } from 'next'
import { IBaseProps } from '../common/interfaces'
import { TextContainer } from '../components/TextContainer'
import axios from 'axios';
import { useState } from 'react';
import { Spinner } from '../components/Spinner';

const Contact: NextPage<IBaseProps> = (props: IBaseProps) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className='Contact'>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Contact
      </div>
      <TextContainer>
        <div>
          <form onSubmit={
            async (e) => {
              if(success) {
                return;
              }
              setLoading(true);
              e.preventDefault();
              try {
                await axios.post('/api/contact', {
                  name,
                  email,
                  message
                });
                setSuccess(true);
              } catch (error) {
                setSuccess(false);
                console.log(error);
              } finally {
                setLoading(false);
              }
            }
          }>
            <div className="flex flex-col">
              {/* <label htmlFor="name" className="card-text">Your name</label> */}
              <input type="text" id="name" required name="name" value={name} onChange={(e) => setName(e.target.value)} 
                className='w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2 mb-8'
                placeholder='Your name' />
               
              {/* <label htmlFor="email" className="card-text mt-6">Your email</label> */}
              <input type="email" required id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className='w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2 mb-8'
              placeholder='Your email' />
              {/* <label htmlFor="message" className="card-text mt-6">Your message</label> */}
              <textarea id="message" required name="message" value={message} onChange={(e) => setMessage(e.target.value)}
              className='w-full bg-grayBg shadow-md border border-gray-300 text-gray-200 rounded-lg p-2'
              placeholder='Your message' />
              <div className="w-full mt-8">
                {
                  loading ? <Spinner className="ml-2" /> : 
                  (success ? (
                    <div className=' text-gray-200 font-normal py-2 px-2'>
                    {
                      'Thank you for sending your message! I will get back to you as soon as possible'
                    }
                  </div>
                  ) : (
                    <button type="submit" className='bg-grayLight hover:bg-grayLighter  text-gray-200 font-medium py-2 px-4 rounded-lg transition transition-all'>
                    {
                      'Send'
                    }
                  </button>
                  ))
                }


              </div>
            </div>

          </form>
        </div>
      </TextContainer>

    </div>
  )
}

export default Contact