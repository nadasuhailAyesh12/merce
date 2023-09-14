import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../actions/productActions";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const categories = [
    "dresses",
    "skirts",
    "shirts",
    "pants",
    "watches",
    "bages",
    "barcelets",
    "necklaces",
    "hats",
    "rings",
    "belts",
  ];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm();

  const handleInputChange = (e) => {
    clearErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };

  const handleAvatar = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const productData = new FormData();
      productData.append("name", data.name);
      productData.append("price", data.price);
      productData.append("stock", data.stock);
      productData.append("seller", data.seller);
      productData.append("description", data.description);
      productData.append("category", data.category);
      images?.forEach((image) => productData.append("images", image));
      const message = await dispatch(createProduct(productData));
      toast.success(message);
    } catch (error) {
      toast.error(error);
    }
  });

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: 30 }}
      >
        <form
          className="border shadow p-3 rounded mt-10px"
          style={{ width: 450 }}
          noValidate
          encType="multipart/form-data"
          onSubmit={onSubmit}
        >
          <h1 className="text-center p-2" style={{ color: "#fc4c4e" }}>
            Add new product
          </h1>
          <div className="form-outline mb-2.5">
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Product name is required",
                maxLength: {
                  value: 100,
                  message: "name must be less than or equal 100",
                },
              })}
              className={
                errors.name
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="name"
              placeholder="Enter your product Name"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="name"></label>
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="form-outline mb-2.5">
            <div className="form-outline mb-2.5">
              <input
                type="text"
                id="price"
                {...register("price", {
                  required: "Product price is required",
                  validate: (value) =>
                    isNaN(value) ? "stock must be availd number" : true,
                  maxLength: {
                    value: 5,
                    message: "price must be less than 5 digits",
                  },
                })}
                className={
                  errors.price
                    ? "form-control form-control-lg is-invalid"
                    : "form-control form-control-lg"
                }
                name="price"
                placeholder="Enter your product price in dollars"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="price"></label>
              {errors.price && (
                <p className="text-danger">{errors.price.message}</p>
              )}
            </div>
            <div className="form-outline mb-2.5">
              <input
                type="text"
                id="stock"
                {...register("stock", {
                  required: "Stock is required",
                  validate: (value) =>
                    isNaN(value) ? "stock must be availd number" : true,
                })}
                className={
                  errors.stock
                    ? "form-control form-control-lg is-invalid"
                    : "form-control form-control-lg"
                }
                name="stock"
                placeholder="Enter your product stock"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="stock"></label>
              {errors.stock && (
                <p className="text-danger">{errors.stock.message}</p>
              )}
            </div>
            <div className="form-outline mb-2.5">
              <input
                type="text"
                id="seller"
                {...register("seller", {
                  required: "Seller is required",
                })}
                className={
                  errors.seller
                    ? "form-control form-control-lg is-invalid"
                    : "form-control form-control-lg"
                }
                name="seller"
                placeholder="Enter your product seller"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="stock"></label>
              {errors.stock && (
                <p className="text-danger">{errors.stock.message}</p>
              )}
            </div>
            <div className="form-outline mb-3">
              <select
                className="form-select form-control-lg"
                name="category"
                onChange={handleInputChange}
                {...register("category")}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="form-outline mb-2.5"></div>
            <textarea
              id="description"
              {...register("description", {
                required: "Product description is required",
              })}
              className={
                errors.description
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              placeholder="Enter your product description"
              name="description"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="description"></label>
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>

          <div
            className="custom-file d-flex align-items-center "
            style={{ marginLeft: 10 }}
          >
            <label className="form-label me-3">images</label>
            <input
              type="file"
              name="avatar"
              className="form-control mb-3"
              id="customFile"
              accept="images/*"
              multiple
              onChange={handleAvatar}
            />
          </div>

          <figure className="avatar d-flex ">
            {imagesPreview?.map((image) => (
              <img
                key={image}
                src={image}
                className="rounded-circle me-3"
                alt="Avatar Preview"
              />
            ))}
          </figure>

          <button
            className="btn btn-danger btn-lg btn-block btn w-100 rounded  my-1"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting" : "Create"}
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
