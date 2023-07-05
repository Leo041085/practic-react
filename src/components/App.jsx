import { UsersList } from "./UsersList";
import data from "../users.json"

export const App = () => {
  // console.log(data);
  return <UsersList users = {data}/>
  
};
