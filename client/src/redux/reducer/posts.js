import postsDefault from '../../redux/api/localhost';
import constsPosts from '../../redux/consts/posts';

let {deletePost} = constsPosts;

export default (postsState = postsDefault, action) => {
    const { type, payload }  = action;
    // console.log(postsState);

    switch (type) {
        case deletePost: return postsState.filter( (post) => post.id !== payload.id  );
    }

    return postsState;
}