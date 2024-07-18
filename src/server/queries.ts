import "server-only";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { images } from "./db/schema";

export const getImages = async (userId: string) => {
  return await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: eq(images.userId, userId),
  });
};
