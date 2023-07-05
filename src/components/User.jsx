
const User = ({user}) => {
    return <li>
               <p>
                   Name: {user.name}
               </p> 
               <p>Job: {String(user.hasJob)} 
               </p>
           </li>
}
export default User;

console.log(123);