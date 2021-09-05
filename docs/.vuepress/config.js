module.exports = {
    lang: 'zh-CN',
    title: 'Ftrack Events Manager 帮助文档',
    lineNumbers: true,
    base:'ftrack_events_manager_docs',
    themeConfig: {
        sidebar: [
            {
                text: '首页',
                link: '/'
            }, {
                text: '事件编写',
                link: '/eventWrite'
            }
        ]
    },
    bundler: '@vuepress/webpack',
}