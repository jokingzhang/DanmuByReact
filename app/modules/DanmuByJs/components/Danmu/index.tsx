import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import { exampleDanmu } from '../../../config/mockData';
import PageVisibility from 'react-page-visibility';

interface IDanmuItem {
    username: string;
    signUpTime: Date;
};

interface IDanmuState {
    list: IDanmuItem[];
    clock?: any;
    containerWidth?: number;
    isPageVisible: boolean;
}

const stepList = [1.5, 2, 1.8, 2.5, 2.3];

function processDanmuData(list) {
    return list.map(danmuItem => {
        return {
            ...danmuItem
        };
    });
}

// 排行页面
export default class Danmu extends Component<any, IDanmuState> {

    state = {
        list: [],
        clock: 0,
        isPageVisible: true,
        containerWidth: 0
    };

    private activeNum = 0;
    private wrapperRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        this.getDanmuInfo();

        this.setState({
            containerWidth: this.wrapperRef.current!.offsetWidth
        });
    }

    componentWillUnmount() {
        if (this.state.clock) {
            clearInterval(this.state.clock);
        }
    }

    resolveAnimationFrame = () => {
        if (!this.wrapperRef.current || !this.state.isPageVisible) {
            return;
        }

        let div = this.wrapperRef.current.children[this.activeNum];

        let node = findDOMNode(div) as HTMLInputElement;

        if (div && findDOMNode(div)) {
            let roll = () => {
                // let left = node.offsetLeft;
                let transform = node.style.transform || node.style.webkitTransform || '';
                let left = Number(transform.match(/translate3d\(([^a-z]*)[^)]*/)![1]);
                let rect = node.getBoundingClientRect();

                let step = Number(node.getAttribute('attr-val')) || 1.5;

                if (left < rect.left - rect.right) {
                    node.style.transform = `translate3d(${this.state.containerWidth}px,0,0)`;
                } else {
                    left -= step;
                    node.style.transform = `translate3d(${left}px,0,0)`;

                    requestAnimationFrame(roll);
                }
            };

            roll();

            this.activeNum += 1;

            if (this.activeNum >= this.state.list.length) {
                this.activeNum = 0;
            }
        }
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
                <div className="sg-danmu-js" ref={this.wrapperRef}>
                    {this.state.list.length > 0 &&
                        this.state.list.map((animationItem: any, animationIdx) => {
                            return (
                                <div
                                    key={`danmu-item-${animationIdx}`}
                                    style={{
                                        transform: `translate3d(${this.state.containerWidth}px,0,0)`
                                    }}
                                    attr-val={`${stepList[animationIdx % stepList.length]}`}
                                    className={classNames('sg-danmu-js-item', `sg-danmu-js-item-${animationIdx % 10}`)}>
                                    {animationItem.username}
                                </div>
                            );
                        })}
                </div>
            </PageVisibility>
        );
    }
}
