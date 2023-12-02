"use client";

import { useUser } from "@/lib/providers/user";
import { Avatar } from "@nextui-org/avatar";
import { Spinner } from "@nextui-org/spinner";

export default function Profile() {
  const user = useUser();

  console.log(user);
  if (!user)
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size="lg" />
      </div>
    );
  return (
    <main className="container mx-auto px-2 py-10">
      <div className="relative">
        <Avatar
          src={user?.image?.url}
          name={user.firstName}
          className="mx-auto w-32 h-32 text-4xl"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full"></div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <h3 className="text-xs">First Name</h3>
          <h2 className="text-2xl font-bold capitalize">{user.firstName}</h2>
        </div>
        <div>
          <h3 className="text-xs">Last Name</h3>
          <h2 className="text-2xl font-bold capitalize">{user.lastName}</h2>
        </div>
        <div>
          <h3 className="text-xs">Email</h3>
          <h2 className="text-2xl font-bold">{user.email}</h2>
        </div>
        <div>
          <h3 className="text-xs">Account Type</h3>
          <h2 className="text-2xl font-bold capitalize">{user.userType}</h2>
        </div>
        <div>
          <h3 className="text-xs">Account Created</h3>
          <h2 className="text-2xl font-bold">{user.createdAt.split("T")[0]}</h2>
        </div>
      </div>
    </main>
  );
}
