"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default function Nav({ user }: Session) {
  return (
    <nav>
      <h3>FEW</h3>
      {user ? (
        <>
          <div></div>
          <ul>
            <li>Leagues</li>
            <li>Teams</li>
            <li>Messages</li>
            <li>
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <button onClick={() => signIn()}>Sign In with Google</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
