import React from "react";
import './style.scss';

// Home page component
export default class Header extends React.Component {
  // render
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-logout" onClick={this.props.onLogout}>
            <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.121 10.2293C27.4221 9.51939 26.2883 9.51927 25.5891 10.2292C24.8901 10.9393 24.8899 12.0904 25.5891 12.8005L30.8878 18.1818H8.95187C7.96313 18.1818 7.16154 18.9959 7.16154 20C7.16154 21.0041 7.96313 21.8182 8.95187 21.8182H30.8875L25.5891 27.199C24.8899 27.9091 24.8899 29.0603 25.5891 29.7703C25.9387 30.1253 26.3969 30.3028 26.8551 30.3028C27.3133 30.3028 27.7715 30.1253 28.121 29.7703L36.4756 21.2857C37.1748 20.5758 37.1748 19.4245 36.4756 18.7144L28.121 10.2293Z" fill="white"/>
              <path d="M17.3065 40C18.2952 40 19.0968 39.1859 19.0968 38.1818C19.0968 37.1777 18.2952 36.3636 17.3065 36.3636H3.58065V3.63636H17.3065C18.2952 3.63636 19.0968 2.8223 19.0968 1.81818C19.0968 0.814061 18.2952 0 17.3065 0H1.79033C0.801588 0 0 0.814061 0 1.81818V38.1818C0 39.1859 0.801588 40 1.79033 40H17.3065Z" fill="white"/>
            </svg>
          </div>
          <div className="header-title">Phoster</div>
        </div>
      </div>
    );
  }
}
