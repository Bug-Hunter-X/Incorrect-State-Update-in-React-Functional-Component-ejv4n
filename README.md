# Incorrect State Update in React Functional Component
This repository demonstrates a common error in React functional components when updating state using the `useState` hook.  The provided `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Problem
The issue stems from directly modifying the state variable `count` inside the `handleClick` function.  React's `useState` hook requires a functional update to ensure proper reactivity.  Directly modifying `count` does not trigger a re-render and will not update the UI.

## Solution
The correct approach is to provide a function to `setCount` that receives the current state as an argument and returns the new state. This ensures that React correctly handles the update and re-renders the component.