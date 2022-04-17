import { FC, useEffect }    from "react"
import { Helmet }           from "react-helmet";
import { useActions }       from "../redux/hooks/useActions";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { UserItem }         from "../components/UserItem";




export const Users: FC = () => {
  const { fetchUsers } = useActions()
  const { usersData, loading, error } = useTypedSelector(state => state.users)
  
  useEffect(() => {
    fetchUsers()
  }, []);
  
  
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      
      <main>
        <h1>Users page</h1>
        
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="users-list">
          {usersData && usersData.map(user => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      </main>
    </>
  );
};
