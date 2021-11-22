import { IBaseProps } from '../common/interfaces'
import { NavBar } from '../components/Navbar'

const Projects: React.FC<IBaseProps> = (props: IBaseProps) => {
  return (
    <div className='projects'>
      <NavBar firstName={props.firstName} lastName={props.lastName} />
    </div>
  )
}

export default Projects