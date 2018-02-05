<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <div class="card fluid topic" v-for="topic in list" :key="topic.id" >
                    <div class="section">
                        <h3><nuxt-link :to="{name: 'topic-id', params: {id: topic.id}}" class="topic--title">{{topic.title}}</nuxt-link></h3>
                        <p class="topic--info">
                            <mark v-if="topic.top" class="tertiary">精华</mark>
                            <mark v-else>{{tabsObj[topic.tab]}}</mark>
                            <span class="avatar">
                                <img :src="topic.author.avatar_url" alt="">
                            </span>
                            <span class="username">
                                {{topic.author.loginname}}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
// import axios from '~/plugins/axios'


const tabs = [{
    name: '精华',
    path: 'good'
}, {
    name: '问答',
    path: 'ask'
}, {
    name: '招聘',
    path: 'job'
}, {
    name: '分享',
    path: 'share'
}]
let tabsObj = {} 
tabs.map(tab => {
    tabsObj[tab.path] = tab.name
})
export default {
    // layout: 'mylayout',
    // components: {
    //     AppLogo
    // },
    data: () => ({
        tabs,
        tabsObj
    }),
    asyncData({app, query}) {
        console.log(query)
        return app.$axios.$get(`topics?tab=${query.tab || ''}`).then(res => {
            // console.log(res)
            // console.log(JSON.parse(res))
            return {list: res.data}
        })
    },
    methods: {
        getData() {
            this.$axios.$get(`topics?tab=${this.$route.query.tab || ''}`).then(res => {
                // console.log(res)
                // console.log(JSON.parse(res))
                // return {list: res.data}
                this.list = res.data
            })
        }
    },
    head() {
        return {
            title: '首页' + (this.$route.query.tab ? `- ${this.tabsObj[this.$route.query.tab]}` : ''),
            meta: [{
                hid: 'description',
                name: 'description',
                content: 'CNode：Node.js专业中文社区'
            }]
        }
    },
    watch: {
        '$route': function() {
            console.log('$route has changed.')
            this.getData()
        }
    }
}
</script>

<style lang="scss">


</style>
