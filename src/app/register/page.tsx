"use client";
import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../components/icons/ArrowRight";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creatingUser, setCreatingUser] = useState<boolean>(false);
  const [createUserSuccess, setCreateUserSuccess] = useState<boolean>(false);
  const [createUserError, setCreateUserError] = useState<boolean>(false);

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setCreatingUser(true);
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed!");
        }
      })
      .catch((error) => {
        setCreateUserError(true);
        console.error("Registration error:", error);
      });
    setCreatingUser(false);
    setCreateUserSuccess(true);
  }

  return (
    <section>
      <div className="mt-8">
        <form
          action="/register"
          method="post"
          className="max-w-xs mx-auto"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="text-center font-semibold">
              Register for more features
            </legend>
            {createUserSuccess && (
              <div className="flex flex-col my-4 text-center">
                <p>User has been created succesfully!</p>
                <p className="flex justify-center items-center gap-1">
                  Now, you can{" "}
                  <Link
                    className="text-primary flex justify-center items-center gap-[3px]"
                    href={"/login"}
                  >
                    login <ArrowRight className="w-3 h-3 mt-[2px]" />
                  </Link>
                </p>
              </div>
            )}
            {createUserError && (
              <div className="flex flex-col my-4 text-center">
                <p className="text-primary">Regstration error!</p>
                <p>Please try again in a few minutes.</p>
              </div>
            )}
            <input
              required
              disabled={creatingUser}
              type="email"
              className="border"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              disabled={creatingUser}
              type="password"
              className="border"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              disabled={creatingUser}
              className="block w-full text-gray-700 font-semibold border border-gray-200 rounded-xl px-6 py-3 hover:bg-primary hover:text-white hover:border-primary transition-all hover:border-transparent hover:shadow-md mb-3 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <button className="block w-full text-gray-700 font-semibold border border-gray-200 rounded-xl px-6 py-3 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all hover:border-transparent hover:shadow-md mb-3">
              Login with Google
            </button>
          </fieldset>
          <div className="my-8 flex justify-center items-center flex-col gap-4">
            <p className="text-center">Already have an account?</p>
            <Link
              className="flex justify-center items-center gap-2 w-full text-gray-700 font-semibold border border-gray-200 rounded-xl px-5 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all hover:border-transparent hover:shadow-md mb-3"
              href={"/login"}
            >
              Login here <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
