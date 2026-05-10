import './assets/styles/App.css'
import './assets/styles/RideshareForm.css'
import logo from './assets/images/rideshare_logo.png'
import { useEffect, useRef } from 'react';

const NewsletterForm = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Inject MailerLite fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://assets.mlcdn.com/fonts.css?version=1778073';
    document.head.appendChild(fontLink);

    const formStyle = document.createElement('link');
    formStyle.rel = 'stylesheet';
    formStyle.href = 'https://assets.mailerlite.com/css/embedded_form_40887838.css';
    document.head.appendChild(formStyle);

    // Inject MailerLite form styles
    const style = document.createElement('style');
    style.innerHTML = `
    `;
    document.head.appendChild(style);

    // ... rest of your script injection
    const script1 = document.createElement('script');
    script1.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b';
    script1.type = 'text/javascript';

    const script2 = document.createElement('script');
    script2.innerHTML = `fetch("https://assets.mailerlite.com/jsonp/2320306/forms/186672417045742833/takel")`;

    const script3 = document.createElement('script');
    script3.innerHTML = `
      function ml_webform_success_40887838() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-40887838 .row-success').show();
        $('.ml-subscribe-form-40887838 .row-form').hide();
      }
    `;

    ref.current.appendChild(script3);
    ref.current.appendChild(script1);
    script1.onload = () => ref.current?.appendChild(script2);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(formStyle);
    };
  }, []);

  return (
    <div ref={ref}>
      <div id="mlb2-40887838" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-40887838">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent">
                <p><strong>Sign up for updates on Mary Karty's projects!</strong></p>
              </div>
              <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/2320306/forms/186672417045742833/subscribe" data-code="" method="post" target="_blank">
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input aria-label="email" aria-required="true" type="email" className="form-control" name="fields[email]" placeholder="Email" autoComplete="email" />
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Sign up</button>
                  <button disabled style={{display: 'none'}} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad"></div>
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div className="ml-form-successBody row-success" style={{display: 'none'}}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <img className="mt3 w65" src={logo} alt="Lost Key Lounge Logo" />
            <h1 className="m1">Rideshare to Elsewhere</h1>
            <h2>IndyFringe 2026 - District Mainstage.</h2>
            <p className="bold mt2">Sunday 8/16 - 8:00 p.m. | Saturday 8/22 - 2:00 p.m. | Sunday 8/23 - 2:00 p.m.</p>
            <p className="left">A Southern Gothic dark comedy inspired by a near death experience. Rideshare to Elsewhere is about the choices we make and which ones are left at the end. Do we follow the light, deal with the darkness or see a way out? Join us for a ride between the Lost Key Lounge and the equally undefinable Elsewhere and hope we don't have a layover in Atlanta."</p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;