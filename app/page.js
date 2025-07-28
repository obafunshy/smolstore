import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";



export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

  let url = baseURL.startsWith('http')
    ? `${baseURL}/api/products`
    : `/api/products`; // handle '/' or '' safely

  try {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Fetch error: ${response.status}`, text);
      return [];
    }

    const products = await response.json();
    return products;
  } catch (err) {
    console.error('getProducts failed:', err.message);
    return [];
  }
}

export default async function Home() {

    const products = await getProducts()
    let planner = null
    let stickers = []

    for (let product of products) {
      if(product.name === 'Medieval Dragon Month Planner') {
        planner = product
        continue
      } 
       stickers.push(product)
    }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
