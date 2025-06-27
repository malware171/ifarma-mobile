import Button from "@/components/authenticationPage/button"
import { fireEvent, render } from "@testing-library/react-native"
import { router } from 'expo-router';

jest.mock('expo-router');

describe('Buttton', () => {

   beforeEach(() => {
      (router.navigate as jest.Mock).mockClear();
   });

   it('Should navigate on press', () => {
      const routeToNavigate = '(tabs)/homePage';

      const { getByText } = render(<Button title="LogIn" route={routeToNavigate} />);
      const buttonElement = getByText('LogIn');

      fireEvent.press(buttonElement);

      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith(routeToNavigate);
   });
})