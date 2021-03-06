import { NextPage } from 'next'
import { IBaseProps } from '../common/interfaces'
import { Container } from '../components/Container'
import { TextContainer } from '../components/TextContainer'

const Education: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container head={{
      title: 'Education | Het Thakkar',
      description: 'List of educational institutions attended and degrees earned by Het Thakkar', 
    }}>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Education
      </div>
      <TextContainer>
        <div className='mb-4'>
          <div className='card-title'>
            Masters in Computer Science at{' '}
            <a
              className='font-semibold italic link'
              target='_blank'
              rel='noreferrer'
              href='https://ncsu.edu'
            >
              North Carolina State University
            </a>
          </div>
          <div className='card-subtitle'>August 2021 - May 2023</div>
        </div>
        <div>
          <div className="card-text">
          Select coursework: Software Engineering, Design and Analysis of Algorithms, Database Management Systems
          </div>
        </div>
      </TextContainer>
      <TextContainer className="mt-8 mb-8">
        <div className='mb-4'>
          <div className='card-title'>
            Bachelor of Technology in Information and Communication Technology at{' '}
            <a
              className='font-semibold italic link'
              target='_blank'
              rel='noreferrer'
              href='https://daiict.ac.in'
            >
              DA-IICT
            </a>
          </div>
          <div className='card-subtitle'>August 2016 - May 2020</div>
        </div>
        <div>
          <div className="card-text">
          Select coursework: Machine learning for data mining, High-Performance Computing, Modeling and Simulation, Quantum 
Computation, Digital Signal Processing
          </div>
        </div>
      </TextContainer>
    </Container>
  )
}

export default Education
