---
layout: layout.njk
title: Applying Learning to Bidirectional Search
tags: blog
image: "/assets/bidirectional-search.jpg"
---

# Research Update: Mobile Performance & Intelligent Search

 
Classical pathfinding algorithms like A* are the gold standard for optimality, but in complex, high-dimensional state spaces—like those found in **Sokoban** or multi-joint robotic arm movement—the search tree expands exponentially. **Bidirectional Search** offers a solution by growing two frontiers: one from the *Start* and one from the *Goal*.

The "holy grail" of this approach is ensuring the two frontiers meet efficiently. I am currently exploring how to apply **Machine Learning to guide the heuristic ($h$) function** dynamically. Unlike static Euclidean heuristics, a learned heuristic can "sense" the topology of the environment, steering the forward and backward searches toward a common "merge node" much faster.

Key areas of exploration include:
* **Dynamic Weighting:** Adjusting the influence of the heuristic as the frontiers approach each other.
* **Symmetry Breaking:** Using learned patterns to prune branches that lead to deadlocks (crucial for Sokoban-style puzzles).
 