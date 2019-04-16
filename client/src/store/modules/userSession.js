 const userSession = {
    state: {
        username: ''
    },

    mutations: {
        setUsername(state, username) {
            state.username = username
        }
    },

    actions: {
        async setUsername(context, username) {
           return await context.commit('setUsername', username)
        }
    },

    getters: {
        getUsername: state => {
            return state.username
        }
    }
}

export default userSession