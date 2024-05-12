import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
  const { keyword } = useParams();
  const youtube = new FakeYoutube();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  return (
    <>
      <div>Videos {keyword ? `${keyword}🍭` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
