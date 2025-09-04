# Mini Host

Mini Host is a lightweight, fast, and efficient file hosting service built with Node.js and Express. Designed with simplicity in mind, it adheres to the **KISS (Keep It Simple, Stupid) Philosophy**, ensuring ease of use while maintaining high performance. 

## Features

- **Fast and Lightweight** - Optimized for speed and efficiency.
- **Simple API** - Easily upload and retrieve files via HTTP requests.
- **UUID-based File Naming** - Prevents conflicts and ensures uniqueness.
- **Secure File Storage** - Stores files locally in the `uploads` directory.
- **Minimal Dependencies** - Uses Express and Multer for handling file uploads.

## Usage

### Uploading a File

Use `curl` to upload a file to Mini Host:

```sh
curl -F 'file=@hello.txt' https://mini-host.onrender.com/upload
```

The response will contain a URL where the uploaded file can be accessed.

### Retrieving a File

Once a file is uploaded, access it via:

```sh
https://mini-host.onrender.com/f/{file_id}
```

Replace `{file_id}` with the actual filename returned during the upload process.

## File Storage

Uploaded files are stored in the `uploads` directory within the project's root. Filenames are automatically generated using **UUIDs** to prevent collisions.

## Deployment

Mini Host is hosted at:  
**[https://mini-host.onrender.com](https://mini-host.onrender.com)**

For production environments, a **reverse proxy** like **Nginx** can be used to route traffic.

## License

This project is licensed under the **MIT License**. See [LICENSE](https://github.com/beautifulsh2/mini-host/blob/main/LICENSE) for details.

## Repository

Find the source code and contribute at:  
**[GitHub Repository](https://github.com/beautifulsh2/mini-host)**

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push the branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

## Contact

For issues and inquiries, submit a ticket in the GitHub repository or reach out via the discussion forum.