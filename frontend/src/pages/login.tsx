import 'bootstrap/dist/css/bootstrap.css';

export default function Login() {
  return (
    <main className='align-self-center justify-content-center d-flex'>
        <div className="container text-center" style={{maxWidth: '600px'}}>
            <form>
                <img className="mb-4 mx-auto" src="2.png" alt="" width="300" height="300" />
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
  );
}
