
const App = {
    data() {
        return {
            name: "Manas Mishra"
        }
    }
}

Vue.createApp(App).mount('#app')

Vue.createApp({
    data(){
        return{
            name: "I write code"
        }
    }
}).mount('#onemoreapp')