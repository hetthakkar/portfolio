import { IBaseProps } from '../common/interfaces'
import { TextContainer } from '../components/TextContainer'
import { NextPage } from 'next'
import { Container } from '../components/Container'
import Image from 'next/image'

import RaxLogo from '../public/raxter.svg'
import ISROLogo from '../public/isro.png'
import MetaLogo from '../public/meta.png';

const Sep = <span className='-mt-2.5 hidden sm:block'>|</span>;

const Work: NextPage<IBaseProps> = (props: IBaseProps) => {

  return (
    <Container
      head={{
        title: `Work | Het Thakkar`,
        description: `Places where Het Thakkar has worked including the job responsibilities, achievements and positions`,
      }}
    >
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Work Experience
      </div>

      <TextContainer className='mb-8'>
      <div className='card-title flex flex-col sm:flex-row sm:items-center'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://about.facebook.com/'
            className='link -ml-2.5'
          >
            <Image src={MetaLogo} width={105} height={30} alt='Meta Platforms Inc.' />
          </a>
          {Sep}
          <span className='font-medium -mt-1.5 sm:ml-2'>Front End Engineer Intern</span>{' '}
        </div>
        <div className='card-subtitle'>May 2022 - August - 2022 | <i>New York, US</i></div>
        <div className='card-text mt-4'>
          <ul className='list-disc'>
            <li>
            Designed and developed GUI interfaces to manage capacity resulting in faster configuration and deployment times for storage and other virtual resources
            </li>
            <li>
            Designed GraphQL schema to model dynamic metadata and permissions for virtual resources and implemented resolvers in Hack(PHP)
            </li>
            
          </ul>
        </div>
      </TextContainer>

      <TextContainer className='mb-8'>
        <div className='card-title flex flex-col sm:flex-row sm:items-center'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://raxter.io'
            className='link mr-2'
          >
            <Image src={RaxLogo} alt='RAx Labs Inc.' />
          </a>
          {Sep}
          <span className='font-medium -mt-1.5 sm:ml-2'>Software Development Engineer</span>{' '}
        </div>
        <div className='card-subtitle'>October 2020 - July 2021 | <i>Remote(India)</i></div>
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

      <TextContainer className='mb-8'>
      <div className='card-title flex flex-col sm:flex-row sm:items-center'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://raxter.io'
            className='link mr-2'
          >
            <Image src={RaxLogo} alt='RAx Labs Inc.' />
          </a>
          {Sep}
          <span className='font-medium -mt-1.5 sm:ml-2'>Software Development Engineer Intern</span>{' '}
        </div>
        <div className='card-subtitle'>August 2020 - October 2020 | <i>Remote(India)</i></div>
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

      <TextContainer className='mb-8'>
        <div className='card-title flex flex-col sm:flex-row sm:items-center'>
        <a
            target='_blank'
            rel='noreferrer'
            href='https://www.isro.gov.in/about-isro/space-applications-centre-sac'
            className='link mr-2'
          >
            <Image
              src={ISROLogo}
              alt="Indian Space Research Organization"
              width={60}
              height={50}
            />
          </a>
          {Sep}
          <span className='font-medium sm:ml-2'>Summer Research Intern</span>
         
        </div>
        <div className='card-subtitle'>May 2019 - July 2019 | <i>Ahmedabad, India</i></div>
        <div className='card-text mt-4'>
          <ul className='list-disc'>
            <li>
              Parallelized hyper-spectral filter algorithms and implemented CPU
              and GPU parallel programs using OpenMP and CUDA toolkit
              respectively
            </li>
            <li>
              Improved program execution times by up to 1000x compared to the
              original implementation
            </li>
          </ul>
        </div>
      </TextContainer>
    </Container>
  )
}

export default Work
