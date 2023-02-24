import Posts from "./Posts.json";
import PostItem from "./PostItem.js";

export default function PostList() {
    return(
        <ul class="list-group">
            {Posts.map(post => <PostItem post={post}/>)}
        </ul>
    )

}