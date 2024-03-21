import React from "react";
import { defineConfig } from "vite";

export default defineConfig({
    root:'./client/src',
    base:'',
    build:{
        outDir:'../dist',
    },
    server:{
        port: 3000
    },
    optimizeDeps:{
        include:['react','react-dom','vite','@vitejs/plugin-react']
    },
})