import { Link } from "@remix-run/react";
import { useOptionalUser } from "./utils";

export default function Header() {
    
    const user = useOptionalUser();
    return (
        <div className="flex items-end bg-slate-800 p-4 text-white">
        {user ? (
          <Link
            to="/words"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            View Notes for {user.email}
          </Link>
        ) : (
          <div className="items-end flex gap-4 justify-end w-full">
            <Link
              to="/join"
              className="flex items-center justify-center rounded-md border border-transparent px-2 py-2 text-base font-small text-yellow-300 shadow-sm hover:bg-yellow-50 sm:px-8"
            >
              Sign up
            </Link>
            <span className="py-2">/</span>
            <Link
              to="/login"
              className="flex items-center justify-center rounded-md px-2 py-2 font-medium text-white hover:bg-yellow-600"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    )
}