import React, { Fragment } from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from "@mui/styles";
import { I3Div, I3Icon } from '../../../importer';
import PropTypes from 'prop-types';

const width = '150px';

class HeaderSummaryItem extends BaseConsumer {
    constructor(props) {
        super(props);
    }

    consumerContent() {
        let { iconClass, items, bgColor, iconColor, classes } = this.props;
        if (items === null || items === undefined || items.length == 0) {
            return;
        }
        return (
            <Fragment>
                <I3Div
                    height="100%"
                    display='flex'
                >
                    <I3Div display='flex' alignItems="center" margin={['xs', 'xs', 'xs', 'xs']}>
                        <I3Div
                            width='8rem'
                            height='8rem'
                            padding={["sm", "sm", "sm", "sm"]}
                            backgroundColor={bgColor}
                            borderRadius="default"
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <I3Icon color={iconColor} size="lg" className={iconClass}></I3Icon>
                        </I3Div>
                    </I3Div>
                    <I3Div
                        align="center"
                        padding={[, 'sm', , 'sm']}
                        height="100%"
                        cursor="pointer"
                        display='flex'
                        alignItems='flex-start'
                        flexDirection='column'
                        justifyContent='center'
                    >
                        {
                            items.map((i, index) => {
                                return (
                                    <I3Div
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                        className={classes.hoverUnderline}
                                        onClick={i.onClick}
                                        marginBottom={index == 0 ? '2px' : '0px'}
                                    >
                                        <I3Div variant="subtitle2" flex='1' textAlign='left'>{i.text}</I3Div>
                                        <I3Div variant="subtitle2" fontWeight="bold" margin={[, 'xs', , 'md']}>
                                            {i.number ? i.number : 0}
                                        </I3Div>
                                        <I3Div
                                            border={[false, true, false, false]}
                                            borderColor={iconColor}
                                        >
                                        </I3Div>
                                    </I3Div>
                                )
                            })
                        }
                    </I3Div>
                </I3Div>
            </Fragment >
        )
    }
}

export default withStyles({
    hoverUnderline: {
        '&:hover': {
            '&& :first-child': {
                textDecoration: 'underline',
            },
            '&& :last-child': {
                visibility: 'unset'
            }
        },
        borderWidth: '2px !important',
        '&& :last-child': {
            visibility: 'hidden'
        }
    }
})(HeaderSummaryItem)

HeaderSummaryItem.propTypes = {
    iconClass: PropTypes.string.isRequired,
    number: PropTypes.number,
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
HeaderSummaryItem.displayName = 'HeaderSummaryItem';
