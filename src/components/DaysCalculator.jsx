import React, { useState, useMemo } from 'react'
import {
  CalculatorContainer,
  InputGroup,
  Label,
  DateInput,
  ToggleGroup,
  ToggleLabel,
  ToggleSwitch,
  ToggleHelper,
  ResultContainer,
  ResultValue,
  ResultDateRange,
  ErrorMessage
} from '../styles'

function DaysCalculator() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [includeWeekends, setIncludeWeekends] = useState(true)
  const [includeStartDate, setIncludeStartDate] = useState(false)
  const [error, setError] = useState('')

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = date.getDate()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const calculateDays = useMemo(() => {
    if (!startDate || !endDate) {
      setError('')
      return null
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      setError('')
      return null
    }

    // Check if start date is after end date
    if (start > end) {
      setError('Start date must be before or equal to the end date.')
      return null
    }

    setError('')

    // Calculate days
    let days = 0
    const current = new Date(start)
    
    // Adjust if start date should be excluded
    if (!includeStartDate) {
      current.setDate(current.getDate() + 1)
    }

    // Count days
    while (current <= end) {
      const dayOfWeek = current.getDay()
      
      // Check if we should include this day
      if (includeWeekends || (dayOfWeek !== 0 && dayOfWeek !== 6)) {
        days++
      }
      
      current.setDate(current.getDate() + 1)
    }

    return days
  }, [startDate, endDate, includeWeekends, includeStartDate])

  return (
    <CalculatorContainer>
      <InputGroup>
        <Label htmlFor="start-date">Start Date</Label>
        <DateInput
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="end-date">End Date</Label>
        <DateInput
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </InputGroup>

      <ToggleGroup>
        <div>
          <ToggleLabel>
            <ToggleSwitch
              type="checkbox"
              checked={includeWeekends}
              onChange={(e) => setIncludeWeekends(e.target.checked)}
            />
            <span>Include weekends</span>
          </ToggleLabel>
          <ToggleHelper>(Saturday & Sunday)</ToggleHelper>
        </div>

        <div>
          <ToggleLabel>
            <ToggleSwitch
              type="checkbox"
              checked={includeStartDate}
              onChange={(e) => setIncludeStartDate(e.target.checked)}
            />
            <span>Include start date</span>
          </ToggleLabel>
          <ToggleHelper>(counts the start date as day 1)</ToggleHelper>
        </div>
      </ToggleGroup>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {calculateDays !== null && !error && (
        <>
          <ResultContainer>
            <ResultValue>{calculateDays}</ResultValue>
            <p>day{calculateDays !== 1 ? 's' : ''}</p>
          </ResultContainer>
          <ResultDateRange>
            From {formatDate(startDate)} to {formatDate(endDate)}
          </ResultDateRange>
        </>
      )}
    </CalculatorContainer>
  )
}

export default DaysCalculator

