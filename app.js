const app =Vue.createApp({
    // data, functions, component template
    // template: '<h2>I am the  template</h2>'

    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'The Enderson',
            age: '20'
        }
    },
    methods: {

        changeTitle(new_title){
            // this.title = "Word of Randiance"
            this.title = new_title
        },

        toggleShowBooks(){
            // this.title = "Word of Randiance"
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
