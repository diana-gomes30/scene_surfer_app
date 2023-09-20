import type { Meta, StoryObj } from '@storybook/react';

import MovieCard from '@components/MovieCard';
import { movie } from '@__mocks__/movies';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MovieCard',
  component: MovieCard,
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    movie: movie,
  },
};
