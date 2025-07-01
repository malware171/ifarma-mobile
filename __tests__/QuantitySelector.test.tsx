import QuantitySelector from "@/components/QuantitySelector"
import { fireEvent, render, waitFor } from "@testing-library/react-native"
import { useState } from "react"

describe('QuantitySelector', () => {
   it('Should call the onAdd function when the plus button is pressed', async () => {
      const mockOnAdd = jest.fn();
      const mockOnRemove = jest.fn();

      const { getByTestId } = render(
         <QuantitySelector amount={0} onAdd={mockOnAdd} onRemove={mockOnRemove} />
      );

      const plusButton = getByTestId('button-plus');
      fireEvent.press(plusButton);
      fireEvent.press(plusButton);
      await waitFor(() => {
         expect(mockOnAdd).toHaveBeenCalled();
         expect(mockOnAdd).toHaveBeenCalledTimes(2);
      })
  });

  it('Should call the OnRemove function when the less button is pressed', async() => {
      const mockOnAdd = jest.fn();
      const mockOnRemove = jest.fn();

      const { getByTestId } = render(
         <QuantitySelector
         amount={0}
         onAdd={mockOnAdd}
         onRemove={mockOnRemove}
         />
      );

      const plusButton = getByTestId('button-less');
      fireEvent.press(plusButton);
      fireEvent.press(plusButton);
      await waitFor(() => {
         expect(mockOnRemove).toHaveBeenCalled();
         expect(mockOnRemove).toHaveBeenCalledTimes(2);
      })
      
  });
})