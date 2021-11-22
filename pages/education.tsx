import { IBaseProps } from '../common/interfaces'
import { NavBar } from '../components/Navbar'

const Education: React.FC<IBaseProps> = (props: IBaseProps) => {
  return (
    <div className='Education'>
      <NavBar firstName={props.firstName} lastName={props.lastName} />
    </div>
  )
}

export default Education