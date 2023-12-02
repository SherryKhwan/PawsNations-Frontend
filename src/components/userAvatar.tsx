import { User } from "@nextui-org/user";
import { User as UserT } from "@/types/data";

export default function UserAvatar({ user }: { user: UserT }) {
  return (
    <div className="flex items-center">
      <User
        name={user.firstName + " " + user.lastName}
        description={user.userType}
        avatarProps={{
          src: user?.image?.url,
        }}
        classNames={{ description: "capitalize" }}
      />
    </div>
  );
}
