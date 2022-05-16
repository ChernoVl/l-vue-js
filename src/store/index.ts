import {createStore} from 'vuex'
import post from './modules/post'
import reactions from './modules/reactions'

/**
 * Использывание с обяснением смотрите в
 * src/components/lesson9/FilmPage.vue
 * src/store/modules/reactions.ts
 */
export default createStore({
    /**
     *  Состояние нашего хранилища, сдесь лежат все переменые.
     *  Доступ к етим переменым есть из любого компонента
     *  this.$store.state.variableName
     */
    state: {},

    /**
     * Позволяет полочить переменые из state.
     * Некоторые переменые должны быть инкапсулированы.
     * как правило сдесь находяться функции с фильтрацией, сортировкой
     * чтобы получать уже преобразованые даные
     */
    getters: {},

    /**
     * Ето функции которые позволяют изменять состояние нашего state
     */
    mutations: {},

    /**
     * Очень похожы на mutations.
     * Отличие: они являються ассинхроными.
     * Имено здесь делаются запросы на сервер, после этого будем
     * вызывать mutations, которые будут менять наш state
     */
    actions: {},
    modules: {
        post,
        reactions,
    }
})
