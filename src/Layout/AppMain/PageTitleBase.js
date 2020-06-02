import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import Icon from '../../components/Icon/Icon'

class PageTitleBase extends Component {


    render() {
        let {
            heading,
            icon,
            subheading,
            bgcolor,
            color
        } = this.props;

        return (

            <div className={`app-page-title ${bgcolor} text-white`}>
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className={[cx("page-title-icon"), "pl-3", `text-${color}`].join(' ')}>
                            <Icon icon={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div className={cx("page-title-subheading")}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitleBase);