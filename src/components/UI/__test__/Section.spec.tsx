import { render } from '@testing-library/react';
import Section from '../Section/Section';

describe('Tests for Section component', () => {
  it('should be rendered on screen', () => {
    const { container } = render(
      <Section section_type="album" title="Test haed">
        <p>Test</p>
      </Section>
    );
    const sectionItem = container.querySelector('.section__album');
    expect(sectionItem).toBeInTheDocument();
  });

  it('should be rendered children', () => {
    const { container } = render(
      <Section section_type="album">
        <p>Test</p>
      </Section>
    );

    const childItem = container.querySelector('.section__album');
    expect(childItem?.innerHTML).toContain('Test');
  });

  it('should be rendered title', () => {
    const { container } = render(
      <Section section_type="album" title="test head">
        <p>Test</p>
      </Section>
    );

    console.log(container.innerHTML);

    const childItem = container.querySelector(
      '.section__album > .heading--album'
    );
    expect(childItem?.innerHTML).toContain('head');
  });
});
