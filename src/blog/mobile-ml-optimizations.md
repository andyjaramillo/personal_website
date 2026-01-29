---
layout: layout.njk
title: Optimizations on Mobile Web with Palm Detection
tags: blog
image: "/assets/mobile-ml-palm-detection.jpg"
---

# Research Update: Mobile Performance & Intelligent Search

### 1. Optimizations on Mobile Web with Palm Detection
The challenge of bringing real-time Computer Vision (CV) to the mobile web isn't just about model accuracy; it’s about the brutal constraints of thermal throttling and memory overhead. While full-body pose estimation is powerful, **Palm Detection** serves as a high-frequency, low-latency entry point for gesture-based interaction.

In my recent work, I’ve been focusing on optimizing these pipelines by moving away from CPU-bound processing. By leveraging **WebGPU** and **WebAssembly (WASM)**, we can achieve near-native performance for palm localization directly in the browser. 

The strategy involves:
* **Decoupled Detection:** Running palm detection only when tracking confidence drops, significantly reducing the GPU duty cycle.
* **Quantized Inference:** Utilizing FP16 precision to cut memory bandwidth in half—a critical factor for mobile chipsets.
* **Coordinate Mapping:** Efficiently mapping normalized model outputs to the DOM without triggering expensive layout reflows.

These optimizations are paving the way for touchless interfaces that feel as responsive as physical inputs, even on mid-range mobile devices.