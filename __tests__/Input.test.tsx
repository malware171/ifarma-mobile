import React from "react"
import Input from "@/components/authenticationPage/input"
import { fireEvent, render } from "@testing-library/react-native"

describe('Input', () => {
   it('The Component is rendered', () => {
      render(<Input placeholder="testing"/>)
   })

   it('Should show te placehouder text', () => {
      const {getByPlaceholderText} = render(<Input placeholder="email"/>)
      expect(getByPlaceholderText('email')).toBeTruthy()
   })

   describe('Focused', () => {
      it('Should apply focused style on focus', () => {
         const { getByPlaceholderText } = render(<Input placeholder='email'/>)
         const input = getByPlaceholderText('email')

         const focusedStyle = {
            borderColor: '#1D61E7',
            borderWidth: 2,
            backgroundColor: '#FFF'
         };

         fireEvent(input, 'focus');

         expect(input.props.style).toContainEqual(focusedStyle);
      })

      it('Should remove focused style on blur', () => {
         const { getByPlaceholderText } = render(<Input placeholder='email'/>)
         const input = getByPlaceholderText('email')

         const focusedStyle = {
            borderColor: '#1D61E7',
            borderWidth: 2,
            backgroundColor: '#FFF'
         };

         fireEvent(input, "blur");

         expect(input.props.style).not.toContainEqual(focusedStyle);
      })

      it('should call the onFocus prop when the input is focused', () => {
         const mockOnFocus = jest.fn();

         const { getByPlaceholderText } = render(
            <Input placeholder="test-focus" onFocus={mockOnFocus} />
         );
         
         const input = getByPlaceholderText('test-focus');

         fireEvent(input, 'focus');

         expect(mockOnFocus).toHaveBeenCalled();
         expect(mockOnFocus).toHaveBeenCalledTimes(1);
      });

      it('should call the onBlur prop when the input is unfocused', () => {
         const mockOnBlur = jest.fn();

         const { getByPlaceholderText } = render(
            <Input placeholder="test-blur" onBlur={mockOnBlur} />
         );
         
         const input = getByPlaceholderText('test-blur');

         fireEvent(input, 'blur');

         expect(mockOnBlur).toHaveBeenCalled();
         expect(mockOnBlur).toHaveBeenCalledTimes(1);
      });
   })
})
