import PropTypes from 'prop-types';

const columnConfigShape = PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    title: PropTypes.any,
    isVisible: PropTypes.bool,
    options: PropTypes.object,
    onBodyCellClick: PropTypes.func
})).isRequired

export const createColumn = (index, key, title, isVisible = null, options = null, customRenderFunc = null, onBodyCellClick = null) => ({ index, key, title, isVisible, options: { ...options, backgroundColor: "grey1", color: "grey7" }, customRenderFunc, onBodyCellClick });

export { columnConfigShape };