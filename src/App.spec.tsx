import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App /> ', () => {
  it('test', () => {
    render(<App />)
    const text = screen.getByText('Hello world!')
    expect(text).toBeInTheDocument()
  })
})
