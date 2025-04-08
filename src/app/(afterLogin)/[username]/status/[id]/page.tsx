import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "../../_component/BackButton";
import style from "./singlePost.module.css";
import CommentForm from "./_component/CommentForm";
export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <div className={style.postForm}>
        <Post />
      </div>

      <CommentForm />
      <div>
        <Post noImage/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
