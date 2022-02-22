import {createApp} from 'vue'
import App from './App.vue'

import {q} from './learn'
import {w} from './learn'
import {i, a} from './learn'
import Learn from './learn'

console.log(`Parameter: q:${q} w:${w}`);
console.log(`Parameter: (i)${i} + (a)${a} = ${i + a}`);

console.log(`Parameter r: ${Learn.r}`)

createApp(App).mount('#app')
