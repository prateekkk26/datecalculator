import React from 'react'
import DaysCalculator from '../components/DaysCalculator'
import { GlobalStyle, Container, Content, FAQSection, FAQItem, Footer, FooterLink } from '../styles'

function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Days Between Two Dates Calculator</h1>
        <DaysCalculator />
        
        <Content>
          <h2>What is a Days Between Two Dates Calculator?</h2>
          <p>
            A days between two dates calculator is a simple yet powerful tool that helps you determine 
            the exact number of days between any two calendar dates. This calculation is essential for 
            various personal and professional purposes, from planning vacations and tracking project 
            deadlines to calculating age in days and managing work schedules.
          </p>
          
          <h2>Common Use Cases</h2>
          <p>
            <strong>Project Planning:</strong> When managing projects, knowing the exact number of 
            working days between milestones helps with resource allocation and timeline estimation. 
            This is particularly useful for project managers who need to account for weekends and 
            holidays when planning deliverables.
          </p>
          
          <p>
            <strong>Human Resources:</strong> HR departments frequently use day calculations for 
            tracking employee tenure, calculating leave balances, determining probation periods, and 
            managing contract durations. Accurate day counts ensure compliance with employment 
            regulations and company policies.
          </p>
          
          <p>
            <strong>Age Calculation:</strong> Beyond simple years, calculating age in days provides 
            precise measurements for medical records, legal documentation, and scientific research. 
            This level of precision is especially important in fields requiring exact chronological data.
          </p>
          
          <p>
            <strong>Deadline Management:</strong> Whether you're tracking payment due dates, 
            submission deadlines, or event planning timelines, knowing the exact number of days 
            remaining helps you prioritize tasks and manage your time effectively.
          </p>
        </Content>

        <FAQSection>
          <h2>Frequently Asked Questions</h2>
          
          <FAQItem>
            <h3>How do you calculate days between two dates?</h3>
            <p>
              The calculator counts each calendar day from the start date to the end date. By default, 
              it excludes the start date and includes the end date. You can toggle these options to 
              include or exclude weekends and adjust whether the start date is counted.
            </p>
          </FAQItem>

          <FAQItem>
            <h3>Does the calculator account for leap years?</h3>
            <p>
              Yes, the calculator automatically handles leap years correctly. Leap years occur every 
              four years when February has 29 days instead of 28, and the calculator accounts for 
              this when calculating the total days between dates.
            </p>
          </FAQItem>

          <FAQItem>
            <h3>Can I exclude weekends from the calculation?</h3>
            <p>
              Yes, you can toggle the "Include weekends" option to exclude Saturday and Sunday from 
              your calculation. This is useful for calculating business days or working days between 
              two dates.
            </p>
          </FAQItem>

          <FAQItem>
            <h3>What happens if I select the same date for both start and end?</h3>
            <p>
              If both dates are the same, the calculator will show 0 days (or 1 day if you choose to 
              include the start date). This helps verify that your date selection is correct.
            </p>
          </FAQItem>

          <FAQItem>
            <h3>What if the start date is after the end date?</h3>
            <p>
              The calculator will display a validation message indicating that the start date must be 
              before or equal to the end date. Simply swap the dates or select new dates to get an 
              accurate calculation.
            </p>
          </FAQItem>
        </FAQSection>

        <Footer>
          © 2026 DateCalculators
          {' • '}
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
        </Footer>
      </Container>
    </>
  )
}

export default Home

