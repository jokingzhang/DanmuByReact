import React, { Component } from 'react';
// import classNames from 'classnames';
import { exampleDanmu } from '../../../config/mockData';
import PageVisibility from 'react-page-visibility';
import { Stage, Layer, Label, Tag, Text } from 'react-konva';
import Konva from 'konva';

const stepList = [1.5, 2, 1.8, 2.2, 2.3, 1.6, 2, 1.7];
const topList = [0, 52, 15, 37, 17, 50, 15, 56, 30, 48];

function processDanmuData(list, containerWidth) {
    return list.map((danmuItem, danmuIndex) => {
        return {
            active: false,
            top: topList[danmuIndex % topList.length],
            step: stepList[danmuIndex % stepList.length],
            left: containerWidth,
            ...danmuItem
        };
    });
}

// 排行页面
export default class Danmu extends Component {
    state = {
        list: [],
        containerWidth: 0,
        left: 0,
        clock: 0,
        isPageVisible: true
    };

    activeNum = 0;
    wrapperRef = React.createRef();

    componentDidMount() {
        if (this.wrapperRef.current) {
            this.setState({
                containerWidth: this.wrapperRef.current.offsetWidth,
                left: this.wrapperRef.current.offsetWidth,
            }, () => {
                this.getDanmuInfo();
            });
        }
    }

    componentWillUnmount() {
        if (this.state.clock !== undefined) {
            clearInterval(this.state.clock);
        }
    }

    resolveAnimationFrame = (paramsNum) => {
        if (!this.state.isPageVisible) {
            return;
        }

        let canvasActiveItem = this[`danmuItem${this.activeNum}`];

        if (canvasActiveItem && canvasActiveItem.getLayer) {
            let activeNum = this.activeNum;

            let anim = new Konva.Animation(frame => {
                let danmuList = this.state.list.slice();
                let listActiveItem = danmuList[activeNum];
                let tmpLeft = listActiveItem.left;
                let animActive = true;

                tmpLeft -= listActiveItem.step;

                if (tmpLeft < -200) {
                    tmpLeft = this.wrapperRef.current.offsetWidth;
                    anim.stop();
                    animActive = false;
                }

                listActiveItem.left = tmpLeft;

                this.setState({
                    list: danmuList
                }, () => {
                    // debugger;
                    let activeItem = this.state.list[activeNum];

                    if (activeItem && animActive) {
                        // debugger;
                        canvasActiveItem.setX(activeItem.left);
                    }
                })
            }, canvasActiveItem.getLayer());

            anim.start();

            if (this.activeNum >= this.state.list.length - 1) {
                this.activeNum = 0;
            } else {
                this.activeNum += 1;
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
        const danmuData = processDanmuData(exampleDanmu.data, this.state.containerWidth);

        // console.info('getDanmuInfo==>', danmuData);

        if (danmuData && danmuData.length > 0) {
            setTimeout(() => {
                this.setState({
                    list: danmuData || [],
                    clock: setInterval(() => this.resolveAnimationFrame(), 1800)
                });
            }, 1000);
        }
    };

    render() {
        return (
            <PageVisibility onChange={this.handleVisibilityChange}>
                <div className="sg-danmu-canvas" ref={this.wrapperRef}>
                    <Stage width={this.state.containerWidth} height={80}>
                        <Layer>
                        {this.state.list.length > 0 &&
                            this.state.list.map((animationItem, animationIdx) => {
                                return (
                                    <Label
                                        key={`danmu-item-${animationIdx}`}
                                        x={this.state.containerWidth}
                                        y={animationItem.top}
                                        ref={node => {
                                            this[`danmuItem${animationIdx}`] = node;
                                        }}
                                    >
                                        <Tag
                                            fill='rgba(0, 0, 0, 0.26)'
                                            cornerRadius={4}
                                        />
                                        <Text
                                            padding={5}
                                            text={`  ${animationItem.username}  `}
                                            fontSize={12}
                                            fontFamily='Calibri'
                                            fill='#fff'
                                            align='left'
                                        />
                                    </Label>
                                );
                        })}
                        </Layer>
                    </Stage>
                </div>
            </PageVisibility>
        );
    }
}
