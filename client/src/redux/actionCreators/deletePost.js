import constsPosts from '../../redux/consts/posts';
let {actionTtpeDeletePost} = constsPosts;

export default (id) => {
    return {
        type: actionTtpeDeletePost,
        payload: {
            id: id
        }
    }
};