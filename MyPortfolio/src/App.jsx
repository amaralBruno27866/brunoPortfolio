import { Post } from "./Post"

export function App() {

  return (
    <div>
      <h1>My Portfolio</h1>
      <Post 
        title="Post 1"
        content="Content 1"
        author="Author 1"
      />
    </div>
  )
}
