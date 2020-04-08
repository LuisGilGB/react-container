import {classNamer} from '@luisgilgb/react-utils';
import {
    DEFAULT_CLASS_NAME,
    DEFAULT_CHILD_CLASS_NAME,
    LAYOUTS_CFG,
    FLEX_ALIGN_CLASS_NAMES,
    FLEX_JUSTIFY_CLASS_NAMES
} from './consts';

export const getFlexAlignClassName = (align = 'stretch') => FLEX_ALIGN_CLASS_NAMES[align] || FLEX_ALIGN_CLASS_NAMES.stretch;

export const getFlexJustifyClassName = (align = 'start') => FLEX_JUSTIFY_CLASS_NAMES[align] || FLEX_JUSTIFY_CLASS_NAMES.start;

// ----------------------------------------------
// Layout className functions
export const getLayoutClassName = (layout = 'auto', classNamePointer = 'contClassName') => {
    if (layout && typeof layout === 'string') {
        return (LAYOUTS_CFG[layout] || LAYOUTS_CFG.auto)[classNamePointer];
    } else if (layout && typeof layout === 'object') {
        const {type = 'auto', align, justify} = layout;
        const typeClassName = (LAYOUTS_CFG[type] || LAYOUTS_CFG.auto)[classNamePointer];
        const alignClassName = getFlexAlignClassName(align)[classNamePointer];
        const justifyClassName = getFlexJustifyClassName(justify)[classNamePointer];
        return classNamer(typeClassName, alignClassName, justifyClassName);
    }
    return LAYOUTS_CFG.auto[classNamePointer];
}

export const getLayoutContainerClassName = (layout) => getLayoutClassName(layout);

export const getLayoutChildClassName = (layout) => getLayoutClassName(layout, 'childClassName');
// ----------------------------------------------

// ----------------------------------------------
// Component className functions
export const getCmpClassName = (layout, customClassName, mainClassName = DEFAULT_CLASS_NAME, layoutGetter = getLayoutContainerClassName) => classNamer(mainClassName, layoutGetter(layout), customClassName);

export const getContainerClassName = (layout, customClassName) => getCmpClassName(layout, customClassName);

export const getChildClassName = (layout, customClassName) => getCmpClassName(layout, customClassName, DEFAULT_CHILD_CLASS_NAME, getLayoutChildClassName);
// ----------------------------------------------

// ----------------------------------------------
// Mappers for container children
export const mapChildClassName = layout => props => ({ className: getChildClassName(layout, props.className) })

export const mapChild = (childCmp, propsMapper) => {
    const childProps = typeof childCmp.props === 'object' ? {
            ...childCmp.props,
            ...propsMapper(childCmp.props)
        } : childCmp.props;

    return {
        ...childCmp,
        props: childProps
    }
}
// ----------------------------------------------