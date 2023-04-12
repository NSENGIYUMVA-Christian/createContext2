import { useAppContext } from "./Navbar"


const UserContainer = () => {
   const {user,logout} = useAppContext()
  return (
   <div className="user-container">
{user ? <>
{/* on the following line, we have to check first if the user exist to avoid an error */}
    <p>hello there, {user?.name}</p>
    <button className="btn" onClick={logout} >Logout</button>
</> : <p>please login</p>}
   </div>
  )
}

export default UserContainer