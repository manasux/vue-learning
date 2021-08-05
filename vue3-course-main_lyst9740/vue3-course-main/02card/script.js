
const App = {
    data() {
        return {
            heading: "A trip to Japan",
            subhead: "Nature park in Japan",
            myImg: "japan.jpeg",
            buttontitle: "show more",
            url: 'https://www.instagram.com/'
        }
    }
}

Vue.createApp(App).mount('.vapp')