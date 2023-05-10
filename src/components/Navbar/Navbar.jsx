import React , {useContext} from 'react'
import { VotingContext } from '../../App'


const Navbar = () => {
  const {creator} = useContext(VotingContext)
  return (
    <div>Hello {creator}</div>
  )
}

export default Navbar