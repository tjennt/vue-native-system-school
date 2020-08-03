const state = {
    locale: {}
}

const getters = {

}

const mutations = {
    setLocale: (state, locale) => state.locale = locale
}

const actions = {
    setLocale({commit}, locale){
        commit('setLocale', locale)
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}