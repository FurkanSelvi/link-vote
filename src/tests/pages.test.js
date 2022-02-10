import { render, screen, act } from '../utilities/test-utils'
import { MemoryRouter } from 'react-router-dom'
import ListPage from '../components/pages/ListPage'
import AddItemPage from '../components/pages/AddItemPage'

describe('Home page', () => {
    it('contains one heading saying Welcome', () => {
        render(
            <MemoryRouter>
                <ListPage />
            </MemoryRouter>
        )
        const headings = screen.getAllByRole('heading')
        const pageHeading = screen.getByText('Submit A Link')
        expect(headings[0]).toBe(pageHeading)
    })
})

describe('Add Item page', () => {
    it('contains one heading saying Return to list', () => {
        render(
            <MemoryRouter>
                <AddItemPage />
            </MemoryRouter>
        )
        const headings = screen.getAllByRole('heading')
        const pageHeading = screen.getByText('Return to list')
        expect(headings[0]).toBe(pageHeading)
    })
})