const mockImageUrls = [
  "https://utfs.io/f/936bec9f-5fee-441c-9f67-aab85297db95-85pb9y.jpg",
  "https://utfs.io/f/ba2a2d63-681f-461a-98a5-da07c89e4203-24ac7.jpg",
  "https://utfs.io/f/d013c700-4d08-4feb-b6b7-5fd9ba415af9-imy4eq.jpg",
  "https://utfs.io/f/dec15d92-d999-41f4-9491-1eaab44c0f87-8cfb8n.jpg",
];

const images = mockImageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
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
