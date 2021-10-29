import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'large' | 'medium';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        type="button"
        {...props}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
