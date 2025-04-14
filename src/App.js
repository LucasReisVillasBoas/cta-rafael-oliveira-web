import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

const trackingId = process.env.REACT_APP_GA_CODE;

if (trackingId) {
  ReactGA.initialize(trackingId);
}

const trackPage = (page) => {
  if (trackingId) {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
};

const App = () => {
  const childRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    if (childRef.current) {
      childRef.current.init();
    }
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

export default App;
