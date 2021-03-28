import React from "react";
import { Section } from "../Section";
import { FavSongs } from "./components/FavSongs";
import { ListItemsWrapper } from "../ListItemWrappers/ListItems.wrapper";
import { LibraryContainer } from "./layout.styled";
import { Playlist } from "../../../../../../store/types/playlist";
import { PlaylistItem } from "../PlaylistItem";
import { Loader } from "../Loader";
import { NotFound } from "../NotFound";

type LibraryLayoutProps = {
  userPlaylists: Playlist[];
  isLoading: boolean;
};

export const LibraryLayout = ({
  userPlaylists,
  isLoading,
}: LibraryLayoutProps) => (
  <LibraryContainer>
    {isLoading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Section title="Favourite songs" children={<FavSongs />} />
        {userPlaylists.length > 0 ? (
          <Section
            title="Your playlists"
            children={
              <ListItemsWrapper arrLength={userPlaylists.length}>
                {userPlaylists.map((playlist, i: number) => (
                  <PlaylistItem key={i} playlistItemData={playlist} id={i} />
                ))}
              </ListItemsWrapper>
            }
          />
        ) : (
          <NotFound sectionName="Playlists" />
        )}
      </React.Fragment>
    )}
  </LibraryContainer>
);
