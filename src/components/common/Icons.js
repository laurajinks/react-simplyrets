import React from 'react'
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

export const UnfavoriteIcon = () => <img data-cy="unfavorite-icon" src={heartStroke} className="App-logo" alt="unfavorite icon" />

export const FavoriteIcon = () => <img data-cy="favorite-icon" src={heartFill} className="App-logo" alt="favorite icon" />
        