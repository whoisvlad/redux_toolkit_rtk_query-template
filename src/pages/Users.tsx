import { FC }       from "react"
import { Helmet }   from "react-helmet";
import { UserItem } from "../components/UserItem";
import { usersApi } from "../redux/services/UsersService";




export const Users: FC = () => {
  // const { fetchUsers } = useActions()
  // const { usersData, loading, error } = useTypedSelector(state => state.users)
  
  // API version
  const { data: usersData, isLoading, error: usersError } = usersApi.useFetchAllUsersQuery(4, {
    // pollingInterval: 10000, // every 10 seconds API will get new data
  })
  
  // useEffect(() => {
  //   fetchUsers()
  // }, [fetchUsers]);
  
  
  
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      
      <main>
        <h1>Users page</h1>
        
        {isLoading && <p>Loading users...</p>}
        {usersError && <p>Failed to fetch users data.</p>}
        <div className="users-list">
          {usersData && usersData.map(user => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      </main>
    </>
  );
};
