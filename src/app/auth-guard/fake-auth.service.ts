export class FakeAuthService {
  loggedIn: boolean = false;

  isAuthenticated() {
    const promise = new Promise<boolean>(
                      (resolve, reject) => {
                        setTimeout(() => {
                          resolve(this.loggedIn);
                        }, 800);
                      }
                    );

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}

