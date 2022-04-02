export default {
    name: "SecondComponent",
    data: () => ({
        title: "Notes list",
        placeholder: "input note name",
        inputValue: "",
        notes: ["Note 1"]
    }),

    methods: {
        inputChangeHandler(event) {
            //v-bind:value="inputValue"
            //v-on:input="inputChangeHandler"

            //console.log(event.target.value)
            this.inputValue = event.target.value;
        },

        addNote() {
            // console.log("addNote");
            if (this.inputValue.length !== 0) {
                this.notes.push(this.inputValue);
                this.inputValue = "";
            }
        },

        inputKeyPress(event) {
            //console.log(event.key)

            // v-on:keypress="inputKeyPress"
            if (event.key === 'Enter') {
                this.addNote();
            }
        },

        deleteNote(index) {
            this.notes.splice(index, 1);
        },

        toUpperCase(text) {
            return text.toUpperCase();
        },

        doubleCount() {
            console.log("doubleCount")
            return this.notes.length * 2
        }
    },

    computed: {
        doubleCountComputed() {
            console.log("doubleCountComputed")
            return this.notes.length * 2
        }
    },

    watch: {
        //inputValue func name the same as a variable
        inputValue(value) {
            console.log("Input value change", value);
        }
    }
}
