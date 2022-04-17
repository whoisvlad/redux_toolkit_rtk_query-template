import { FC, MouseEvent }    from "react"
import { IPost } from "../redux/models/IPost";




interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}


export const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleDelete = (event: MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }
  
  const handleUpdate = (event: MouseEvent) => {
    event.stopPropagation()
    const title = prompt("Update title") || ""
    update({ ...post, title })
  }
  
  return (
    <div className="post" onClick={handleUpdate}>
      <div className="id">{post.id}</div>
      <div className="post-data">
        <div className="title">{post.title}</div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
