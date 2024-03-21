import React from "react";
import { defineConfig } from "vite";

export default defineConfig({
    root:'./client/src',
    base:'',
    build:{
        outDir:'../dist',
    },
    server:{
        port: 5173
    },
    optimizeDeps:{
        include:['react','react-dom','vite','@vitejs/plugin-react']
    },
})