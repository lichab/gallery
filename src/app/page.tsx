import Image from "next/image";
import { validateRequest } from "~/server/actions";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { user } = await validateRequest();

  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-2xl">
        Please Sign in
      </div>
    );
  }

  const images = await getImages(user?.id);

  return (
    <main>
      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        {images.map((image) => (
          <div key={image.id} className="p4 w-48">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
