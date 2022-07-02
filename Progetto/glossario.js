const app = Vue.createApp({ 
    data(){
        return {
            vocabolario: null
        }
    },
    methods: {
        getData: function(){
            axios.get("./termini.json")
              .then(response => {            
                this.vocabolario = response.data
              });
        }
    },
    mounted(){
        this.getData();
    }
 }).mount('#app');