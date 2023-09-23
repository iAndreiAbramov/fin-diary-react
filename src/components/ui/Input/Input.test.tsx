import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { wrapWithDarkTheme } from 'utils/testing/testing.utils';

import InputText from './Input';

describe('Input', function () {
  const mockOnChange = jest.fn();
  const initialValue = '100';
  const placeholder = 'test placeholder';

  it('should render correctly', function () {
    render(
      wrapWithDarkTheme(
        <InputText
          value={initialValue}
          onChange={mockOnChange}
          placeholder={placeholder}
        />,
      ),
    );

    const input = screen.getByRole('textbox');
    const inputWrapper = screen.getByTestId('input-wrapper');

    expect(inputWrapper).toBeInTheDocument();
    expect(input).toHaveValue(initialValue);
    expect(input).toBeEnabled();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should call onChange function on every change', function () {
    render(
      wrapWithDarkTheme(
        <InputText
          value=""
          onChange={mockOnChange}
          placeholder={placeholder}
        />,
      ),
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'abc');

    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'a');
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'b');
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 'c');
  });

  it('should be disabled', function () {
    render(
      wrapWithDarkTheme(
        <InputText
          value=""
          onChange={mockOnChange}
          placeholder={placeholder}
          isDisabled={true}
        />,
      ),
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });
});
