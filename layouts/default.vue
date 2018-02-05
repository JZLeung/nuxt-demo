<template>
<div>
    <header>
        <a href="#" class="logo"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""></a>
        <!-- <button>全部</button> -->
        <a href="/" class="button">全部</a>
        <span>|</span>
        <!-- <a v-for="nav in tabs" :key="nav.path" :href="'?tab='+nav.path" role="button">{{nav.name}}</a> -->
        <nuxt-link v-for="nav in tabs" :key="nav.path" :to="'/?tab='+nav.path" role="button">{{nav.name}}</nuxt-link>
        <!-- <button>About</button> -->
        <!-- <a href="#" role="button">Contact</a> -->
    </header>
    <nuxt/>
    <footer>
        <p>&copy; 2018-2018 LeungJZ | Nuxt Demo</p>
    </footer>
</div>
</template>

<script>
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

export default {
    data: () => ({
        tabs
    })
}
</script>

<style lang="scss">
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

.container {
    max-width: 1200px;
    margin: 10px auto;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.logo {
    img {
        width: 100px;
    }
}
</style>
