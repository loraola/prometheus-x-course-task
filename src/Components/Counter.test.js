import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

test('Counter should increase', async () => {
    const notifyChange = jest.fn();
    
    // ARRANGE
    render(<Counter notifyChange={notifyChange} />)
  
    // ACT
    await userEvent.click(screen.getByTitle('Increase count'))
  
    // ASSERT    
    const input = screen.getByTestId('counter');
    expect(input.value).toBe('2')

})

test('Counter should decrease', async () => {
    const notifyChange = jest.fn();

    // ARRANGE
    render(<Counter notifyChange={notifyChange} />)
  
    // ACT
    await userEvent.click(screen.getByTitle('Decrease count'))
  
    // ASSERT 
    const input = screen.getByTestId('counter');
    expect(input.value).toBe('0')

})

test('Counter cannot be lower 0', async () => {
    const notifyChange = jest.fn();
    render (<Counter notifyChange={notifyChange} />);
    await userEvent.click(screen.getByTitle('Decrease count'));
    await userEvent.click(screen.getByTitle('Decrease count'));
    const input = screen.getByTestId('counter');
    expect(input.value).toBe('0');
})