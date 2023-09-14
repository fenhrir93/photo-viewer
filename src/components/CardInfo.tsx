interface CardInfoProps {
  likes: number;
  views: number;
  downloads: number;
}

export function CardInfo({ likes, downloads, views }: CardInfoProps) {
  return (
    <ul>
      <li>
        <strong>Likes: </strong>
        {likes}
      </li>
      <li>
        <strong>Views: </strong>
        {views}
      </li>
      <li>
        <strong>Downloads: </strong>
        {downloads}
      </li>
    </ul>
  );
}
