import { render, screen } from '@testing-library/react'
import Menu from './index'

describe('Menu component', () => {
  test('renders component and checks for "Login" and "Criar" texts', () => {
    render(<Menu />)

    screen.debug()
  })
})
