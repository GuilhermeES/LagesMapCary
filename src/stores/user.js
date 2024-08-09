import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";

export const userStore = defineStore('user', {
    state: () => ({
        data: useStorage('user', {}),
        token: useStorage('token', ''),
        expires_in: useStorage('expires_in', ''),
    }),
    getters: {
        getUser : (state) => state.data,
        getId : (state) => state.data.id,
        getToken: (state) => state.token,
        getExpire: (state) => state.expires_in,
        isAuth: (state) => Object.keys(state.data).length > 0
    },
    actions: {
        logoutUser() {
            this.data = {};
            this.token = '',
            this.expires_in = ''
        },
        loginUser(data, token, expires_in) {
            this.data = data;
            this.token = token;
            this.expires_in = expires_in
        }
    }
})