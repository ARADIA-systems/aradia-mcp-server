FROM node:22-alpine
RUN npm install -g mcp-remote
ENTRYPOINT ["mcp-remote", "https://aradia.com/api/a2a/mcp-endpoint.php"]
