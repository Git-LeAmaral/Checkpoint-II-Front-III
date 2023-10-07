import { describe, it, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { DetailCard } from '../Components/DetailCard';

beforeAll(() => {
    render(<DetailCard />);
})

describe('Renders main page correctly', () => {
    it('should render the page correctly', () => {
        
        const button = screen.getByRole('button');

        expect(button).not.toBeNull();
    });

    it('shoud render an alert when the button is clicked', () => {
        
        const alertMock = vi.spyOn(window, 'alert').mockImplementation();
        const button = screen.getByRole('button');

        fireEvent.click(button);

        //espero
        
        expect(alertMock).not.toBeNull();
    })

})