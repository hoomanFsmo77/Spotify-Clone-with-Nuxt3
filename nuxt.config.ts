

export default defineNuxtConfig({
    runtimeConfig:{
        client_id:process.env.CLIENT_ID,
        redirect_uri:process.env.REDIRECT_URI,
        client_secret:process.env.CLIENT_SECRET,
        stateKey:process.env.STATE_KEY,
        scope:process.env.SCOPE
    },
    postcss:{
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build:{
        transpile:[],
    },
    css:[
        '~/assets/style/App.css',
        '~/assets/style/Tailwind.config/Tailwind.base.css',
        '~/assets/style/Tailwind.config/Tailwind.component.css',
        '~/assets/style/Tailwind.config/Tailwind.utilities.css',
    ],
    app:{
        rootId:'v-app',
        rootTag:'main',
        head:{
            title:'Spotify - Web Player: Music for everyone',
            meta: [
                { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
                { name: 'description', content: 'welcome to My project' },
                { name: 'keyword', content: 'HTML,CSS,Js developer' },
                { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
            ],
            bodyAttrs:{},
            link:[
                {href:'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',rel:'icon'}
            ]
        },
    },
    srcDir: './src',
    modules: [
        '@pinia/nuxt','@nuxt/image-edge'
    ],
})
