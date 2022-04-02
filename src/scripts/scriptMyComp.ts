export default {
    name: "MyComponent",
    data: () => ({
        title: "Are you Guru?",
        myHtml: '<h1>Vue 3 app</h1>',

        person: {
            firstName: 'Vladilen',
            lastName: 'Minin',
            age: 27,
        },

        items: [1, 2, 3, 4, 5, 6],
    }),

    methods: {
        addItem(event) {
            //console.log(this.$refs.myInput.value);
            this.items.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value = '';
            console.log(event.key)
        },
        log(item) {
            console.log("item:", item);
        }
    },

    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
}
