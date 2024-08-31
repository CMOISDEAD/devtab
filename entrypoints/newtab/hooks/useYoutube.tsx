import { useEffect, useState } from 'react';
import useDataStore from '../store/useDataStore';
import axios from 'axios';
import * as xml2js from 'xml2js';

export const useYoutube = ({ maxResults = 5 }) => {
  const [error, setError] = useState<string>("");
  const [videos, setVideos] = useState<VideoType[]>([]);
  const { youtubeChannels } = useDataStore(state => state);

  const fetchRSSFeed = async (channelId: string): Promise<VideoType[]> => {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml`;

    try {
      const response = await axios.get(rssUrl, {
        params: {
          channel_id: channelId,
        }
      });
      const rssData = response.data;

      const videoList: VideoType[] = [];

      await xml2js.parseStringPromise(rssData).then((result) => {
        const entries = result.feed.entry;
        if (!entries) return;
        for (let i = 0; i < Math.min(entries.length, maxResults); i++) {
          const entry = entries[i];
          videoList.push({
            id: entry['yt:videoId'][0],
            link: entry.link[0].$.href,
            title: entry.title[0],
            thumbnail: entry['media:group'][0]['media:thumbnail'][0].$.url,
            publishedAt: entry.published[0],
          });
        }
      });
      return videoList;
    } catch (error: any) {
      console.error(error);
      setError(error.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      if (youtubeChannels.length === 0) return;

      const allVideos: VideoType[] = [];
      for (const channelId of youtubeChannels) {
        const channelVideos = await fetchRSSFeed(channelId);
        allVideos.push(...channelVideos);
      }

      allVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      setVideos(allVideos);
    };

    fetchVideos();
  }, [youtubeChannels]);

  return {
    error,
    videos,
    channels: youtubeChannels,
  };
};

