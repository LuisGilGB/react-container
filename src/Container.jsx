import React from 'react';
import {isArray, isObject} from '@luisgilgb/js-utils';
import {
    getContainerClassName,
    mapChildClassName,
    mapChild
} from './utils';
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
        maxHeight
    }

    return (
        <div
            {...otherProps}
            className={getContainerClassName(layout, className)}
            onClick={onClick}
            style={style}
        >
            {isArray(children) ?
                children.map(child => mapChild(child, mapChildClassName(layout))) :
                (isObject(children === 'object') ? mapChild(children, mapChildClassName(layout)) : children)
            }
        </div>
    );
}

export default Container;