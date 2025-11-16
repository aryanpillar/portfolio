import React from 'react';
import { ProfileImageZoom } from './ui/image-zoom';

interface ProfileCardProps {
  name: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageUrl }) => {
  return (
    <ProfileImageZoom 
      src={imageUrl}
      alt={name}
      name={name}
    />
  );
};

export default ProfileCard;
