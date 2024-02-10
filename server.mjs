// server.js
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "",
    },
  })
);

app.listen(3001);

