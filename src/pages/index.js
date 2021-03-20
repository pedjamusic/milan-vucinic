import React, { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'


export default function Home() {
  useEffect(() => {
    netlifyIdentity.init({});
  });
  return (
    <div id="root">
      <div data-netlify-identity-button>Login with Netlify Identity</div>
    </div>
  )
}
