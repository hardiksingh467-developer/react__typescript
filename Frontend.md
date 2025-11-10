# Critical Rendering Path
It is the steps that Browser needs to do in order to go from HTML, CSS and JavaScript to Pixels on the screen

The browser fetches the HTML file from the server,
The HTML file has links to CSS and JavaScript or even Fonts and based on those files it can go ahead and download those, parse them and start building 
In the case of CSS, the browser will build CSSOM (the reflection of the DOM, but with CSS); basically all the CSS you need to render the DOM
In the case of JavaScript and Fonts, the browser will build the DOM
The Browser has to do all this to build the render tree, only after the rendering tree is build, it can start the rendering process

Now the rendering process has four steps, we need to
first style
then layout
then paint
and finally composite to display pixels on the screen and all this has to happen until the user sees something
and that's what we call the first content-ful paint which is our first milestone in the rendering process

Many concepts in the FrontEnd that gets introduced later relates back to this

Whenever the browser sees a document such as HTML, it starts reading it from top to bottom line by line, one line at a time and interpret it. Whenever it finds a resource like a CSS file 
Whenever it files a resource such as link to CSS file or a JS file, it needs to go to the server download it and render it and finally we get to the body where the actual things are and we render our first element
The resources at the top we call them blocking, because in most cases they need to be downloaded, parsed and integrated before we can render our first element 

Whenever you are explaining something don't jump to framework talk like React, Vue, Angular, instead focus on the underlining principal like the Browser mechanic and use frameworks as an example of implementation

# Core Web Vitals
They are basically emperical metrics that measures how fast a page loads(CRP) and how fast it responds to input

https://www.youtube.com/watch?v=tHbrjCtNx7Q










# 14 Frontend System Design concepts
## Rendering strategies
Before we get started we need to decide how our application should render the content, so there are 5 main different strategies that we can use.

1. Static Site Generations, which pre builds the page at build time which has the fastest performance to load the page on the Client

2. Incremental Static Regeneration, which updates the static page on demand without a full rebuild

3. Server Side Rendering, which generates the page on each request which is more suitable for dynamic content

4. Client Side Rendering, which loads a blank page of HTML first then fetches data and compiles the JS code on client side 

5. Partial Pre Rendering, which mix the pre-rendered and dynamic content on the page

## Micro-FrontEnds
Let's say our codebase starts to frow and deployment starts to become riskier that's where the Micro Frontend Architecture comes in, which solves this by splitting the application into independent and deployable pieces and each Micro Frontend can have it's own rendering strategy, like static site generation for the product pages or server side rendering for checkouts and Client Side Renderings for chat communication,
and the key to this MicroFrontend application is module federation using webpack 5, which dynamically loads different micro-frontend

## Web Performance Metrics(Tools)
### Chrome Dev Tools: Performance Tab
This let us track the first content-ful paint and time to interactive, basically how long does it take before users see or interact with our application,
### React Dev Tools profiler 
To show which component re-render too often and where the slow parts of our application is,
### DataDog, Lighthouse, WebPage Test
To get detail breakdowns of the rendering performance across different devices and network speeds and once we find out areas we can improve, then we can be able to fix them and one of the biggest performance killer is unnecessary component re-renders

## Memoization Hooks
In React if a parent component re-render, all the childrens will re-render too unless we prevent it, so the way how we fix it is we can be able to use memoization hooks

import Child from "./Child.jsx";
const ChildMemo = React.memo(Child);

const Parent = () => {
    const value = useMemo(() => ({value}))

    return <ChildMemo value={value} />
}
