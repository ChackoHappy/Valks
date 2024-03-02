import Header from "@/components/Header";
import Class from "@/components/class";

export default function Home() {
  return (
    <main className="container">
      <Header name={"Home"} />
      <Class classID={"python"}/>
      <Class classID={"cplusplus"}/>
      <Class classID={"java"}/>
    </main>
  );
}
