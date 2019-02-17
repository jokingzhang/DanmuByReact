import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from 'prop-types';

interface IGiftProps extends RouteComponentProps{
    gameDetail: any;
}

const GiftTypes = {
    gameDetail: PropTypes.object.isRequired
};


class Gift extends Component<IGiftProps> {
    static propTypes = GiftTypes;

    renderGiftItem(rankItem) {
        if (!rankItem) {
            return;
        }

        return (
            <div className="sg-gift-wrapper">
                {rankItem.priceInfo[1] && (
                    <div className="sg-gift-item">
                        <div className="sg-gift-item-banner sg-gift-item-second">
                            {isNaN(rankItem.priceInfo[1].bouns)
                                ? rankItem.priceInfo[1].bouns
                                : `¥${rankItem.priceInfo[1].bouns}`}
                        </div>
                        <div className="sg-gift-item-title">亚军</div>
                    </div>
                )}
                {rankItem.priceInfo[0] && (
                    <div className="sg-gift-item">
                        <div className="sg-gift-item-banner sg-gift-item-first">
                            {isNaN(rankItem.priceInfo[0].bouns)
                                ? rankItem.priceInfo[0].bouns
                                : `¥${rankItem.priceInfo[0].bouns}`}
                        </div>
                        <div className="sg-gift-item-title">冠军</div>
                    </div>
                )}
                {rankItem.priceInfo[2] && (
                    <div className="sg-gift-item">
                        <div className="sg-gift-item-banner sg-gift-item-third">
                            {isNaN(rankItem.priceInfo[2].bouns)
                                ? rankItem.priceInfo[2].bouns
                                : `¥${rankItem.priceInfo[2].bouns}`}
                        </div>
                        <div className="sg-gift-item-title">季军</div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        const { gameDetail } = this.props;

        console.info(gameDetail);

        if (!gameDetail || !gameDetail.rankInfo) {
            return null;
        }

        return (
            <div className="sg-card sg-gift">
                <h3 className="sg-icon-gift sg-h3-icon">比赛大奖</h3>
                {gameDetail.rankInfo && gameDetail.rankInfo.length > 1 ? (
                    <Tabs
                        animation={false}
                        id="sg-gift-tabs"
                        className="sg-tabs"
                        defaultActiveKey={gameDetail.rankType}>
                        {gameDetail.rankInfo &&
                            gameDetail.rankInfo.map((rankItem, rankIdx) => {
                                return (
                                    <Tab key={`tab-gift-${rankIdx}`} eventKey={rankIdx} title={rankItem.title}>
                                        {this.renderGiftItem(rankItem)}
                                    </Tab>
                                );
                            })}
                    </Tabs>
                ) : (
                    <div className="sg-gift-single-wrapper">
                        {this.renderGiftItem(gameDetail.rankInfo && gameDetail.rankInfo[0])}
                    </div>
                )}
                <div className="sg-card-footer">
                    <span className="sg-icon sg-icon-rule" />
                    <Link to={`${this.props.match.url}/rules`}>更多奖励和规则</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Gift);
