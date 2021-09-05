module.exports = {
    lang: 'zh-CN',
    title: 'Ftrack Events Manager 帮助文档',
    lineNumbers: true,
    base: '/ftrack_events_manager_docs/',
    themeConfig: {
        repo: 'https://github.com/Ftrack-Events-Manager',
        repoLabel: '查看源码',
        sidebar: [
            {
                text: '首页',
                link: '/'
            }, {
                text: '事件编写',
                link: '/event-write'
            }, {
                text: '数据库储存信息结构',
                link: '/db-structure'
            }
        ]
    },
    bundler: '@vuepress/webpack',
}