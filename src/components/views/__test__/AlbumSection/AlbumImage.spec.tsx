import { render, screen, fireEvent } from '@testing-library/react';
import AlbumImage from '../../ArtistView/AlbumSection/AlbumImage';
import { albumsExampleData } from '../data/testData';

const sample = albumsExampleData[0];

describe('Tests for AlbumImage component', () => {
  describe('Tests with given image url', () => {
    beforeEach(() => {
      render(
        <AlbumImage
          first_release_date={sample.first_release_date}
          front_small={sample.front_small}
          name={sample.name}
          id={sample.id}
        />
      );
    });
    it('should be image ', () => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should be image with proper attributes', () => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        sample.front_small
      );
      expect(screen.getByRole('img')).toHaveAttribute('alt', sample.name);
    });

    it('should be proper class when loaded ', () => {
      const picture = screen.getByRole('img');
      fireEvent.load(picture);
      expect(picture).toHaveClass('album-picture__image--loaded');
    });
  });

  describe('Tests without given image url', () => {
    // sample.front_small=null
    beforeEach(() => {
      render(
        <AlbumImage
          first_release_date={sample.first_release_date}
          front_small={undefined}
          name={sample.name}
          id={sample.id}
        />
      );
    });

    it('should be proper src attribute', () => {
      expect(screen.getByRole('img')).toHaveAttribute('src', 'no-cover.png');
    });

    it('should be proper class', () => {
      expect(screen.getByRole('img')).toHaveClass(
        'album-picture__image--noImage'
      );
    });
  });
});
