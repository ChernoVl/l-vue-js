import reactions from "@/mocks/reactions";

interface State {
    reactions: [],
    count: number,
}

const loadReactions = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(reactions);
        }, time)
    })
}

export default {
    /**
     * namespaced:
     * По умолчанию false
     * это означает что все нашы модули будуть находиться в общем объекте
     * и если будет вызываться мутация которая одинакова в разных модулях
     * то она будет вызываться в каждом модуле.
     * Но нам нужно чтобы каждый модуль был отдельной смысловой единицой
     * и все было ексапулировано в нем. поэтому мы указываем значение true
     * и тепер нужно указывтаь в нашых mapGetters и mapActions название
     * нашего модуля:
     * reactions/getReactions etc.
     */
    namespaced: true,

    state: {
        reactions: [],
        count: Number,
    },
    getters: {
        getReactions(state: State){
            return state.reactions;
        },
        getCount(state: State){
            return state.count;
        }
    },
    /**
     *
     *
     */
    mutations: {
        /**
         * Методы mutations:
         * *Обычно пишут с большых букв
         *
         * @param state наш state
         * @param payload параметры которые мы полочили из сервера
         * @constructor
         */
        SET_REACTIONS(state: State, payload: []){
            state.reactions = payload;
        },
        SET_COUNT(state: State, payload: number){
            state.count = payload;
        }
    },
    actions: {
        /**
         * Праметры метода actions:
         * Наш actions принимает два аргумента context (store)
         * И payload - то что мы передаем из нашего компонента.
         * Пример:
         * async loadReactions(context: any, payload: number)
         * Но мы воспользуемся синтаксисом ES6 и вставим сюда
         * диструктуризацыю (разу выделим commit, так как нужен только он)
         *
         * commit():
         * вызов мутации. Передаем название мутации и параметр
         *
         * @param commit
         * @param payload
         */
        async loadReactions({commit}: any, payload: number) {
            try {
                const reactions = await loadReactions(payload);
                commit('SET_REACTIONS', reactions);
                commit('SET_COUNT', (<[]>reactions).length);
            } catch (error: any) {
                console.log(error);
            }
        }
    },
}