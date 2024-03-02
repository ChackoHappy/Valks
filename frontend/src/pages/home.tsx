import Header from "@/components/Header";
import Class from "@/components/class";

export default function Home() {
  return (
    <main className="container">
      <Header name={"Home"} />
      <div className="row">
        <div className="col-md-4">
          <Class classID={"python"} name={"Python"}/>
        </div>
        <div className="col-md-4">
          <Class name={"C++"} classID={"cplusplus"}/>
        </div>
        <div className="col-md-4">
          <Class name={"Java"} classID={"java"}/>
        </div>
      </div>
    </main>
  );
}
