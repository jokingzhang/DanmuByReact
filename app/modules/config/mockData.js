// status ['未参赛', '审核中', '参赛中', '已退赛', '比赛已结束'];

export const exampleGame = {
    id: 'tiger1',
    name: '测试赛01',
    comment: '测试赛01的备注',
    start: 1547078400000,
    end: 1550620800000,
    signUpDeadline: 1548806400000,
    tradeCountMin: 10,
    signUp: false,
    isSaving: 1,
    isSpecial: 1,
    priceMain: [
        {
            rank: 1,
            bouns: 2000
        },
        {
            rank: 2,
            bouns: 1800
        },
        {
            rank: 3,
            bouns: 1600
        },
        {
            rank: 4,
            bouns: 1400
        },
        {
            rank: 5,
            bouns: 1200
        }
    ],
    priceWeek: [
        {
            rank: 1,
            bouns: 2000
        },
        {
            rank: 2,
            bouns: 1800
        },
        {
            rank: 3,
            bouns: 1600
        },
        {
            rank: 4,
            bouns: 1400
        },
        {
            rank: 5,
            bouns: 1200
        }
    ],
    tweets: [
        {
            pos: 0,
            id: 6241,
            title: '11111111122222222',
            url: 'https://test-frontend-broadcast.laohu8.com/v1/weixin/tweet/6241'
        },
        {
            pos: 2,
            id: 6242,
            title: '5句头一遭',
            url: 'https://test-frontend-broadcast.laohu8.com/v1/weixin/tweet/6242'
        }
    ],
    leaderboardConfigs: [
        {
            leaderboardId: 0,
            start: 1471190400000,
            end: 1474214400000
        },
        {
            leaderboardId: 1,
            start: 1471190400000,
            end: 1471795200000
        },
        {
            leaderboardId: 2,
            start: 1471795200000,
            end: 1472400000000
        },
        {
            leaderboardId: 3,
            start: 1472400000000,
            end: 1473004800000
        },
        {
            leaderboardId: 4,
            start: 1473004800000,
            end: 1473609600000
        }
    ],
    currentLeaderboardId: 1,
    imagesHead: [
        {
            pcSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            mobileSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            pcHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger',
            mobileHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger'
        },
        {
            pcSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            mobileSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            pcHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger',
            mobileHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger'
        }
    ],
    imagesPartner: [
        {
            pcSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            mobileSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            pcHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger',
            mobileHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger'
        },
        {
            pcSrc:
                'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
            mobileSrc: 'one-36k.290f736e.jpg',
            pcHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger',
            mobileHref: 'https://z.36kr.com/promotion/neptune?ktm_content=tiger'
        }
    ],
    background: {
        pcSrc: 'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg',
        mobileSrc:
            'https://static.tigerbrokers.com/portal/images/cooperation/stockGame/v2-banner-phone-36k.290f736e.jpg'
    },
    headAd: {
        adStatus: 1, // 1:显示 0:不显示
        notSavingText: '未入金文案',
        notSavingHref: 'https://www.itiger.com/',
        savingText: '入金文案',
        savingHref: 'https://www.itiger.com/'
    },
    video: {
        title: '视频总标题',
        videoList: [
            {
                title: '视频1标题',
                href: '视频1地址',
                cover: '视频1封面'
            },
            {
                title: '视频2标题',
                href: '视频2地址',
                cover: '视频2封面'
            }
        ]
    },
    share: {
        image: 'image-01',
        title: 'title-01',
        text: '分享的文字'
    },
    description: '',
    qrcode: {
        image: 'qrcode-01',
        title: 'qrcode-01',
        text: '二维码'
    },
    rankType: 1,
    raceType: 1,
    tradeType: 2
};

export const exampleRank = {
    pageCount: 1,
    pageSize: 10,
    totalPage: 1,
    items: [
        {
            rank: 1,
            bonus: '800',
            userId: 1001120790,
            mobile: '150****8162',
            position: '空仓',
            profitability: 0.358448,
            nickname: '150****8162',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        },
        {
            rank: 2,
            bonus: '500',
            userId: 1000266255,
            mobile: '137****6753',
            position: 'MRTX(多)',
            profitability: 0.219219,
            nickname: 'Yiwen0525',
            avatar: 'https://static.laohu8.com/8b8dca058452283f1eea451249bc539f'
        },
        {
            rank: 3,
            bonus: '300',
            userId: 1000485481,
            mobile: '186****1438',
            position: 'AMZN(多)',
            profitability: 0.065612,
            nickname: 'my_dream',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        },
        {
            rank: 4,
            bonus: '100',
            userId: 1000637424,
            mobile: '138****9919',
            position: 'PDD(多)',
            profitability: 0.042241,
            nickname: '138****9919',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        },
        {
            rank: 5,
            bonus: '90',
            userId: 1000323769,
            mobile: '152****1081',
            position: 'JNJ(多)',
            profitability: 0.007027,
            nickname: 'FD431chaser',
            avatar: 'https://static.tigerbbs.com/8fecd6e14371c39eed61ed6ae2e872f6'
        },
        {
            rank: 6,
            bonus: '80',
            userId: 1000331820,
            mobile: '155****8898',
            position: '06098(多)',
            profitability: 0.003136,
            nickname: '扁担也是杠杆',
            avatar: 'https://static.laohu8.com/0e77b70c622cde1dd3425891eddea8d0'
        },
        {
            rank: 7,
            bonus: '60',
            userId: 1000268786,
            mobile: '188****2755',
            position: '空仓',
            profitability: 0.0,
            nickname: 'kn',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        },
        {
            rank: 8,
            bonus: '40',
            userId: 1000269638,
            mobile: '181****2907',
            position: '空仓',
            profitability: 0.0,
            nickname: 'sunxutu',
            avatar: 'https://static.laohu8.com/17864cb8776705b69ebd0b3c0ecf5f98'
        },
        {
            rank: 9,
            bonus: '20',
            userId: 1000529095,
            mobile: '182****5002',
            position: '空仓',
            profitability: 0.0,
            nickname: '182****5002',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        },
        {
            rank: 10,
            bonus: '10',
            userId: 1000634566,
            mobile: '139****0353',
            position: '空仓',
            profitability: 0.0,
            nickname: '139****0353',
            avatar: 'https://static.laohu8.com/default-avatar.jpg'
        }
    ],
    updateTime: 1547015402141
};

export const exampleDanmu = {
    data: [
        {
            username: '小王1 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王2 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王3 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王4 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王5 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王6 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王7 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王8 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王9 刚才加入了比赛',
            signUpTime: 1473609600000
        },
        {
            username: '小王10 刚才加入了比赛',
            signUpTime: 1473609600000
        }
    ]
};

export const exampleUser = {
    signUp: true, // 是否报名
    data: {
        avatar: 'https://static.laohu8.com/default-avatar.jpg',
        inx: [],
        username: '清晨',
        status: 0,
        tradeCount: 0,
        tradeCountMeet: false,
        tradeCountMin: 3,
        tradeMin: 100000,
        trade: 2000,
        tradeMeet: false,
        longCountMin: 3, // 最少做多次数
        longCount: 4, // 做多次数
        longCountMeet: true, // 是否满足要求
        shortCountMin: 3, // 最少做空次数
        shortCount: 4, // 做空次数
        shortCountMeet: true, // 是否满足要求
        assetMin: 3000, // 最低报名金额
        assetMax: 90000, // 最高报名金额
        updateTime: 0
    }
};

export const exampleProfit = {
    historyProfitability: [
        {
            date: '20180815',
            rate: 0.132518
        },
        {
            date: '20180814',
            rate: 0.13097
        },
        {
            date: '20180813',
            rate: 0.143221
        },
        {
            date: '20180812',
            rate: 0.130051
        },
        {
            date: '20180811',
            rate: 0.130051
        },
        {
            date: '20180810',
            rate: 0.118365
        },
        {
            date: '20180809',
            rate: 0.09886
        },
        {
            date: '20180808',
            rate: 0.042362
        },
        {
            date: '20180807',
            rate: 0.036962
        },
        {
            date: '20180806',
            rate: 0.034238
        },
        {
            date: '20180805',
            rate: 0.013008
        },
        {
            date: '20180804',
            rate: 0.013008
        },
        {
            date: '20180803',
            rate: -0.007496
        },
        {
            date: '20180802',
            rate: -0.01994
        },
        {
            date: '20180801',
            rate: -0.067444
        },
        {
            date: '20180731',
            rate: -0.072441
        },
        {
            date: '20180730',
            rate: -0.021036
        },
        {
            date: '20180729',
            rate: -0.0319
        },
        {
            date: '20180728',
            rate: -0.0319
        },
        {
            date: '20180727',
            rate: 0.002418
        }
    ],
    inx: [
        {
            time: 1531713600000,
            close: 2798.43
        },
        {
            time: 1531800000000,
            close: 2809.55
        },
        {
            time: 1531886400000,
            close: 2815.62
        },
        {
            time: 1531972800000,
            close: 2804.49
        },
        {
            time: 1532059200000,
            close: 2801.83
        },
        {
            time: 1532318400000,
            close: 2806.98
        },
        {
            time: 1532404800000,
            close: 2820.4
        },
        {
            time: 1532491200000,
            close: 2846.07
        },
        {
            time: 1532577600000,
            close: 2837.44
        },
        {
            time: 1532664000000,
            close: 2818.82
        },
        {
            time: 1532923200000,
            close: 2802.6
        },
        {
            time: 1533009600000,
            close: 2816.29
        },
        {
            time: 1533096000000,
            close: 2813.36
        },
        {
            time: 1533182400000,
            close: 2827.22
        },
        {
            time: 1533268800000,
            close: 2840.35
        },
        {
            time: 1533528000000,
            close: 2850.4
        },
        {
            time: 1533614400000,
            close: 2858.45
        },
        {
            time: 1533700800000,
            close: 2857.7
        },
        {
            time: 1533787200000,
            close: 2853.58
        },
        {
            time: 1533873600000,
            close: 2833.28
        },
        {
            time: 1534132800000,
            close: 2821.93
        },
        {
            time: 1534219200000,
            close: 2839.96
        },
        {
            time: 1534305600000,
            close: 2818.37
        }
    ],
    sh: [
        {
            time: 1531713600000,
            close: 2798.43
        },
        {
            time: 1531800000000,
            close: 2809.55
        },
        {
            time: 1531886400000,
            close: 2815.62
        },
        {
            time: 1531972800000,
            close: 2804.49
        },
        {
            time: 1532059200000,
            close: 2801.83
        },
        {
            time: 1532318400000,
            close: 2806.98
        },
        {
            time: 1532404800000,
            close: 2820.4
        },
        {
            time: 1532491200000,
            close: 2846.07
        },
        {
            time: 1532577600000,
            close: 2837.44
        },
        {
            time: 1532664000000,
            close: 2818.82
        },
        {
            time: 1532923200000,
            close: 2802.6
        },
        {
            time: 1533009600000,
            close: 2816.29
        },
        {
            time: 1533096000000,
            close: 2813.36
        },
        {
            time: 1533182400000,
            close: 2827.22
        },
        {
            time: 1533268800000,
            close: 2840.35
        },
        {
            time: 1533528000000,
            close: 2850.4
        },
        {
            time: 1533614400000,
            close: 2858.45
        },
        {
            time: 1533700800000,
            close: 2857.7
        },
        {
            time: 1533787200000,
            close: 2853.58
        },
        {
            time: 1533873600000,
            close: 2833.28
        },
        {
            time: 1534132800000,
            close: 2821.93
        },
        {
            time: 1534219200000,
            close: 2839.96
        },
        {
            time: 1534305600000,
            close: 2818.37
        }
    ],
    sz: [
        {
            time: 1531713600000,
            close: 2798.43
        },
        {
            time: 1531800000000,
            close: 2809.55
        },
        {
            time: 1531886400000,
            close: 2815.62
        },
        {
            time: 1531972800000,
            close: 2804.49
        },
        {
            time: 1532059200000,
            close: 2801.83
        },
        {
            time: 1532318400000,
            close: 2806.98
        },
        {
            time: 1532404800000,
            close: 2820.4
        },
        {
            time: 1532491200000,
            close: 2846.07
        },
        {
            time: 1532577600000,
            close: 2837.44
        },
        {
            time: 1532664000000,
            close: 2818.82
        },
        {
            time: 1532923200000,
            close: 2802.6
        },
        {
            time: 1533009600000,
            close: 2816.29
        },
        {
            time: 1533096000000,
            close: 2813.36
        },
        {
            time: 1533182400000,
            close: 2827.22
        },
        {
            time: 1533268800000,
            close: 2840.35
        },
        {
            time: 1533528000000,
            close: 2850.4
        },
        {
            time: 1533614400000,
            close: 2858.45
        },
        {
            time: 1533700800000,
            close: 2857.7
        },
        {
            time: 1533787200000,
            close: 2853.58
        },
        {
            time: 1533873600000,
            close: 2833.28
        },
        {
            time: 1534132800000,
            close: 2821.93
        },
        {
            time: 1534219200000,
            close: 2839.96
        },
        {
            time: 1534305600000,
            close: 2818.37
        }
    ],
    hsi: [
        {
            time: 1531713600000,
            close: 2798.43
        },
        {
            time: 1531800000000,
            close: 2809.55
        },
        {
            time: 1531886400000,
            close: 2815.62
        },
        {
            time: 1531972800000,
            close: 2804.49
        },
        {
            time: 1532059200000,
            close: 2801.83
        },
        {
            time: 1532318400000,
            close: 2806.98
        },
        {
            time: 1532404800000,
            close: 2820.4
        },
        {
            time: 1532491200000,
            close: 2846.07
        },
        {
            time: 1532577600000,
            close: 2837.44
        },
        {
            time: 1532664000000,
            close: 2818.82
        },
        {
            time: 1532923200000,
            close: 2802.6
        },
        {
            time: 1533009600000,
            close: 2816.29
        },
        {
            time: 1533096000000,
            close: 2813.36
        },
        {
            time: 1533182400000,
            close: 2827.22
        },
        {
            time: 1533268800000,
            close: 2840.35
        },
        {
            time: 1533528000000,
            close: 2850.4
        },
        {
            time: 1533614400000,
            close: 2858.45
        },
        {
            time: 1533700800000,
            close: 2857.7
        },
        {
            time: 1533787200000,
            close: 2853.58
        },
        {
            time: 1533873600000,
            close: 2833.28
        },
        {
            time: 1534132800000,
            close: 2821.93
        },
        {
            time: 1534219200000,
            close: 2839.96
        },
        {
            time: 1534305600000,
            close: 2818.37
        }
    ]
};

export const exampleOther = {
    info: {
        userId: 38219321,
        uuid: 4924843242343,
        nickname: '昵称',
        avatar: 'https://static.laohu8.com/default-avatar.jpg'
    },
    accountType: 'ib',
    account: '20180306153248988',
    beatRate: 0.1, // 击败百分之多少人，
    profitability: 0.1, // 总收益
    rank: 20, // 总排名
    bonus: 1, // 总排名
    raceType: 1,
    currentLeaderboardId: 1,
    leaderboards: [
        {
            leaderboardId: 0,
            start: 1472400000000,
            end: 1473004800000,
            profitability: 0.1, // 本周(月)收益
            rank: 20, // 排名
            bonus: 1 // 是否获得奖励
        },
        {
            leaderboardId: 1,
            start: 1472400000000,
            end: 1473004800000,
            profitability: 0.1, // 本周(月)收益
            rank: 20, // 排名
            bonus: 1 // 是否获得奖励
        },
        {
            leaderboardId: 2,
            start: 1472400000000,
            end: 1473004800000,
            profitability: 0.1, // 本周(月)收益
            rank: 20, // 排名
            bonus: 1 // 是否获得奖励
        },
        {
            leaderboardId: 3,
            start: 1472400000000,
            end: 1473004800000,
            profitability: 0.1, // 本周(月)收益
            rank: 20, // 排名
            bonus: 1 // 是否获得奖励
        },
        {
            leaderboardId: 4,
            start: 1472400000000,
            end: 1473004800000,
            profitability: 0.1, // 本周(月)收益
            rank: 20, // 排名
            bonus: 1 // 是否获得奖励
        }
    ]
};
