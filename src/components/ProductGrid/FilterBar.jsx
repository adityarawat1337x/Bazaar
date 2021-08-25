import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core/";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// product.category[0].name gender
// product.category[1].name itemtype
// product.price.raw price

export default function Filterbar(props) {
  const productsData = useSelector((state) => state.products);

  const { setProducts } = props;

  const classes = useStyles();
  const [itemType, setItemType] = React.useState(props.filters[0]);
  const [itemType2, setItemType2] = React.useState(props.filters[1]);
  const [price, setPrice] = React.useState(props.filters[2]);

  const handleChange = (event) => {
    setItemType(event.target.value);
  };
  const handleChange2 = (event) => {
    setItemType2(event.target.value);
  };
  const handleChange3 = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    if (productsData[0]) {
      if (itemType === "Type" && itemType2 === "Type") {
        setProducts(productsData);
        return;
      } else {
        let filteredProducts = [];
        productsData.forEach((product) => {
          console.log(price);
          if (
            product.price.raw >= Number(price.split(" ")[0]) &&
            product.price.raw <= Number(price.split(" ")[2])
          ) {
            if (itemType !== "Type" && itemType2 !== "Type") {
              if (
                ((product.categories[1] &&
                  product.categories[1].name === itemType) ||
                  product.categories[0].name === itemType) &&
                ((product.categories[1] &&
                  product.categories[1].name === itemType2) ||
                  product.categories[0].name === itemType2)
              )
                filteredProducts.push(product);
            } else if (itemType === "Type") {
              if (
                product.categories[0].name === itemType2 ||
                (product.categories[1] &&
                  product.categories[1].name === itemType2)
              )
                filteredProducts.push(product);
            } else {
              if (
                product.categories[0].name === itemType ||
                (product.categories[1] &&
                  product.categories[1].name === itemType)
              )
                filteredProducts.push(product);
            }
          }
        });
        if (!filteredProducts[0]) setProducts(["No data found"]);
        else setProducts(filteredProducts);
      }
    }
  }, [itemType, itemType2, price, productsData, setProducts]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-disabled-label">Items</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          value={itemType}
          onChange={handleChange}
          placeholder={"All"}
        >
          <MenuItem value={"Type"}>All</MenuItem>
          <MenuItem value={"Shirt"}>Shirt</MenuItem>
          <MenuItem value={"T-Shirt"}>T Shirt</MenuItem>
          <MenuItem value={"Shoes"}>Shoes</MenuItem>
          <MenuItem value={"Tops"}>Tops</MenuItem>
          <MenuItem value={"Pants"}>Pants</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-disabled-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          value={itemType2}
          onChange={handleChange2}
          placeholder={"All"}
        >
          <MenuItem value={"Type"}>All</MenuItem>
          <MenuItem value={"Men"}>Men</MenuItem>
          <MenuItem value={"Women"}>Women</MenuItem>
          <MenuItem value={"Home Decor"}>Decor</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-disabled-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          value={price}
          onChange={handleChange3}
          placeholder={"All"}
        >
          <MenuItem value={"0 - 1000"}>All</MenuItem>
          <MenuItem value={"10 - 50"}>10-50</MenuItem>
          <MenuItem value={"50 - 100"}>50-100</MenuItem>
          <MenuItem value={"100 - 150"}>100-150</MenuItem>
          <MenuItem value={"150 - 200"}>150-200</MenuItem>
          <MenuItem value={"200 - 1000"}>200 above</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
