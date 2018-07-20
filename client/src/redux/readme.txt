1. create store
    import {createStore} from 'redux'
    const store = createStore();

2. create reducer

3. create combineReducer

4. include reducer to combineReducer

5. include combineReducer to store

6. include store to App component

7. add first state for store
    const store = createStore(combineReducer { /* add first state store */ });
    or
    add first state to reducer
    export default (stateStore = 0, action) => { ...
    check store in browser console
    window.store.getState()

8. add logic( switch operator ) for reducer

9. create action via dispatch method
   use browser console
   window.store.dispatch({type: 'ACTION_TYPE_NAME'});
   check store in browser console
   window.store.getState()

10. add button in some component and add onClick attribute for this button

11. add method for button onClick attribute

#12. add console.info('click to button') in this method
    or
    add you YOU dispatch logic ...
    this.props.dispatch({type:'ACTION_TYPE_NAME'})

13. add connect decorator ( from react-redux ) in some component
    const connectDecorator = connect();

14. config connectDecorator

14.1  get store state
    function mapStateToProps(stateStore) {
        return {
            counter: stateStore.counter
        }
    }
    const connectDecorator = connect( mapStateToProps );

14.2 wrap some component to connectDecorator

15. wrapp App component to Provider

16. output store prop to render method
    {this.props.someProp}
    we get store state ( reducer first store state )!

17. try store.dispatch({type:'ACTION_TYPE_NAME'}) in browser console

18. change store state via button
    add dispatch to button onClick method
    this.props.dispatch({
        type: 'INCREMENT'
    }

ok it works, next


19. add actionCreator function
    let actionIncrementCreator = () => {
        return {
            type: 'INCREMENT'
        }
    };
    export {actionIncrementCreator};

20. include  actionCreator in some component
    import {action...Creator} from '../...';

21. update dispatch method
    this.props.dispatch(action...Creator());


ok it works, next


22. add second argument in connect( first, second )








