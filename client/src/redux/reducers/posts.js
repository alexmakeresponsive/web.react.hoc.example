import apiPosts from '../../redux/api/localhost.js';

export default (stateStore = apiPosts, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'POST_DELETE': return stateStore.filter( (post) => {
            if (post._id !== payload._id) {
                return post;
            }
        });
    }

    return stateStore;
}