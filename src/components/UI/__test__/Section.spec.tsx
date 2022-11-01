import { render } from '@testing-library/react';
import Section from '../Section/Section';

describe('Tests for Section component', () => {
  it('should be rendered on screen', () => {
    const { container } = render(
      <Section section_type="album">
        <p>Test</p>
      </Section>
    );
    const sectionItem = container.querySelector('.section__album');
    expect(sectionItem).toBeDefined();
  });

  it('should be rendered children', () => {
    const { container } = render(
      <Section section_type="album">
        <p>Test</p>
      </Section>
    );
    const childItem = container.querySelector('.section__album > p');
    expect(childItem!.innerHTML).toEqual('Test');
  });
});
