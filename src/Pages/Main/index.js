import React, {Fragment, Suspense, lazy} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {withRouter, Route} from 'react-router-dom';

import ResizeDetector from 'react-resize-detector';

import Loading from '../../components/Loading/Loading'

const AppMainLazy = lazy(() => import('../../Layout/AppMain'));
const LoginLazy = lazy(() => import('../Login'));


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closedSmallerSidebar: false,
            width: undefined
        };
    }

    onResize = (width) => this.setState({ width });

    render() {
        const { width } = this.state;

        let {
            colorScheme,
            enableFixedHeader,
            enableFixedSidebar,
            enableFixedFooter,
            enableClosedSidebar,
            closedSmallerSidebar,
            enableMobileMenu,
            enablePageTabsAlt,
        } = this.props;

        return (
            <Fragment>
                {/* Login */}
                <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <Loading/> 
                            </div>
                        </div>
                    }>
                    <Route path="/login" component={LoginLazy}/>
                </Suspense>
                <div className={cx(
                    "app-container app-theme-" + colorScheme,
                    {'fixed-header': enableFixedHeader},
                    {'fixed-sidebar': enableFixedSidebar || width < 1250},
                    {'fixed-footer': enableFixedFooter},
                    {'closed-sidebar': enableClosedSidebar || width < 1250},
                    {'closed-sidebar-mobile': closedSmallerSidebar || width < 1250},
                    {'sidebar-mobile-open': enableMobileMenu},
                )}>
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <Loading/> 
                            </div>
                        </div>
                    }>
                        <Route>
                            <AppMainLazy/>
                        </Route>
                    </Suspense>
                    <ResizeDetector handleWidth onResize={this.onResize} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProp = state => ({
    colorScheme: state.ThemeOptions.colorScheme,
    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProp)(Main));