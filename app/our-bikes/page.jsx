import { client }     from "/app/lib/sanity.jsx"
import BikeCategories from "/components/BikeCategories.jsx"

const getData = async() => {
  const query = `*[_type == 'product'] {
      description,
      image,
      name,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]->{name}
  }`
  return await client.fetch(query)
}

const OurBikes = async() => {

  const bikes = await getData()

  return (
    <div>
      <BikeCategories bikes={bikes}/>
    </div>
  )
}

export default OurBikes
