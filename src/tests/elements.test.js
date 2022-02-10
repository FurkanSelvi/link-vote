import { render, screen } from '@testing-library/react'
import Header from '../components/elements/Header'
import Footer from '../components/elements/Footer'

describe('Header element', () => {
    it('contains a banner', () => {
        render(
            <Header />
        )
        const banner = screen.getByRole('banner')
        expect(banner).toBeTruthy()
    })
    
    it('contains name of site', async () => {
        render(
            <Header />
        )
        const banner = screen.getByText('Link Vote')
        expect(banner).toBeTruthy()
    })
})

describe('Footer element', () => {
    it('contains a summarizing text field', () => {
        render(
            <Footer />
        )
        const section = screen.getByRole('contentinfo')
        expect(section).toBeTruthy()
    })
    
    it('contains copyright information', () => {
        render(
            <Footer />
        )
        const section = screen.getByText('© 2022 Furkan Selvi')
        expect(section).toBeTruthy()
    })
})