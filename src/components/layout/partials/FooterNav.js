import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://api.whatsapp.com/send?phone=60174220665&text=I%27m%20interested%20invoicemudah">Contact</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=60174220665&text=I%27m%20interested%20invoicemudah">About us</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=60174220665&text=I%27m%20interested%20invoicemudah">FAQ's</a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=60174220665&text=I%27m%20interested%20invoicemudah">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;