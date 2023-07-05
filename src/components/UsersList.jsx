import User from "./User"

export const UsersList = ({ users }) => {
    return <ul>
        {users.map(user => {
            return <User key={user.id} user = {user} />
        })}
    </ul> 
}

