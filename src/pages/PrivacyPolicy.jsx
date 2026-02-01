import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalStyle, Container, Content, Footer, FooterLink } from '../styles'

function PrivacyPolicy() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Privacy Policy</h1>
        
        <Content>
          <p>
            This website uses Google Analytics to understand how visitors use the site and improve the calculator experience.
          </p>
          
          <p>
            Google Analytics may collect anonymous information such as pages visited, device type, and approximate location. This data does not identify individual users.
          </p>
          
          <p>
            This website may display advertisements served by Google AdSense. Google and its partners may use cookies to show ads based on visits to this and other websites.
          </p>
          
          <p>
            Users may opt out of personalized advertising by visiting Google's Ads Settings.
          </p>
          
          <p>
            We do not collect personal information such as names, email addresses, or payment details.
          </p>
          
          <p>
            If you have questions about this privacy policy, you may contact us at:
            contact@yourdomain.com
          </p>
        </Content>

        <Footer>
          <Link to="/">← Back to Calculator</Link>
        </Footer>
      </Container>
    </>
  )
}

export default PrivacyPolicy

