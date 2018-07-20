export default (stateStore = 19, action) => {
    const {type} = action;

    switch (type) {
        case 'INCREMENT': return stateStore + 1;
    }

    return stateStore;
}