import { render } from '@testing-library/react';
import Backdrop from '../Backdrop/Backdrop';
import userEvent from '@testing-library/user-event';
const onClick = jest.fn();

describe('Name of the group', () => {
  // let container: {querySelector: (arg0: string) => any;};
  // beforeEach(() => {
  //    { container } = render(
  //     <Backdrop type="artist" onClick={onClick} trigger={true} withIconLoader />
  //   );
  // });

  it('should be on screen', () => {
    const { container } = render(
      <Backdrop type="artist" onClick={onClick} trigger={true} withIconLoader />
    );
    const backdrop = container.querySelector('.backdrop');

    expect(backdrop).toBeInTheDocument();
  });

  it('should onclick function be called when backdrop clicked', () => {
    const { container } = render(
      <Backdrop type="artist" onClick={onClick} trigger={true} withIconLoader />
    );
    const backdrop = container.querySelector('.backdrop');
    userEvent.click(backdrop!);

    expect(onClick).toBeCalledTimes(1);
  });

  it('should icon in the document', () => {
    const { container } = render(
      <Backdrop type="artist" onClick={onClick} trigger={true} withIconLoader />
    );
    const backdropIcon = container.querySelector('.backdrop__icon ');

    expect(backdropIcon).toBeInTheDocument();
  });
});
