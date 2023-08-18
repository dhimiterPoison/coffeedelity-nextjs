import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return <UserProfile path="/account" routing="path" />
//   <div className="flex flex-col">
// 	<div className="flex py-4 px-4 justify-between">
// 		<h1 className="font-bold text-3xl">Account</h1>
// 		<div className="h-8 w-8 rounded-full bg-green-900 flex justify-center items-center text-white">
// 			DH
// 		</div>
// 	</div>
// 	<div className="flex flex-col rounded-xl p-4 border-neutral-300 border">
// 		<p className="text-lg font-semibold">My information</p>
// 		<div className="flex">
// 			<span className="w-1/2 font-medium">Name: </span>
// 			<span className="w-1/2 ">Dhimiter</span>
// 		</div>
// 		<div className="flex">
// 			<span className="w-1/2 font-medium">Surname: </span>
// 			<span className="w-1/2">Helmi</span>
// 		</div>
// 		<div className="flex">
// 			<span className="w-1/2 font-medium">Email: </span>
// 			<span className="w-1/2 line-clamp-1 overflow-ellipsis">dhimiter.helmi@gmail.com</span>
// 		</div>

// 	</div>
//   </div>;
}