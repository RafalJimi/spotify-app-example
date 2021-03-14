import React from "react";
import { Header } from "./components/Header";
import { PlayButton } from "../PlayButton";
import { SongsListItem } from "../SongsListItem";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { Song } from "../../../../../../store/types/song";
import { Loader } from "../Loader";
import { ServerError } from "../ServerError";
import { SearchElements } from "../SearchElements";
import { Container } from "./layout.styled";

type FavouriteLayoutProps = {
  favouriteSongs: Song[];
  alreadyFetched: boolean;
  isLoading: boolean;
  isError: string;
};

export const FavouriteLayout = ({
  favouriteSongs,
  alreadyFetched,
  isLoading,
  isError,
}: FavouriteLayoutProps) => (
  <Container>
    {isLoading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Header />
        {favouriteSongs.length > 0 && <PlayButton />}
        {favouriteSongs.length > 0 && (
          <Section
            title="Jimi's playlist songs"
            children={
              <Songs>
                {favouriteSongs.map((song, i) => (
                  <SongsListItem songData={song} key={i} id={i} />
                ))}
              </Songs>
            }
          />
        )}
      </React.Fragment>
    )}
    {isError && <ServerError error={isError} />}
    {(favouriteSongs.length === 0 && alreadyFetched) && <SearchElements />}
  </Container>
);
