import apiLocalhost from '../../redux/api/localhost';

export default (stateOriginal, action) => {
    let getPosts = () => {
        let state       = [];
        const { type }  = action;
        let promise     = apiLocalhost.getPosts();

        promise
            .then((data) => {
                state = data;

                switch (type) {
                    case 'DELETE_POST': return state;
                }

                // console.log('posts reducer, action = ', action);
                console.log('posts reducer, state = ',  state);
                
                return state;
            });

        return state;
    };

    return getPosts();
}
