import { IBaseProps } from '../common/interfaces'
import { TextContainer } from '../components/TextContainer'
import { motion } from 'framer-motion'

const Work: React.FC<IBaseProps> = (props: IBaseProps) => {
  return (
    <div className=''>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Work Experience
      </div>

      <TextContainer className='mb-8'>
        <div className='card-title'>
          <span className='font-medium'>Software Development Engineer - 1</span>{' '}
          at Macak Technologies
          <a target='_blank' rel='noreferrer' href='https://raxter.io'>
            (RAx Labs)
          </a>
        </div>
        <div className='card-text mt-4'>
          <ul className='list-disc'>
            <li>
              Worked on the front-end and back-end development of RAx(research
              assistant) web application{' '}
            </li>
            <li>
              Designed and implemented a flexible and robust subscription system
              using Stripe
            </li>
            <li>
              Revamped back-end architecture from a monolithic API to
              microservice-based event-driven architecture. Using the serverless
              framework and AWS Lambda functions, improved API response times by
              up to 900%
            </li>
            <li>
              Deployed and monitored various services related to RAx on AWS
              including Lambda, SQS, EC2, S3, CloudFront, and RDS
            </li>
          </ul>
        </div>
      </TextContainer>

      <TextContainer>
        <div className='card-title'>
          <span className='font-medium'>
            Software Development Engineer - Intern
          </span>{' '}
          at Macak Technologies
          <a target='_blank' rel='noreferrer' href='https://raxter.io'>
            (RAx Labs)
          </a>
        </div>
        <div className='card-text mt-4'>
          <ul className='list-disc'>
            <li>
              Revamped user on-boarding flow to allow users and improved
              sign-ups by 100%
            </li>
            <li>
              Identified and fixed security vulnerabilities in the backend
              system
            </li>
            <li>
              Developed fuzzy PDF searching algorithms for migrating user
              annotation from one PDF representation to another using Typescript
            </li>
          </ul>
        </div>
      </TextContainer>
    </div>
  )
}

export default Work