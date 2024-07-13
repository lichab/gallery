import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main>
      <div className="flex flex-wrap items-center gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="p4 w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
