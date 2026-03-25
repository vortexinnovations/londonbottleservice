interface ItemListItem {
  name: string;
  url: string;
  position: number;
}

export function ItemListSchema({ items, name }: { items: ItemListItem[]; name: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
