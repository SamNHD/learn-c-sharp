import React, { Fragment } from 'react';
import PressEscapeListener from "components/Utilities/PressEscapeListener";
import DrawerLayoutCss from './DrawerLayoutCss';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import BaseLoadData from '../../../components/Base/BaseLoadData';
import helper from '../../../general/helper';
import { I3Div } from '../../../importer';
import { deepCompare } from 'general/CleanNodeHelper';

class DrawerWrapper extends BaseConsumer {
    _getHeightDrawer = () => {
        const { homeHeaderHeight } = this.props;
        return `calc(${helper.innerHeight()} - ${homeHeaderHeight}rem)`;
    }
    consumerContent() {
        const { children, title, homeHeaderHeight, ...childrenProps } = this.props;
        const _childrenRender = React.Children.map(children, child => {
            return React.cloneElement(child, {
                ...childrenProps,
                title: title,
            });
        });
        return (
            <I3Div height={this._getHeightDrawer()}>
                {_childrenRender}
            </I3Div>
        )
        return _childrenRender;
    }

    shouldComponentUpdate() {
        return true;
    }
}
export { DrawerWrapper }
export default class DrawerLayout extends BaseLoadData {
    constructor(props) {
        super(props);
    }
    static propTypes = {

    }

    getExcludeKey = (obj) => {
        let { key, ...take } = obj;
        return take;
    };

    dataToCompare() {
        return null;
    }
    setInitDataToCompare(data) {
        this._initData = $.extend(true, {}, data);
    }
    getInitData() {
        return this._initData;
    }
    hasDataChange = () => {
        let currentData = this.dataToCompare();
        return deepCompare(helper.deepClone(currentData), helper.deepClone(this._initData)) == false;
    }

    shouldComponentUpdate() {
        return true;
    }
    drawerBody() {
        throw 'drawerBody';
    }
    getTitle() {
        return this.props.title;
    }
    getDescription() {
        return this.props.description;
    }
    renderButtons() {
        return null;
    }
    onCloseDrawer() {
    }
    closeModalIfPressEscape() {
        return true;
    }
    closeThisDrawer = () => {
        this.closeDrawer(this.props.drawerId, () => {
            this.onCloseDrawer();
        });
    }
    hasReload = () => {
        return false;
    }
    onReload = () => {

    }
    renderBody() {
        // const { title } = this.props;
        if (this.isLoaded() == false) {
            return null;
        }
        let content = (
            <Fragment>
                <DrawerLayoutCss
                    title={this.getTitle()}
                    description={this.getDescription()}
                    hasReload={this.hasReload()}
                    onReload={this.onReload}
                    closeDrawer={() => {
                        this.closeThisDrawer();
                    }}
                    content={this.drawerBody()}
                    buttons={this.renderButtons()}
                />
            </Fragment>
        )
        if (this.closeModalIfPressEscape()) {
            content = <PressEscapeListener onPressEscape={this.closeThisDrawer}>{content}</PressEscapeListener>;
        }
        return content;
    }
}
