import React from 'react';
import {isArray, isObject} from '@luisgilgb/js-utils';
import {classNamer} from '@luisgilgb/react-utils';
import {
    getContainerClassName,
    mapChildClassName,
    mapChild
} from './utils';

const Container = props => {
    const {
        children,
        className,
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
            className={getContainerClassName(layout, className)}
            onClick={onClick}
            {...otherProps}
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