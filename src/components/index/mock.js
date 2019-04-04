const menus = [
    {
        id: 'id-css',
        title: 'css',
        src: null,
        children: [
            {
                id: 'id-scroll',
                title: '滚动条',
                src: 'scroll/Scroll',
                children: null
            },
            {
                id: 'id-flex',
                title: '弹性布局',
                src: 'flex/Flex',
                children: null
            },
        ]
    },
    {
        id: 'id-js',
        title: 'js',
        src: null,
        children: [
            {
                id: 'id-echarts',
                title: 'echarts',
                src: 'echarts/Echarts',
                children: null
            }
        ]
    },
];
export { menus };