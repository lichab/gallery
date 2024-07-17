import { eq } from "drizzle-orm";
import { validateRequest } from "~/server/actions";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { user } = await validateRequest();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-2xl">
        Please Sign in
      </div>
    );
  }

  return (
    <main>
      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        {images.map((image) => (
          <div key={image.id} className="p4 w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
