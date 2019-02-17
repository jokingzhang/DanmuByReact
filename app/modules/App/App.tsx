import React, { Component, Fragment } from 'react';
// import ErrorBox from 'components/ErrorBox';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import AnimatedRouter from 'components/AnimatedRouter';

import DanmuCss from '../DanmuByCss';
import DanmuJs from '../DanmuByJs';
import DanmuCanvas from '../DanmuByCanvas';


class App extends Component<RouteComponentProps> {
    render () {
        const transitionKey = this.props.location.pathname.split('/')[1];

        return (
            <Fragment>
                <AnimatedRouter className="app-root" transitionKey={transitionKey}>
                    <Route path="/danmu/css" component={DanmuCss} />
                    <Route path="/danmu/js" component={DanmuJs} />
                    <Route path="/danmu/canvas" component={DanmuCanvas} />
                    <Redirect exact from="/" to="/danmu/js" />
                </AnimatedRouter>
            </Fragment>
        )
    }
}

export default App;