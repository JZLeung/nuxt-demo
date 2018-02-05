import Vue from 'vue'

Vue.mixin({
    methods: {
        $seo(title, content, payload = []) {
            return {
                title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content
                }].concat(payload)
            }
        }
    }
})