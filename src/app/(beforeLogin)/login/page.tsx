"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

// import { redirect } from 'next/navigation';

export default function Login() {
  //서버에서 리다이렉트하는 것이기 때문에, 클라이언트 리다이렉트로 바꿔줘야함.
  //redirect('/i/flow/login');
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main/>;
}

//router.push이면
//3000/login -> 3000/i/flow/login

//router.replace이면
//3000/login -> 3000/i/flow/login 으로 같으나

//뒤로가기 할 때 push는 이전이 실행되어 무한 반복이되어버림
//replace는 그런 현상을 방지함(이동 후에 이전 히스토리를 없애버림)
