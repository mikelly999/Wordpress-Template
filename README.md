# WordPress AWS EC2 Docker Compose Template

## Introduction

This repository serves as a template for setting up a WordPress site hosted on AWS EC2 and containerized with Docker Compose. By using Docker Compose, you can easily manage your WordPress installation along with its dependencies in a containerized environment.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the Repository**:

    ```bash
    cd wordpress-aws-ec2-docker-compose
    ```

3. **Configuration**:

    - Rename `.env.example` to `.env` and configure the environment variables according to your setup.

4. **Start Containers**:

    ```bash
    docker-compose up -d
    ```

5. **Access WordPress**:

    Once the containers are up and running, you can access your WordPress site by navigating to `http://<your_ec2_instance_ip>:<wordpress_port>` in your web browser.

## Additional Information

- **WordPress Configuration**: You can customize your WordPress installation further by editing the `wp-config.php` file located in the `wordpress` directory.

- **Persistent Data**: The `mysql` service is configured to store data persistently. Ensure that you back up your database regularly to prevent data loss.

- **Security Considerations**: When hosting WordPress on AWS EC2, ensure that you follow security best practices, such as restricting access to your EC2 instance and keeping your software up to date.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
