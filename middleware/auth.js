export default function() {
    // console.log(query, store)
    // console.log()
    // console.log(req.headers.cookie)
    // if (!req.headers.cookie) {
    //     console.log('not login')
    //     redirect('/login')
    // } else {
    //     let cookies = req.headers.cookie
    //     cookies = cookies.split(';').map(cookie => {
    //         const [key, value] = cookie.split('=')
    //         return {key: key.replace(/(^\s*)|(\s*$)/g, ""), value: value.replace(/(^\s*)|(\s*$)/g, "")}
    //     })
    //     req.headers.cookies = {}
    //     for (const cookie of cookies) {
    //         req.headers.cookies[cookie.key] = cookie.value
    //     }
    //     // if (!req.headers.cookies.nuxt_id) {
    //     //     redirect('/login')
    //     // }
    // }
    // console.log(req.headers.cookies)
    return true
}