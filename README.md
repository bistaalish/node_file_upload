# Node.js File Upload App

This is a simple Node.js application for uploading files to the server. It allows users to upload multiple files simultaneously.

## Features

- Upload any type of file
- Supports multiple file uploads
- Stores uploaded files on the server

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- npm (Node Package Manager) installed
- Postman (optional) for testing the file upload functionality

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/bistaalish/node_file_upload.git
```

2. Navigate to the project directory:

```bash
cd node-file-upload-app
```

3. Install dependency
```bash
npm install
```

4. Start the server:

```bash
npm start
```

## Testing with Postman

You can also test the file upload functionality using Postman:

1.  Open Postman.
2.  Create a new POST request with the URL `http://localhost:3000/upload`.
3.  Set the request body to `form-data`.
4.  Add a key-value pair where the key matches the name attribute of the file input field in the HTML form, and the value is the file you want to upload.
5.  Click the "Send" button to upload the file.

## Using with curl

```bash
curl -X POST \
  -F "files=@/path/to/your/file1.jpg" \
  -F "files=@/path/to/your/file2.pdf" \
  http://localhost:3000/upload
```

## Configuration

You can configure the port number by setting the `PORT` environment variable in a `.env` file.
