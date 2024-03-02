import Header from "@/components/Header";
import Class from "@/components/class";

import Router from "next/router";
import { useEffect } from 'react';

export default function Home() {

	useEffect(() => {
		const temp: any = localStorage.getItem("loggedIn");
		const loggedIn: boolean = JSON.parse(temp);

		if(!loggedIn){
			Router.push("/login");
		}
	}, []);

  return (
    <main className="container">
      <Header name={"Home"} />
      <Class classID={"python"}/>
      <Class classID={"cplusplus"}/>
      <Class classID={"java"}/>
    </main>
  );
}
