import Header from "@/components/Header";
import Class from "@/components/class";

import Router from "next/router";
import { useEffect } from 'react';

export default function Home() {

	useEffect(() => {
		if(localStorage.getItem("loggedIn") == null){
			localStorage.setItem("loggedIn", JSON.stringify(false));
		}

		const temp: any = localStorage.getItem("loggedIn");
		const loggedIn: boolean = JSON.parse(temp);

		if(!loggedIn){
			Router.push("/login");
		}
	}, []);

  return (
    <main className="container">
      <Header name={"Home"} />
      <div className="row">
        <div className="col-md-4">
          <Class classID={"cs"} name={"Intro to Programming"}/>
        </div>
        <div className="col-md-4">
          <Class classID={"bio"} name={"Biology"} />
        </div>
      </div>
    </main>
  );
}
