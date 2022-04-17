import { FC, FormEvent, useState } from "react"
import { Helmet }                  from "react-helmet";
import { postsApi }                from "../redux/services/PostsService";
import { PostItem }                from "../components/PostItem";
import { IPost }                   from "../redux/models/IPost";




export const Posts: FC = () => {
  const { data: postsData, isLoading, error } = postsApi.useFetchAllPostsQuery(10)
  const [createPost] = postsApi.useCreatePostMutation()
  const [deletePost] = postsApi.useDeletePostMutation()
  const [updatePost] = postsApi.useUpdatePostMutation()
  
  const [title, setTitle] = useState("");
  
  const handleAddNewPost = async (event: FormEvent) => {
    event.preventDefault()
    
    await createPost({
      title,
      body: ""
    } as IPost)
    
    setTitle("")
  }
  
  const handleDeletePost = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdatePost = (post: IPost) => {
    updatePost(post)
  }
  
  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      
      <main>
        <h1>Posts page</h1>
        
        <form className={"new-post-form"}
              onSubmit={handleAddNewPost}
        >
          <input type="text"
                 placeholder="Title"
                 value={title}
                 onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit">Add Post</button>
        </form>
        
        
        {isLoading && <p>Loading...</p>}
        {error && <p>Failed to fetch posts data.</p>}
        
        
        {postsData && postsData.map(post => (
          <PostItem post={post}
                    key={post.id}
                    remove={handleDeletePost}
                    update={handleUpdatePost}
          />
        ))}
      </main>
    </>
  );
};
