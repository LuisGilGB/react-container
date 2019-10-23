import {
    FLEX_ALIGN_CLASS_NAMES,
    FLEX_JUSTIFY_CLASS_NAMES
} from './consts';

const getFlexAlignClassName = (align = 'stretch') => FLEX_ALIGN_CLASS_NAMES[align] || FLEX_ALIGN_CLASS_NAMES.stretch;

const getFlexJustifyClassName = (align = 'start') => FLEX_JUSTIFY_CLASS_NAMES[align] || FLEX_JUSTIFY_CLASS_NAMES.start;

// ----------------------------------------------
// Layout className functions
const getLayoutClassName = (layout = 'auto', classNamePointer = 'contClassName') => {
    if (layout && typeof layout === 'string') {
        return (layoutsCfg[layout] || layoutsCfg.auto)[classNamePointer];
    } else if (layout && typeof layout === 'object') {
        const {type = 'auto', align, justify} = layout;
        const typeClassName = (layoutsCfg[type] || layoutsCfg.auto)[classNamePointer];
        const alignClassName = getFlexAlignClassName(align)[classNamePointer];
        const justifyClassName = getFlexJustifyClassName(justify)[classNamePointer];
        return classNamer(typeClassName, alignClassName, justifyClassName);
    }
    return layoutsCfg.auto[classNamePointer];
}

const getLayoutContainerClassName = (layout) => getLayoutClassName(layout);

const getLayoutChildClassName = (layout) => getLayoutClassName(layout, 'childClassName');
// ----------------------------------------------

// ----------------------------------------------
// Component className functions
const getCmpClassName = (layout, customClassName, mainClassName = DEFAULT_CLASS_NAME, layoutGetter = getLayoutContainerClassName) => classNamer(mainClassName, layoutGetter(layout), customClassName);

const getContainerClassName = (layout, customClassName) => getCmpClassName(layout, customClassName);

const getChildClassName = (layout, customClassName) => getCmpClassName(layout, customClassName, DEFAULT_CHILD_CLASS_NAME, getLayoutChildClassName);
// ----------------------------------------------

// ----------------------------------------------
// Mappers for container children
const mapChildClassName = layout => props => ({ className: getChildClassName(layout, props.className) })

const mapChild = (childCmp, propsMapper) => {
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