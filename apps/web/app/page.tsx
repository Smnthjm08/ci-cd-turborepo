import { Button } from "@workspace/ui/components/button";
import { prisma } from "@workspace/db";

interface userTypes {
  name: string;
  password: string;
}

export default async function Page() {
  // export default async function  Page() {
  // await prisma.user.create();

  const users = await prisma.user.findMany();
  console.log("user", users);

  if (users.length > 0) {
    return (
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          "dev ci-cd pipeline"
          <div className="text-blue-300">
            
            id: {users[0]?.id}
            username: {users[0]?.username}
            password: {users[0]?.password}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        {/* <div>
          {user?.name}
          {user?.password}
        </div> */}
      </div>
    </div>
  );
}
