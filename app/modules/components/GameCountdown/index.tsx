import moment from 'moment';
import React, { Fragment, Component } from 'react';

export const preZero = num => {
    if (num < 10) {
        return `0${num}`;
    }

    return num + '';
};

function processClockData(data: any) {
    let nowTime = moment();
    let startTime = moment(data.start);
    let deadLineTime = moment(data.signUpDeadline);
    let endTime = moment(data.end);
    let targetTime = startTime;
    let isGameOver = false;

    // 已报名不展示报名截止时间，展示比赛结束时间
    if (nowTime > targetTime && nowTime <= deadLineTime && !data.signUp) {
        targetTime = deadLineTime;
    }

    if (nowTime > targetTime && nowTime <= endTime) {
        targetTime = endTime;
    }

    // 此处，我尝试过moment的duration方法，它是基于 年月日时分秒 来做的，API不支持以日为最大单位，所以如下实现。
    let targetDiff = targetTime.diff(nowTime) || 0;
    let targetTimeDays = 0;
    let targetTimeHours = 0;
    let targetTimeMinutes = 0;
    let targetTimeSeconds = 0;

    if (targetDiff > 0) {
        targetTimeDays = Math.floor(targetDiff / 86400000);
    }

    if (targetTimeDays > 0) {
        targetDiff = targetDiff - targetTimeDays * 86400000;
    }

    if (targetDiff > 0) {
        targetTimeHours = Math.floor(targetDiff / 3600000);
    }

    if (targetTimeHours > 0) {
        targetDiff = targetDiff - targetTimeHours * 3600000;
    }

    if (targetDiff > 0) {
        targetTimeMinutes = Math.floor(targetDiff / 60000);
    }

    if (targetTimeMinutes > 0) {
        targetDiff = targetDiff - targetTimeMinutes * 60000;
    }

    if (targetDiff > 0) {
        targetTimeSeconds = Math.floor(targetDiff / 1000);
    }

    let gameTimeTitle = '比赛开始';

    return {
        targetTimeSeconds,
        targetTimeMinutes,
        targetTimeHours,
        targetTimeDays,
        gameTimeTitle,
        isGameOver
    };
}

interface IGameCountDownProps {
    gameDetail: any;
}

interface IGameCountDownStatus {
    targetTimeSeconds?: number;
    targetTimeMinutes?: number;
    targetTimeHours?: number;
    targetTimeDays?: number;
    gameTimeTitle?: string;
    isGameOver?: boolean;
    clock?: any;
}

export default class GameCountDown extends Component<IGameCountDownProps, IGameCountDownStatus> {

    constructor(props) {
        super(props);
        this.state = processClockData(this.props.gameDetail);
    }

    componentDidMount() {
        this.setState({
            clock: setInterval(() => this.doLoop(), 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.clock);
    }

    doLoop = () => {
        const { targetTimeSeconds, targetTimeMinutes } = this.state;

        if (targetTimeMinutes === 0 && targetTimeSeconds === 0) {
            this.setState({
                ...processClockData(this.props.gameDetail)
            });
            return;
        }

        if (targetTimeMinutes !== undefined && targetTimeMinutes > 0 && targetTimeSeconds === 0) {
            this.setState({
                targetTimeSeconds: 59,
                targetTimeMinutes: targetTimeMinutes - 1
            });
            return;
        }

        if (targetTimeSeconds !== undefined && targetTimeSeconds > 0) {
            this.setState({
                targetTimeSeconds: targetTimeSeconds - 1
            });
        }
    };

    render() {
        const {
            targetTimeSeconds,
            targetTimeMinutes,
            targetTimeHours,
            targetTimeDays,
            gameTimeTitle,
            isGameOver
        } = this.state;

        if (isGameOver) {
            return <span> 比赛已结束 </span>;
        }

        return (
            <Fragment>
                距离{gameTimeTitle}还有：
                <span className="sg-color-reverse">{preZero(targetTimeDays)}</span> 天{' '}
                <span className="sg-color-reverse">{preZero(targetTimeHours)}</span> 时{' '}
                <span className="sg-color-reverse">{preZero(targetTimeMinutes)}</span> 分{' '}
                <span className="sg-color-reverse">{preZero(targetTimeSeconds)}</span> 秒
            </Fragment>
        );
    }
}
