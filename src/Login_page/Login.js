import React from 'react'
import "./Login.css"

export default function (){
    return (
        <div>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Login Form</title>
                    <script
                        src="https://kit.fontawesome.com/66aa7c98b3.js"
                        crossorigin="anonymous"
                    ></script>
                    <link rel="stylesheet" href="./Login Form.css" />
                </head>
                <body>
                    <div class="container">
                        <form class="form-1">
                            <h1>Login</h1>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required />
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" required />
                            <span>Forgot Password</span>
                            <button>Login</button>



                            <p>Or SignUp Using</p>
                            <div class="icons">
                                <a href="https://www.facebook.com/" target="blank"
                                ><i class="fab fa-facebook-f"></i
                                ></a>
                                <a href="https://twitter.com/" target="blank"
                                ><i class="fab fa-twitter"></i
                                ></a>
                                <a href="https://mail.google.com/" target="blank"
                                ><i class="fab fa-google"></i
                                ></a>
                            </div>
                        </form>
                    </div>
                </body>
            </html>

        </div>
    )
}
