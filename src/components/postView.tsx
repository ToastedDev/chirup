import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-neutral-700 p-4">
      <Image
        src={author.profileImageUrl}
        className="h-14 w-14 rounded-full"
        alt={`@${author.username}'s profile picture`}
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-xs text-slate-100">
          <div className="font-light">
            <Link href={`/@${author.username}`}>
              <span className="font-bold">{author.firstName}</span>{" "}
              <span className="opacity-50">{`@${author.username} `}</span>
            </Link>
            <Link href={`/post/${post.id}`}>
              <span className="opacity-50">{` · ${dayjs(
                post.createdAt
              ).fromNow()}`}</span>
            </Link>
          </div>
        </div>
        <span className="mt-0.5 text-[1.3rem] leading-7">{post.content}</span>
      </div>
    </div>
  );
};
