
function useEngagspot() {
    const [state, setState] = React.useState(0);
    createInstance(setState)

}



function createInstance(stateUpdater) {

    const state = {
        notifications: [],
        unreadCount:0,
        channels: [],
        preferences: [],1
    }

    const setState = (newState) => {
        Object.assign(state, newState)
        stateUpdater(state)
    };


}