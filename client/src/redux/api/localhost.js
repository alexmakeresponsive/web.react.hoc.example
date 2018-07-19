// import axios from 'axios';
// import Config from '../../../../etc/config.json';
// let prefix = Config.config.app.prefix;

import posts from '../../data/posts.json';
/*
export default {
    getPosts() {
        let PromiseAxios =  axios.get(`${prefix}/posts`);

        return PromiseAxios
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                console.log('err = ', err);
            });
    },

    createPost(data) {
        return axios.post(`${prefix}/posts`, data);
    },

    deletePost(noteId) {
        return axios.delete(`${prefix}/posts/${noteId}`);
    },
}
*/

export default posts;
