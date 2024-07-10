import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

export function App() {

  return (
    <div>
      <Header />

      <h1>My Portfolio</h1>

      <Post 
        title="Post 1"
        content="Content 1"
        author="Author 1"
      />
    </div>
  )
}
