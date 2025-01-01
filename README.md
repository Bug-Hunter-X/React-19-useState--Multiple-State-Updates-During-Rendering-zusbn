# React 19 useState Hook Bug: Multiple State Updates

This repository demonstrates a potential issue related to multiple updates to the `useState` hook within a single render cycle in React 19.  The bug highlights the importance of understanding how state updates are handled in React and how to avoid unexpected behavior.

## The Problem

The bug showcases a scenario where multiple `setCount` calls are made within the `handleClick` function. Depending on how the component renders this might lead to some state updates being dropped or unpredictable state values.

## The Solution

The solution focuses on ensuring that state updates are batched correctly. Although this issue usually is solved by default, in some edge cases additional care might be needed.

## How to run

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm start`
