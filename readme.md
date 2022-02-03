# Template

This is a React, Vite, Tailwind template. It features filesystem based routing, similar(ish) to Next.js. It also formats and serves markdown files.

Linting is built in with eslint + Airbnb linting rules.

## Filesystem based routing
In `src/pages` you can add a new file and a route for the component in that file will automatically exist based on the file name.

In `src/pages/posts` you can add a markdown file and a route will automatically exist for that file and be served, formatted according to the template in `src/pages/posts/[post].jsx`

You can navigate to `localhost:3000/posts/demo` to see this

Thanks to [this page](https://omarelhawary.me/blog/file-based-routing-with-react-router) for inspiration on filesystem based routing.

## Deployment
This project deploys easily to modern hosts.  I have deployed succesfully to Firebase.  Build files are output to the `dist` directory.