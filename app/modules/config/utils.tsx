import moment from 'moment';

export const GAME_STATUS = {
    NOT_START: 0,
    GOING: 1,
    DEADLINE: 2,
    END: 3
};

export const USER_STATUS = {
    NOT_SIGNUP: 0,
    REVIEW: 1,
    SIGNUP: 2,
    QUIT: 3,
    JAIL: 4
};

const WEEKCFG = ['本', '第一', '第二', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十'];

export function processGameData(data: any) {
    // gameStatus: 0 比赛未开始 | 1 比赛已开始 | 2 报名已截止 | 3 比赛结束
    // raceType 0 总榜 | 月榜
    // raceType 1 总榜 | 周榜
    // raceType 2 总榜

    let nowDate = +new Date();
    let gameStatus = nowDate >= data.start ? GAME_STATUS.GOING : GAME_STATUS.NOT_START;

    if (data.signUpDeadline === undefined && data.end !== undefined) {
        data.signUpDeadline = +moment().subtract(7, 'days');
    }

    if (nowDate > data.signUpDeadline) {
        gameStatus = GAME_STATUS.DEADLINE;
    }

    if (nowDate > data.end) {
        gameStatus = GAME_STATUS.END;
    }

    let rankInfo = [
        {
            title: '总榜',
            key: 0,
            priceInfo: data.priceMain ? data.priceMain.slice(0, 3) : [],
            weeks: []
        }
    ];

    if (data.raceType <= 1) {
        let raceWeeks = data.leaderboardConfigs.filter(leaderboardItem => {
            if (+new Date() > leaderboardItem.start && leaderboardItem.leaderboardId > 0) {
                return true;
            }

            return false;
        });

        rankInfo.push({
            title: data.raceType === 0 ? '月榜' : '周榜',
            key: 1,
            priceInfo: data.priceWeek ? data.priceWeek.slice(0, 3) : [],
            weeks: raceWeeks.map(weekItem => {
                let weekItemText = `${
                    weekItem.leaderboardId === data.currentLeaderboardId ? WEEKCFG[0] : WEEKCFG[weekItem.leaderboardId]
                }${data.raceType === 0 ? '月' : '周'}`;
                let weekItemStart = moment(weekItem.start).format('MM/DD');
                let weekItemEnd = moment(weekItem.end).format('MM/DD');

                return {
                    ...weekItem,
                    text: `${weekItemText} ${weekItemStart}-${weekItemEnd}`
                };
            })
        });
    }

    let startDate = moment(data.start).format('YYYY年MM月DD日');
    let endDate = moment(data.end).format('YYYY年MM月DD日');
    let gameTime = gameStatus === GAME_STATUS.NOT_START ? `开赛时间：${startDate}` : `比赛结束时间：${endDate}`;

    return {
        ...data,
        rankInfo,
        gameStatus,
        gameTime,
        startDate,
        isReady: true,
        endDate
    };
}