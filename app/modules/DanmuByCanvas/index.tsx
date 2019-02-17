import React, { Component } from 'react';
import Gift from '../components/Gift';
import Entry from '../components/Entry';
import Danmu from './components/Danmu';

import {exampleGame} from '../config/mockData';
import {processGameData} from '../config/utils';

interface IDanmuState {
    gameDetail?: any;
}

class DanmuByCanvas extends Component<any, IDanmuState> {

    readonly state = {
        gameDetail: {}
    };

    componentDidMount() {
        this.getGameInfo();
    }

    getGameInfo = async () => {
        const gameData = exampleGame;
        this.setState({
            gameDetail: processGameData(gameData)
        })
    }

    render() {

        const {gameDetail} = this.state;

        return (
            <div className="sg-root">
                <header className="sg-banner"/>
                <Danmu />
                <Gift gameDetail={gameDetail} />
                <Entry gameDetail={gameDetail}/>
            </div>
        );
    }
}

export default DanmuByCanvas;
