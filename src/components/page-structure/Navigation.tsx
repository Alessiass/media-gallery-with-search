import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      Navigation
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
