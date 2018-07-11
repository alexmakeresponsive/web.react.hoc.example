import axios from 'axios';

import Config from '../../../../etc/config.json';

// console.log('Config = ', Config.config.app.prefix );

let prefix = Config.config.app.prefix;


// let store = {
//     posts: []
// };



export default {
    getPosts() {
        let PromiseAxios =  axios.get(`${prefix}/posts`);

        return PromiseAxios
            .then(({ data }) => {
                // this.store.posts = data;
                // console.log('this store = ', this.store);
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

    // store: {
    //     posts: [1,2]
    // }
}

