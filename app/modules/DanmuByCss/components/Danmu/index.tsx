import React, { Component } from 'react';
import classNames from 'classnames';
import { exampleDanmu } from '../../../config/mockData';
import { CSSTransition } from 'react-transition-group';
import PageVisibility from 'react-page-visibility';

interface IDanmuItem {
    active: boolean;
    username: string;
    signUpTime: Date;
};

interface IDanmuState {
    list: IDanmuItem[];
    containerWidth?: number;
    clock?: any;
    isPageVisible: boolean;
}

function processDanmuData(list) {
    return list.map(danmuItem => {
        return {
            active: false,
            ...danmuItem
        };
    });
}

// 排行页面
export default class Danmu extends Component<any, IDanmuState> {

    state = {
        list: [],
        containerWidth: 0,
        clock: 0,
        isPageVisible: true
    };

    private activeNum = 0;
    private wrapperRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        this.getDanmuInfo();
        window.addEventListener("resize", this.updateDimensions, false);
        this.setState({
            containerWidth: this.wrapperRef.current!.offsetWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions, false);
        if (this.state.clock !== undefined) {
            clearInterval(this.state.clock);
        }
    }

    updateDimensions = () => {
        let update_width  = window.innerWidth;
        this.setState({ containerWidth: update_width });
    }

    resolveAnimationFrame = (paramsNum?: any) => {
        if (this.state.list.length === 0) {
            return;
        }

        if (!this.state.isPageVisible && paramsNum === undefined) {
            // 页面不可见时，不可以开启新的弹幕
            return;
        }

        let activeNum = paramsNum || this.activeNum;
        let danmuList = this.state.list.slice();
        let danmuActiveItem: any = danmuList[activeNum];

        if (danmuActiveItem.active && paramsNum === undefined) {
            // 正在运行的弹幕不可以中断;
            return;
        }

        danmuActiveItem.active = !danmuActiveItem.active;

        this.setState(
            {
                list: danmuList
            },
            () => {
                let activeItem: any = this.state.list[activeNum];

                if (activeItem !== undefined && activeItem.active) {
                    setTimeout(() => {
                        this.resolveAnimationFrame(`${activeNum}`);
                    }, 6000);

                    if (this.activeNum >= this.state.list.length - 1) {
                        this.activeNum = 0;
                    } else {
                        this.activeNum += 1;
                    }
                }
            }
        );
    };

    handleVisibilityChange = isVisible => {
        // console.info('handleVisibilityChange==>', isVisible);
        this.setState({
            isPageVisible: isVisible
        })
    }

    getDanmuInfo = async () => {
        const danmuData = processDanmuData(exampleDanmu.data);

        if (danmuData && danmuData.length > 0) {
            setTimeout(() => {
                this.setState({
                    list: danmuData || [],
                    clock: setInterval(() => this.resolveAnimationFrame(), 1500)
                });
            }, 1000);
        }
    };

    render() {
        return (
            <PageVisibility onChange={this.handleVisibilityChange}>
                <div className="sg-danmu-css" ref={this.wrapperRef}>
                    {this.state.list.length > 0 &&
                        this.state.list.map((animationItem: any, animationIdx) => {
                            return (
                                <CSSTransition
                                    key={`danmu-item-${animationIdx}`}
                                    in={animationItem.active}
                                    timeout={300}
                                    unmountOnExit={true}
                                    classNames="sg-danmu-css-item">
                                    <div
                                        style={{
                                            transform: `translate3d(${this.state.containerWidth}px,0,0)`
                                        }}
                                        className={classNames('sg-danmu-css-item', `sg-danmu-css-item-${animationIdx % 10}`)}>
                                        {animationItem.username}
                                    </div>
                                </CSSTransition>
                            );
                        })}
                </div>
            </PageVisibility>
        );
    }
}
