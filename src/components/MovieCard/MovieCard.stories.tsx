import { Meta, StoryFn } from "@storybook/react";

import { IMovieCard } from "./types";
import MovieCard from "./MovieCard";
import React from "react";

const meta = {
  title: "Components/MovieCard",
  component: MovieCard,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: false,
        description: "A MovieCard component",
        iframeHeight: 400,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    genreId: { control: "number" },
    movieId: { control: "number" },
    voteAverage: { control: "number" },
    posterPath: { control: "text" },
  },
  tags: ["autodocs"],
} as Meta;

export default meta;

const Templates: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />;

/**
 * Default story of the MovieCard
 */
export const Default = Templates.bind({});
Default.args = {
  posterPath: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  title: "The Super Mario Bros. Movie",
  voteAverage: 7.5,
  genreId: 16,
  movieId: 502356,
};
