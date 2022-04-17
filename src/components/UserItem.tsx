import { FC }    from "react"
import { IUser } from "../redux/models/IUser";


interface UserItemProps {
  user: IUser
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={"user"}>
      <span className={"id"}>{user.id}</span>
      <span className={"name"}>{user.name}</span>
    </div>
  );
};
