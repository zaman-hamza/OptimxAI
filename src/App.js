import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
    <section class="container" id="login-page">
        <div class=" form-box">
            <div class="form-value">
                <form id="login-form" action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" id="username" required />
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required />
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox" />Remember Me </label>

                    </div>
                    <button type="button" id="login-button">Log in</button>
                    <div class="register">
                        <p>Don't have a account <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
