# Calabrez Matrix App

The Calabrez Matrix is a task prioritization framework created by [Prof. Pedro Calabrez](https://www.pedrocalabrez.com.br/), based on [The Eisenhower Method/Matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method) time-management method.

## Motivation

Originally, as [described below, we draw a table and the matrix on paper, but that becomes hard to manage as I:

- **Have a large number of tasks to manage**
- **Organize my tasks primarily using digital tools**
- **Find the process of writing and drawing to be too slow**

## How to run this project locally

This app was created and is maintained using [React.js]() with [TypeScript]() and [Vite](https://vitejs.dev/) as the module bundler.

After cloning this repo, run:

```
npm install
```

```
npm run dev
```

to install the projects dependencies and initiate the development server at port `3000`, respectively.

# Appendix: How the Calabrez Matrix framework

_This decision framework actually has 2 matrices: one for tasks and one for responsibilities (events, obligations). The scope of this project is to create (at least at first) the tasks matrix_

## How it works

1. Draw a table with 4 columns:
   - Task id (a number starting at 1 and increasing for each task);
   - Task description (starting with a verb);
   - Urgency rating (from 0 to 10);
   - Importance rating (from 0 to 10);
2. Write down your tasks and assign an id to each one;
3. Go through each task and define how urgent it is (try to compare it with other ratings to accurately measure its rating);
4. Go through each task and define how important it is (again, compare it to other tasks ratings);
5. Draw a plane with two axes, the vertical one representing **importance** and the horizontal representing **urgency**. Each axis should be graduated from 0 to 10 (our ratings);
6. Draw two helper dashed lines to turn our plane into a matrix:
   - Draw a parallel line to the urgency axis located somewhere between ratings 5 and 6;
   - Do the same for the importance axis;
7. Go through each task and put its id in the corresponding position in the plane.

## Interpreting the resulting graph

![Calabrez Matrix](https://user-images.githubusercontent.com/14828276/159602923-385d48f5-1685-44be-b7d3-907a98047ecb.png)

- Tasks on the top left corner (corner 1) should be scheduled because they are important and should be done, but not right now.
- Tasks on the top right corner (corner 2) should be done immediately, in the order they appear: the farthest to the right and to the top, the higher its priority.
- Tasks on the bottom left corner (corner 3) should be discarded because they are not worth your time and energy.
- Tasks on the bottom right corner (corner 4) should be delegated to someone else.
