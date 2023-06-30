import axios from 'axios';

const state = {
    degmo: []
};

const getters = {
    degmada: state => state.degmo
};

const actions = {
    async fetchDistrict({ commit }) {
        const response = await axios.get(
            '/setting/select'
        );

        commit('setdegmo', response.data.district);
    },


};

const mutations = {
    setdegmo: (state, degm) => (state.degmo = degm),


};

export default {
    state,
    getters,
    actions,
    mutations
};
