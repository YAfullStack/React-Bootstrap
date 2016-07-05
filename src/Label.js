import classNames from 'classnames';
import React from 'react';

import { State, DEFAULT, PRIMARY } from './styleMaps';
import { bsClass, bsStyles, getClassSet, omitBsProps }
  from './utils/bootstrapUtils';

class Label extends React.Component {
  hasContent(children) {
    let result = false;

    React.Children.forEach(children, child => {
      if (result) {
        return;
      }

      if (child != null && child !== false) {
        result = true;
      }
    });

    return result;
  }

  render() {
    const { className, children, ...props } = this.props;

    const classes = {
      ...getClassSet(props),

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children),
    };

    return (
      <span
        {...omitBsProps(props)}
        className={classNames(className, classes)}
      >
        {children}
      </span>
    );
  }
}

export default bsClass('label',
  bsStyles([...Object.values(State), DEFAULT, PRIMARY], DEFAULT,
    Label
  )
);
