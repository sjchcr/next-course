"use client";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello world!</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* <Image
        src="https://bit.ly/react-cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
        alt="Me"
      /> */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   //const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
