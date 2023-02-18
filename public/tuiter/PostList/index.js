import Posts from "./Posts.js";
import PostItem from "./PostItem.js";

export default function PostList() {
    return(`
        <ul class="list-group">
            ${Posts.map(post => PostItem(post)).join('')}
        </ul>
    `
    )

}