import React, { Component, PropTypes } from 'react';

class Pane extends Component {
    constructor(...args) {
        super(...args);

        this.state = { size: this.props.size };
    }

    render() {
        const split = this.props.split;
        const classes = ['pane', split, this.props.className];

        const style = Object.assign({}, this.props.style || {});

        if (this.state.size !== undefined) {
            if (split === 'vertical') {
                style.width = this.state.size;
            } else {
                style.height = this.state.size;
            }
            classes.push('has-size');
        }

        return (
            <div className={classes.join(' ')} style={style}>{this.props.children}</div>
        );
    }
}

Pane.propTypes = {
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    size: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default Pane;
