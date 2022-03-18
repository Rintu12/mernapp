import styled from "styled-components";
import Navbar from "../component/Navbar";
import Announcement from "../component/AnnouncentMent";
import Products from "../component/Products";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const Location = useLocation();
   const cat = Location.pathname.split("/")[2];
    const [filter , setfilter]  = useState({}); //filer the color and size
    const [sort , setsort] = useState();  // sorted the  products according to their sort

    const handelfilter = (e) =>{      // this function handel the  filter value
      const value = e.target.value;
      setfilter({
        ...filter,
        [e.target.name]: value,

      });
    };
   

  return (
    <div>
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select  name="color" onChange={handelfilter}>
            <Option disable >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select  name="size" onChange={handelfilter}>
            <Option disable>
              Size
            </Option>
            <Option>xl</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setsort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="ase">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  cat={cat} Filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
    </div>
  );
};

export default ProductList;