console.log('LCO');

const App = {
    data() {
        return {
            courseList: [
            {
                id: "lco1",
                courseName: 'Django Full Stack',
                subtitle: 'Learn Django with postgres',
                price: '199',
                courseImage: "django.png",
                url: 'https://www.instagram.com/',    
            },
            {
                id: "lco2",
                courseName: 'Interview Preparation',
                subtitle: 'Crack the FAANG Interview',
                price: '999',
                courseImage: "interview.png",
                url: 'https://www.facebook.com/',    
            },
            {
                id: "lco3",
                courseName: 'React Native',
                subtitle: 'Build Mobile Apps',
                price: '299',
                courseImage: "rn.png",
                url: '',         
            }]
        }
    }
}

Vue.createApp(App).mount('#vapp')