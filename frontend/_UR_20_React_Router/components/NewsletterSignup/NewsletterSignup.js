import React from 'react';
import {useFetcher} from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  // fetcher.Form component prevents current route changes and triggers target route action
  const fetcher = useFetcher();
  const {data, state} = fetcher;

  React.useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert('signup successful');
    }
  }, [data, state]);

  return (
      <fetcher.Form method="post" action={'/newsletter'} className={classes.newsletter}>
        <input
            type="email"
            name={'email'}
            placeholder="Sign up for newsletter..."
            aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
      </fetcher.Form>
  );
}

export default NewsletterSignup;