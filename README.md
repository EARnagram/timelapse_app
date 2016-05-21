# timelapse_app

Go with Redux.

## Redux Architecture Notes

Store - similar to angular services, handles state and data

reducers - resides in store = store has many reducers. They handle actions and
change Store state based on those actions. Always returns a new copy of state.
Never mutate the state - every function is pure.

actions - dispatched by the views. handled by the reducers.

components - simply render html. don't worry about setting things. only receive
state. No business logic in the html.

containers - handle state for components. Communicate with Store
