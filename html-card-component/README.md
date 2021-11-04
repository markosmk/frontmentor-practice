# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot-mk.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [live site URL](https://tranquil-sponge.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (without class names)
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I focus on the style file, looking for a way to arrive at an identical layout, both mobile (375px) and for desktop. This challenge allowed me to reinforce the use of background-image and the properties it contains, I started doing it with flex, then I incorporated grid, which for this project seemed very easy to implement

I did not use class, because i wanted to focus on the style file, that's why my html looks like this:

```html
  <main>
    <section>
      <header>
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer
          experience, and overall efficiency.
        </p>
      </header>
      <footer>
        <article>
          <b>10k+</b>
          <span>Companies</span>
        </article>
        <article>
          <b>314</b>
          <span>Templates</span>
        </article>
        <article>
          <b>12M+</b>
          <span>Queries</span>
        </article>
      </footer>
    </section>
    <aside>
      <div></div>
    </aside>
  </main>
```
