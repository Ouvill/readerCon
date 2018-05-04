const store = {
    loading: false,
    user: {
        userId: 1,
        userName: 'Ouvill',
        displayName: 'おーびる',
        novels: [
            {
                novelId: 1,
                title: "私の素晴らしい小説",
                overview: '異世界転生勇者はある日突然死んでしまった',
                chapter: [{
                    chapterId: 1,
                    chapterNum: 1,
                    title: "第一章",
                    text: "本文"
                },
                {
                    chapterId: 2,
                    chapterNum: 2,
                    title: "第二章",
                    text: "本文"
                },
                {
                    chapterId: 3,
                    chapterNum: 3,
                    title: "第二章",
                    text: "本文"
                },
                ]
            },
            {
                novelId: 2,
                title: "私の素晴らしい小説",
                overview: '異世界転生勇者はある日突然死んでしまった'
            },
            {
                novelId: 3,
                title: "私の素晴らしい小説",
                overview: '異世界転生勇者はある日突然死んでしまった'
            },
            {
                novelId: 4,
                title: "私の素晴らしい小説",
                overview: '異世界転生勇者はある日突然死んでしまった'
            },
            {
                novelId: 5,
                title: "私の素晴らしい小説",
                overview: '異世界転生勇者はある日突然死んでしまった'
            },
        ],
    },
    favorites: [
        {
            novelId: 1,
            title: "私のお気に入り",
            overview: '異世界転生勇者はある日突然死んでしまった',
            chapter: [{
                chapterId: 1,
                chapterNum: 1,
                title: "第一章",
                text: "本文"
            }],
        },
        {
            novelId: 2,
            title: "私のお気に入り",
            overview: '異世界転生勇者はある日突然死んでしまった'
        },
        {
            novelId: 3,
            title: "私のお気に入り",
            overview: '異世界転生勇者はある日突然死んでしまった'
        },
        {
            novelId: 4,
            title: "私のお気に入り",
            overview: '異世界転生勇者はある日突然死んでしまった'
        },
        {
            novelId: 5,
            title: "私のお気に入り",
            overview: '異世界転生勇者はある日突然死んでしまった'
        },

    ],

    selectContest: 0,
    contests: [
        {
            contestId: 1,
            title: "素晴らしい企画",
            content: '匿名企画コンテスト！！',
            joinExpired: '2018-05-03 04:33:06+00',
            voteStart: '2018-05-03 04:33:06+00',
            voteExpired: '2018-05-03 04:33:06+00',
            novels: [
                {
                    novelId: 23,
                    title: "コンテスト参加作品",
                    overview: '貴方の大事なものを壊したい',
                    chapter: [{
                        chapterId: 1,
                        chapterNum: 1,
                        title: "第一章",
                        text: "本文"
                    },
                    {
                        chapterId: 2,
                        chapterNum: 2,
                        title: "第二章",
                        text: "本文"
                    },
                    {
                        chapterId: 3,
                        chapterNum: 3,
                        title: "第二章",
                        text: "本文"
                    }],
                },
                {
                    novelId: 25,
                    title: "コンテスト参加作品",
                    overview: '貴方の大事なものを壊したい',
                },
                {
                    novelId: 26,
                    title: "コンテスト参加作品",
                    overview: '貴方の大事なものを壊したい',
                },
                {
                    novelId: 13,
                    title: "コンテスト参加作品",
                    overview: '貴方の大事なものを壊したい',
                },


            ]
        },
        {
            contestId: 2,
            title: "素晴らしい企画",
            content: '匿名企画コンテスト！！',
            expired: '2018-05-03 04:33:06+00'
        },
        {
            contestId: 3,
            title: "素晴らしい企画",
            content: '匿名企画コンテスト！！',
            expired: '2018-05-03 04:33:06+00'

        }
    ]
}

export default store
