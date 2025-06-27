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
         };

         fireEvent(input, "blur");

         expect(input.props.style).not.toContainEqual(focusedStyle);
      })
   })
})
