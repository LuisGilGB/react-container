import React from 'react';
import {isArray, isObject} from '@luisgilgb/js-utils';
import {
    getContainerClassName,
    mapChildClassName,
    mapChild
} from './innerLogicFunctions';
import './Container.css';

const Container = props => {
    const {
        children,
        className,
        style: styleProp,
        layout,
        width,
        height,
        flex: flexGrow,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        overflow,
        onClick,
        ...otherProps
    } = props;

    const style = {
        ...styleProp,
        width,
        height,
        flexGrow,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        overflow
    }

    const prepareChild = child => isObject(child === 'object') ? mapChild(child, mapChildClassName(layout)) : child;

    return (
        <div
            {...otherProps}
            className={getContainerClassName(layout, className)}
            onClick={onClick}
            style={style}
        >
            {isArray(children) ? children.map(prepareChild) : prepareChild(children)}
        </div>
    );
}

export default Container;