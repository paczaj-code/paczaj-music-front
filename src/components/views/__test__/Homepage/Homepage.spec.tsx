import { render } from '@testing-library/react';
import Homepage from '../../../../components/views/Homepage/Homepage';

describe('Tests for YoutubeImage component', () => {
  beforeEach(() => {
    render(
      <Homepage
        artists_qty={233}
        release_qty={1000}
        track_qty={1000000}
        youtube_qty={500}
      />
    );
  });

  it('should be homepage section ', () => {
    expect(document.querySelector('.section__homepage')).toBeInTheDocument();
  });
});
