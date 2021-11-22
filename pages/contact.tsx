import { IBaseProps } from '../common/interfaces'
import { NavBar } from '../components/Navbar'

const Contact: React.FC<IBaseProps> = (props: IBaseProps) => {
  return (
    <div className='Contact'>
      <NavBar firstName={props.firstName} lastName={props.lastName} />
    </div>
  )
}

export default Contact