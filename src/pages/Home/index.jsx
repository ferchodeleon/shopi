import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {items && items.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </Layout>
  );
};

export default Home;
