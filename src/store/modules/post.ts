interface State {
    posts: Post[],
}

interface Post {
    title: string,
    body: string,
}

export default {
    state: {
        //TODO which type of posts
        posts: []
    },
    getters: {
        allPosts(state: State) {
            return state.posts
        },
        validPosts(state: State) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },

        //TODO change type any
        postsCount(state: State, getters: any) {
            return getters.validPosts.length;
        }
    },
    mutations: {
        updatePosts(state: State, posts: Post[]) {
            state.posts = posts;
        },
        createPost(state: State, newPost: Post) {
            state.posts.unshift(newPost);
        }
    },
    actions: {
        //TODO change type any
        async fetchPosts(ctx: any, limit = 3) {
            const url = 'https://jsonplaceholder.typicode.com/posts?_limit=' + limit;

            const response = await fetch(url);
            const posts = await response.json();

            ctx.commit('updatePosts', posts)
        }
    },
    modules: {}
}