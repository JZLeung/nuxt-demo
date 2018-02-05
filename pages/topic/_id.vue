<template>
<div class="topic-page container">
    <div class="row topic">
        <div class="card fluid topic--main">
            <h3 class="section topic--title">
                {{detail.title}}
            </h3>
            <nuxt-link :to="'/user/'+detail.author.loginname" class="section topic--info">
                <span class="avatar"><img :src="detail.author.avatar_url" alt=""></span>
                <span class="username">
                    {{detail.author.loginname}}
                </span>
            </nuxt-link>
            <div class="section topic--content" v-html="detail.content"></div>
        </div>
    </div>

    <div class="row comments">
        <div class="card fluid col-sm-12 topic" v-for="reply in detail.replies" :key="reply.id">
            <nuxt-link :to="'/user/'+reply.author.loginname" class="section topic--info">
                <span class="avatar"><img :src="reply.author.avatar_url" alt=""></span>
                <span class="username">
                    {{reply.author.loginname}}
                </span>
            </nuxt-link>
            <div class="section topic--content" v-html="reply.content"></div>
        </div>
    </div>
</div>
</template>

<script>
// import axios from '~/plugins/axios'

// console.log(axios.get)
export default {
    middleware: 'auth',
    asyncData({app, params}) {
        console.log(params)
        return app.$axios.$get('topic/' + params.id).then(res => {
            // let data = res.data instanceof String ? JSON.parse(res.data) : res.data
            let data = res.data
            // console.log(res)
            // let div = document.createElement('div')
            // div.innerHTML = res.data.data.content
            // res.data.summary = div.innerText.substr(0, 120)
            data.summary = data.content.replace(/<[^>]+>/g,"").substr(0, 120).replace(/\s+/g, '')
            // res.summary = res.body.replace(/<[^>]+>/g,"").substr(0, 120).replace(/\s+/g, '')
            return {detail: data}
        }).catch(err => {
            console.log('axios.get failed.')
            console.error(err)
        })
    },
    fetch() {
        console.log('fetch has called.')
    },
    data: () =>({
        detail: {
            // title: '',
            // summary: ''
        }
    }),
    head() {
        return this.$seo(this.detail.title, this.detail.summary)
    }
}
</script>

<style lang="scss">
// @import '~/assets/styles/mixins/common';
// .topic {
//     &--content {
//         img {
//             display: block;
//             margin: auto;
//         }
//     }
// }
// .comment{
//     display: block;
//     &--info{
//         @extend %verticalCenter;
//     }
// }
</style>

