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
                console.log(response.data);
                this.vocabolario = response.data
              });
        }
    },
    mounted(){
        this.getData();
    }
 }).mount('#app');