<template>
<div class="container user">
    <figure class="user--info">
        <img :src="user.avatar_url" alt="" class="user--avatar">
        <figcaption>
            <h1>{{user.loginname}}</h1>
        </figcaption>
    </figure>
    <div class="user--topics">
        <h3>TA 的主题：</h3>
        <div class="card fluid" v-for="topic in user.recent_topics" :key="topic.id">
            <h3 class="section">
                <nuxt-link :to="{name: 'topic-id', params: {id: topic.id}}">{{topic.title}}</nuxt-link>
            </h3>
            <p class="section">
                最后回复：  {{topic.last_reply_at | dateFormat('YYYY-MM-DD HH:mm')}}
            </p>
        </div>
    </div>
    <div class="user--topics">
        <h3>TA 的回复：</h3>
        <div class="card fluid" v-for="reply in user.recent_replies" :key="reply.id">
            <h3 class="section">
                <nuxt-link :to="{name: 'topic-id', params: {id: reply.id}}">{{reply.title}}</nuxt-link>
            </h3>
            <p class="section">
                最后回复：  {{reply.last_reply_at | dateFormat('YYYY-MM-DD HH:mm')}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
// import format from '~/plugins/date'
export default {
    asyncData({app, params}) {
        console.log(params)
        return app.$axios.$get('user/' + params.username).then(res => {
            // let data = res.data instanceof String ? JSON.parse(res.data) : res.data
            let data = res.data
            console.log(data)
            // let div = document.createElement('div')
            // div.innerHTML = res.data.data.content
            // res.data.summary = div.innerText.substr(0, 120)
            // data.summary = data.content.replace(/<[^>]+>/g,"").substr(0, 120).replace(/\s+/g, '')
            // res.summary = res.body.replace(/<[^>]+>/g,"").substr(0, 120).replace(/\s+/g, '')
            return {user: data}
        }).catch(err => {
            console.log('axios.get failed.')
            console.error(err)
        })
    },
}
</script>

<style lang="scss" scoped>
.user{
    &--info{
        text-align: center;
        &--avatar{
            margin: auto;
            display: block;
        }
    }
}
</style>

