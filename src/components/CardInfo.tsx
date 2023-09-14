import { CardInfoProps } from "./PhotoCard/PhotoCard";

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
