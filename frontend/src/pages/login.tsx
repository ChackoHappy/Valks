import 'bootstrap/dist/css/bootstrap.css';
import {useRouter} from 'next/router';
export default function Login() {
    const router = useRouter();
  return (
    <main className='align-self-center justify-content-center d-flex'>
        <div className="container text-center" style={{maxWidth: '600px'}}>
            <div>
                <img className="mb-4 mx-auto mt-3" src="2.png" alt="" width="200" height="200" />
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button className="btn btn-primary" onClick={() => router.push({pathname: '/home'})}>Submit</button>
            </div>
        </div>
    </main>
  );
}
