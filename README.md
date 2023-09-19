 # Screenzee
**An amazing app built by using React, Redux, Scss...!**
 
 Screenzy is the best movie app. Front-end technologies like React, Redux, and SCSS. By building this app I learned basic concepts of react js like jsx, components, props, state, component lifecycle, conditional rendering, lists, keys, and redux, I created more complex logics in javascript to make our react application can be made super interactive and beautiful. 

 # Steps:
**We Folllow**

- first Set app title with  image.
- Create basic styles in the index.scss file
- Create .env in root directory and store API token here.
. We used [TMDB](https://www.themoviedb.org/) for Apis.
- Create Utils folder and in this folder created api.js file for Apis boilerPlateToFetchApi's/basic structure/setbaseurl.
- Test the fetchApi function.
- Create store in src. For guidance visit -> [@redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start)
- To make the store available for our entire components we use Provider and add the app component to it.
- create homeSlice to make homePage main state. and use it in store.js
-  For debugging application's state changes install [Redux devTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) (Chrome Extension 
) if you don't have.
- now lets check the redux store , in App.js by using useDispatch hook store the data in store and use useSelector hook  to retrieve the data from store
- create pages and components folders in src and create all the folders inside pages and components. and import them in App.js and create routes 
- create the structure of heroBanner and its states also
- create useFetch Hook  to fetch Apis randomly and retrieve data.
- use useFetch Hook in HomeBanner to retrieve random background.
- Use [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) to inspect React components, edit props and state, and identify performance problems.
- create Img.jsx for lazy loading effect
- create contentWrapper
- create mixins.scss for same style
-style hero banner
- 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
