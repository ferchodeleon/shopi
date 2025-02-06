import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length === 0) {
        return <p>Product not found</p>;
      }
      return context.filteredItems?.map((item) => {
        {
          if (item.images[0].includes("[")) {
            return;
          }
        }
        return <Card key={item.id} item={item} />;
      });
    } else {
      return context.filteredItems?.map((item) => {
        if (item.images[0].includes("[")) {
          return;
        }

        return <Card key={item.id} item={item} />;
      });
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-6">
        <h1>Exclusive products</h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 lg:grid-cols-4 md:grid-cols-2 ms:grid-cols-">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
