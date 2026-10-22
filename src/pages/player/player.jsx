
import React, { useEffect, useState } from 'react';
import './player.css';

import back_arrow_icon from '../../assets/back_arrow_icon.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';

import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      setError('');
      setApiData(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error('Failed to load trailer information.');
        }

        const data = await response.json();

        // Prefer an official YouTube trailer when available
        const videos = data.results || [];

        const trailer =
          videos.find(
            (video) =>
              video.site === 'YouTube' &&
              video.type === 'Trailer' &&
              video.official
          ) ||
          videos.find(
            (video) =>
              video.site === 'YouTube' &&
              video.type === 'Trailer'
          ) ||
          videos.find(
            (video) => video.site === 'YouTube'
          );

        if (!trailer) {
          setError('No trailer is available for this movie.');
          return;
        }

        setApiData(trailer);
      } catch (err) {
        console.error('Trailer loading error:', err);
        setError('Unable to load the trailer. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner">
        <img src={netflix_spinner} alt="Loading trailer..." />
        <p>Loading trailer...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="player-message">
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="player">
      <img
        onClick={() => navigate(-1)}
        src={back_arrow_icon}
        alt="Back"
        className="back-button"
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title={apiData.name || 'Movie trailer'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10) || 'Release date unavailable'}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
