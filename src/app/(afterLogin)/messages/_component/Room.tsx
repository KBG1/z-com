"use client";

import style from "../message.module.css";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
    const router = useRouter();
    const user = {
      id: "hero",
      nickname: "영웅",
      Messages: [
        { roomId: 123, content: "안녕하세요", createdAt: new Date() },
        { roomId: 123, content: "안녕히 가세요", createdAt: new Date() },
      ],
    };

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    };

    return (
      <div className={style.room} onClick={onClick}>
        <div className={style.roomUserImage}>
          <img src={faker.image.avatar()} alt="" />
        </div>
        <div className={style.roomChatInfo}>
          <div className={style.roomUserInfo}>
            <span>{user.nickname}</span>
            &nbsp;
            <span>@{user.id}</span>
            &nbsp;
            ·
            &nbsp;
            <span className={style.postDate}>{dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}</span>
          </div>
          <div className={style.roomLastChat}>
            {user.Messages?.at(-1)?.content}
          </div>
        </div>
      </div>
    );
  }