const vueApp = Vue.createApp({
    data() {
        return {
            cercati: [{ "nome": "youtube", "ricerche": 1163000000 }, { "nome": "facebook", "ricerche": 1033000000 }, { "nome": "google", "ricerche": 513000000 }, { "nome": "whatsapp web", "ricerche": 490000000 }, { "nome": "never gonna give you up", "ricerche": 18564350 }],
            selected: 0
        }
    },
    methods: {}
}).mount("#app");