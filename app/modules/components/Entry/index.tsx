import React, { Component, Fragment } from 'react';
import GameCountdown from '../GameCountdown';


interface IEntryProps {
    gameDetail: any;
}


export default class Entry extends Component<IEntryProps> {

    renderContent() {

        return (
            <Fragment>
                <div className="sg-btn-begin">
                    参加比赛赢大奖
                </div>
            </Fragment>
        );
    }

    render() {
        const { gameDetail } = this.props;

        return (
            <div className="sg-card">
                <h3 className="sg-card-title">{gameDetail.gameTime}</h3>

                {this.renderContent()}

                <div className="sg-card-footer">
                    <GameCountdown gameDetail={gameDetail} />
                </div>
            </div>
        );
    }
}
