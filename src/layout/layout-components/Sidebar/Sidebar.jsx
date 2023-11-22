import React from 'react';
import { I3Div } from '../../../importer';
import SidebarItem from './SidebarItem';
import { withStyles } from "@mui/styles";
import helper from '../../../general/helper';
class Sidebar extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    _onClick = (index, childIndex) => {
        this.props.onClick(index, childIndex);
    }
    render() {
        let { selectedIndex, classes } = this.props;
        let { menu, width, height, itemHeight } = this.props;
        return (
            <React.Fragment>
                <I3Div className={classes.root}>
                    <I3Div
                        overflowY="auto"
                        height={height}
                        overflow="overlay"
                        className="mini-scrollbar"
                    >
                        {menu.map((i, index) => {
                            return (
                                <SidebarItem
                                    key={index}
                                    item={i}
                                    index={index}
                                    height={itemHeight}
                                    color={"white"}
                                    backgroundColor={"primary"}
                                    isSelected={selectedIndex == index}
                                    onClick={this._onClick}
                                />
                            );
                        })}
                    </I3Div>
                </I3Div>
            </React.Fragment>
        );
    }
}

Sidebar.displayName = 'Sidebar';
export default withStyles({
    root: {
        background: `transparent linear-gradient(180deg, ${helper.getColorFromName("primary5")} 0%, #1C4485 100%) 0% 0% no-repeat`
    }
})(Sidebar);
