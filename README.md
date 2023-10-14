# E-commerce Backend

## Description

This is the backend component of the E-commerce project, responsible for managing products, including adding, retrieving, updating, and performing soft deletes.

## Setup

1. Create a folder named "E-commerce" to organize your project.

2. Inside the "E-commerce" folder, create a "Backend" folder for your backend code.

## Functionality

The backend provides the following functionality:

### Add a Product

- **Endpoint**: `/api/products/add`
- **Method**: POST
- **Description**: Adds a new product to the database.
- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 29.99,
    "imageUrl": "https://example.com/product.jpg",
    "discountRate": 10
  }
# Backend API Documentation

## Get All Products

- **Endpoint**: `/api/products`
- **Method**: `GET`
- **Description**: Retrieves a list of all products in the database.
- **Response**: Returns a list of products.

## Get a Specific Product

- **Endpoint**: `/api/products/:productId`
- **Method**: `GET`
- **Description**: Retrieves the details of a specific product.
- **Response**: Returns the product with the specified `productId`.

## Update a Product

- **Endpoint**: `/api/products/update/:productId`
- **Method**: `PUT`
- **Description**: Updates the details of a specific product.
- **Request Body**: The same as the "Add a Product" request body.
- **Response**: Returns the updated product.

## Soft Delete a Product

- **Endpoint**: `/api/products/delete/:productId`
- **Method**: `DELETE`
- **Description**: Marks a product as soft-deleted in the database.
- **Response**: Returns a confirmation of the deletion.

## Adding and Updating Products

For adding and updating products, use a single procedure to handle both operations. You can decide whether to update an existing product or add a new one based on whether the `productId` is provided in the request.

## API Endpoints

Here's a summary of the available API endpoints:

- **Add a Product**:
  - **Endpoint**: `POST /api/products/add`

- **Get All Products**:
  - **Endpoint**: `GET /api/products`

- **Get a Specific Product**:
  - **Endpoint**: `GET /api/products/:productId`

- **Update a Product**:
  - **Endpoint**: `PUT /api/products/update/:productId`

- **Soft Delete a Product**:
  - **Endpoint**: `DELETE /api/products/delete/:productId`

## Dependencies

Make sure to install any required dependencies for your backend, such as a database system (e.g., PostgreSQL, MySQL) and web framework (e.g., Express.js).

## Usage

Provide clear instructions on how to run and test your backend code. Include any environment variables or configurations required.

This README outlines the structure and functionality of the backend for your e-commerce project. You should replace the placeholders with actual code, routes, and documentation specific to your project.
