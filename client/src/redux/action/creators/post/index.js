let actionDeletePostCreator = (id) => {
    return {
        type: 'POST_DELETE',
        payload: {
            _id: id
        }
    }
};

export {actionDeletePostCreator};