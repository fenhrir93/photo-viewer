import { CardInfo } from "../CardInfo";
import { Tag } from "../Tag";
export interface CardInfoProps {
  likes: number;
  views: number;
  downloads: number;
}

export interface PhotoData extends CardInfoProps {
  id: number;
  user: string;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  tags: string;
}

export function PhotoCard(props: PhotoData) {
  const tags: string[] = props.tags.split(",");
  return (
    <section className="max-w-sm overflow-hidden shadow-lg rounded">
      <img
        src={props.webformatURL}
        width={props.webformatWidth}
        height={props.webformatHeight}
        alt=""
      />
      <div className="px-6 py-4">
        <h3 className="text-purple-500 text-st text-xl">{props.user}</h3>
      </div>
      <section className="text-xl px-4 py-4">
        <CardInfo
          likes={props.likes}
          views={props.views}
          downloads={props.downloads}
        ></CardInfo>
        <div className="px-6 py-4">
          {tags.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
        </div>
      </section>
    </section>
  );
}
