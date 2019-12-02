import service from '../../service/dto-service'

export default {
    namespaced: true,
    state: {
        isLoading: false,       
        isLoaded: false,
        error: null,
        firstRequest: true,
        data: [],
        total: 0,
        length: 10,
        

    },
    mutations: {
        fetchingData(state) {
            state.isLoaded = false;
            state.isLoading = true;
            state.firstRequest = false;
            state.error = null;
            state.data = [];

        },
        fetchingDataSuccess(state, response) {
            state.isLoaded = true;
            state.isLoading = false;
            state.error = null;
            state.data = response.data;
            state.total = response.size;

        },
        fetchingDataError(state, error) {
            state.isLoaded = false;
            state.isLoading = false;
            state.error = error;
            state.data = [];
            state.total = 0;

        }
    

    },
    actions: {
        search({commit}) {
            commit('fetchingData');
            return service.search()
                .then(res => {
                    commit('fetchingDataSuccess', res)
                })
                .catch(err => commit('fetchingDataError', err));
        }

    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.error !== null;
        },
        error(state) {
            return state.error;
        },
        hasData(state) {
            return state.data.length > 0;
        },
        data(state) {
            return state.data;
        },
      
        total(state) {
            return state.total;
        },
        isFirstRequest(state) {
            return state.firstRequest === true;
        },
        isLoaded(state) {
            return state.isLoaded
        }
    }
}
