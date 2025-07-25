import { lazy } from 'react';
import { canPlay } from './patterns.js';
import type { VideoElementProps } from './types.js';
import HtmlPlayer from './HtmlPlayer.js';

export type PlayerEntry = {
  key: string;
  name: string;
  canPlay: (src: string) => boolean;
  canEnablePIP?: () => boolean;
  player?:
    | React.ComponentType<VideoElementProps>
    | React.LazyExoticComponent<React.ComponentType<VideoElementProps>>;
};

const Players: PlayerEntry[] = [
  {
    key: 'hls',
    name: 'hls.js',
    canPlay: canPlay.hls,
    canEnablePIP: () => true,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerHls' */ 'hls-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'dash',
    name: 'dash.js',
    canPlay: canPlay.dash,
    canEnablePIP: () => true,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerDash' */ 'dash-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'mux',
    name: 'Mux',
    canPlay: canPlay.mux,
    canEnablePIP: () => true,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerMux' */ '@mux/mux-player-react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'youtube',
    name: 'YouTube',
    canPlay: canPlay.youtube,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerYouTube' */ 'youtube-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'vimeo',
    name: 'Vimeo',
    canPlay: canPlay.vimeo,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerVimeo' */ 'vimeo-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'wistia',
    name: 'Wistia',
    canPlay: canPlay.wistia,
    canEnablePIP: () => true,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerWistia' */ 'wistia-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'spotify',
    name: 'Spotify',
    canPlay: canPlay.spotify,
    canEnablePIP: () => false,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerSpotify' */ 'spotify-audio-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'twitch',
    name: 'Twitch',
    canPlay: canPlay.twitch,
    canEnablePIP: () => false,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerTwitch' */ 'twitch-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    canPlay: canPlay.tiktok,
    canEnablePIP: () => false,
    player: lazy(
      () => import(/* webpackChunkName: 'reactPlayerTiktok' */ 'tiktok-video-element/react')
    ) as React.LazyExoticComponent<React.ComponentType<VideoElementProps>>,
  },
  {
    key: 'html',
    name: 'html',
    canPlay: canPlay.html,
    canEnablePIP: () => true,
    player: HtmlPlayer,
  },
];

export default Players;
