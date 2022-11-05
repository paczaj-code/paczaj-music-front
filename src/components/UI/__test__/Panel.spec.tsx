import { render, screen } from '@testing-library/react';
import Panel from '../Panel/Panel';

describe('Tests for Panel component', () => {
  it('should be Panel in the document', () => {
    const { container } = render(
      <Panel>
        <p>Some tekst</p>
      </Panel>
    );

    const panel = container.querySelector('.panel');
    expect(panel).toBeInTheDocument();
  });

  it('should be children in Panel ', () => {
    const { container } = render(
      <Panel>
        <p>Some tekst</p>
      </Panel>
    );

    const child = screen.getByText(/Some/i);
    expect(child).toBeInTheDocument();
  });

  it('should be proper class wit extra_class prop', () => {
    const { container } = render(
      <Panel extra_class="test">
        <p>Some tekst</p>
      </Panel>
    );

    const panel = container.querySelector('.panel');
    expect(panel).toHaveClass('panel__test');
  });
});
