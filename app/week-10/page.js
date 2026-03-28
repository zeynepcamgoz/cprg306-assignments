"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth()
  const currentUser = user;

  async function signInWithGitHub() {
    try {
      await gitHubSignIn();
    } catch (e) {
      console.error("Login failed:", e);
    }
  }

  async function signOutUser() {
    try {
      await firebaseSignOut();
    } catch (e) {
      console.error("Logout failed:", e);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="text-center">

        <h1 className="text-3xl font-bold">
          My Shopping List
        </h1>

        {currentUser ? (
          <>
            <p className="mt-6">
              Signed in as <strong>{currentUser.displayName}</strong>
            </p>

            <p className="text-sm text-gray-600">
              {currentUser.email}
            </p>

            <button
              onClick={signOutUser}
              className="mt-5 px-5 py-2 border rounded-lg hover:bg-gray-200"
            >
              Log Out
            </button>

            <div className="mt-5">
              <Link href="/week-10/shopping-list" className="underline">
                View Your List →
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="mt-6 text-gray-700">
              You are not signed in yet.
            </p>

            <button
              onClick={signInWithGitHub}
              className="mt-5 px-5 py-2 border rounded-lg hover:bg-gray-200"
            >
              Continue with GitHub
            </button>
          </>
        )}

      </section>
    </main>
  );
}