import React, { useEffect, useState, useRef } from "react";
import DataTable from "@/components/DataTable";
import { getProducts } from "@/api";

function Home({ email, userName }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [sortIdStatus, setSortIdStatus] = useState(false);
  const [sortNameStatus, setSortNameStatus] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => product.currency === selectedCurrency);
    setFilteredProducts(filtered);
  }, [selectedCurrency, products]);

  const handleSortbyId = () => {
    setSortIdStatus(!sortIdStatus);
    const sortedProducts = sortIdStatus
      ? filteredProducts.slice().sort((a, b) => a.id - b.id)
      : filteredProducts.slice().sort((a, b) => b.id - a.id);
    setFilteredProducts(sortedProducts);
  };

  const handleSortbyName = () => {
    setSortNameStatus(!sortNameStatus);
    const sortedProducts = sortNameStatus
      ? filteredProducts.slice().sort((a, b) => a.name.localeCompare(b.name))
      : filteredProducts.slice().sort((a, b) => b.name.localeCompare(a.name));
    setFilteredProducts(sortedProducts);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <>
      <div className="user-info">
        <div className="username" onClick={togglePopover}>{userName}</div>
        {isPopoverVisible && (
          <div ref={popoverRef} className="popover">
            {email}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='/logo_bcw.png' width='640px' alt='logo' />
      </div>
      <div className="table-action">
        <select name="currencies" id="currencies" value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="HKD">HKD</option>
          <option value="KRW">KRW</option>
          <option value="SGD">SGD</option>
          <option value="GBP">GBP</option>
        </select>
        <button className="btn" onClick={handleSortbyId}>SORT BY ID</button>
        <button className="btn" onClick={handleSortbyName}>SORT BY NAME</button>
      </div>
      <div>
        {isLoading ? (
          <div style={{ textAlign: "center", fontWeight: '1000', fontSize: '30px' }}>Loading...</div>
        ) : error ? (
          <div style={{ textAlign: "center", fontWeight: '1000', fontSize: '30px' }}>Error: {error.message}</div>
        ) : (
          <>
            {filteredProducts.length > 0
              ? <DataTable data={filteredProducts} />
              : <div style={{ textAlign: "center", fontWeight: '1000', fontSize: '30px' }}>There are no items.</div>}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
