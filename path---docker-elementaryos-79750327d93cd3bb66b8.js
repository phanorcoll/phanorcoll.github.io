webpackJsonp([0x77cd8195aed9],{435:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>A few weeks ago a I decided to try out elementaryOS, being a core fedora user, it was confusing at first, especially with the package manager, moving from dnf to apt-get / aptitude, I’m still getting the hang of it, for managing packages, etc.</h2>\n<p>Being a fullstack developer I’ve come to love <a href="http://docker.com/">docker</a>, so naturally it was one of the first things that I needed to install on elementaryOS, but I had some issues following the <a href="https://store.docker.com/editions/community/docker-ce-server-ubuntu">instructions at the Docker Store</a> and trying to apply them to elementaryOS, after doing some research I came to this solution, hopefully it’ll help others in my situation.</p>\n<p>Follow the initial instructions found here , but when you get to the part</p>\n<div class="gatsby-highlight" data-language="console">\n      <pre class="language-console"><code class="language-console">sudo add-apt-repository \\\n   &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable&quot;</code></pre>\n      </div>\n<p>replace <strong>$(lsb_release -cs)</strong> with <strong>xenial</strong></p>\n<div class="gatsby-highlight" data-language="console">\n      <pre class="language-console"><code class="language-console">sudo add-apt-repository \\\n   &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   xenial \\\n   stable&quot;</code></pre>\n      </div>\n<p>and continue following the documentation.</p>\n<p>PS. if you want to run docker without the SUDO command, follow these <a href="https://docs.docker.com/engine/installation/linux/linux-postinstall/">instructions</a></p>\n<p>Hope this helps.</p>',frontmatter:{title:"Docker and elementaryOs Loki",date:"May 04, 2018",path:"/docker-elementaryos",tags:["docker","containers","linux","elementaryOs"],excerpt:"A few weeks ago a I decided to try out elementaryOS, being a core fedora user, it was confusing at first, especially with the package manager, moving from dnf to apt-get / aptitude, I’m still getting the hang of it, for managing packages, etc."}},site:{siteMetadata:{title:"Phanor Coll - Fullstack Developer",author:"Phanor Coll",siteUrl:"http://www.phanorcoll.com",disqusShortname:"phanorcoll"}}},pathContext:{prev:{html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nunc sit amet nisi porta feugiat. Fusce lorem augue,\ntempor quis\n<a href="#" class="a-animation">condimentum</a> ut, efficitur sed justo. In hac habitasse platea dictumst. Etiam semper lobortis consectetur.\nMorbi dolor magna, tristique vitae dui eu, vestibulum suscipit ipsum. Pellentesque feugiat quis tellus pretium\ntincidunt. Quisque gravida est non magna congue rhoncus. Proin id nulla lectus. Sed in turpis et erat dapibus\nblandit ac at felis. Fusce interdum, leo nec luctus convallis, magna eros molestie ipsum, quis auctor tortor\ndui in velit. Aenean\n<a href="#" class="a-animation">condimentum</a>, enim at volutpat maximus, libero purus vestibulum massa, ac luctus tortor massa hendrerit\nnibh. Cras quis tristique elit. Donec vel laoreet mi. Etiam scelerisque laoreet erat, et pharetra mi laoreet\na. Donec commodo mauris a faucibus placerat. In augue elit, consequat non auctor sit amet, volutpat quis\nnisi.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>blandit ac at felis. Fusce interdum, leo nec luctus convallis, magna eros molestie ipsum, quis auctor tortor\ndui in velit. Aenean\n<a href="#" class="a-animation">condimentum</a>, enim at volutpat maximus, libero purus vestibulum massa, ac luctus tortor massa hendrerit\nnibh. Cras quis tristique elit. Donec vel laoreet mi. Etiam scelerisque laoreet erat, et pharetra mi laoreet\na. Donec commodo mauris a faucibus placerat. In augue elit, consequat non auctor sit amet, volutpat quis\nnisi.</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="gatsby-highlight-code-line"><span class="token comment">// In your gatsby-config.js</span>\n</span>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-transformer-remark`</span></span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n</span>        <span class="token template-string"><span class="token string">`gatsby-remark-prismjs`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>',id:"/home/development/projects/reactjs/phanorcoll.com/gatsby-blog/src/pages/blog/2018-06-18-migrating-to-gatsbyjs/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-06-18",path:"/migrating-to-gatsby",title:"Migrating to Gatsbyjs",excerpt:"I decided to migrate my blog to Gatsbyjs mainly because I'm a reactjs fan but my surprise was how blazing fast gatsbyjs was",tags:["reactjs","gatsbyjs","ssg","javascript"],featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAC70lEQVQ4y62TWUhUcRjF72sELRT00EMQFbZgESgRRBFJK+VDC2WmGZRNo1O2h2m2gO1ZLjiilZJIZWqjkK2GOpmaTOo4zjTjbI7OOM24QAVB/Prfq2lJvfVw7j3fufy//8d3z5Fc5s/8T0jyw9npx2EahsxdZj+/dGdn3298THf8Q5ecpuGi1zGAzzWIxxocbewWusc2IOo+hbstgdHDHms/dlkXWven4Kgu9XT1K0V9VSc1pe206Z14nQPKR5vRi0Fvptf5BbPRp9TK4Q4fbY2f+GwfwvqxG1OLQ7lAmfDDaxu3j+rQnq2mIO0FGUk6Ht2uxev5Rk12IfqYWKqv5vBelcCrtCv4PN9JvZjB3IgtJKVcZU30QVZui8HYZMMtLpOuHSrj8Z16peGNhHJKs/TcTCyj8n4r9UWlWCM3YNseiWvtCnQplxn0/mBbwhmkKdOZE5fEpNAwpi4Op6G2naD7K1LxtbdkHHnK/uWZJEZo0Qgc3ZhPWlQx5g4/DepEvm9ZTfP2rbTUtJKansm8yCiWaM6xIFpFaPwpQvZq2BAdj/6NAemmpoIn2e84GXmPI+vyyDxeScH5l1zcW4KxsRdjbRvP4/bToqultbmLGctWMWHeIkJ2HSBUnUzIHjWz1mxGmjmb9Ot5SHcvvKRC+56HGXUc21RAys4H4ue0kXmiClOjG0/XIFZLEJdYeo/Y0b38R4TFqAmJSWB+1EHm71YpTU9euIXF4EKS91anM1Ge26DsT55Om1xNYfob5W87OoQ1ZK8JizjEe8j9jR3qU0iTpzE3VsPE0HAmLVyKocGCX7hBel5s4EZiOVliouvqMvJSqslNfoZd2MRtGTOuDNl3PmGVXG0J62PV5GQVoTp9iX2Hk7G2dgurBZC8wtDt71xUFjQpE7590k63NSAsEPgjAb+iJXOvWEOfrZ+A6yt+mQu4LcPmluRUeGxBJSUy5AvGx2l8xOTkyLALg9tH+GhSxrLcNwL/Xyf7V/Px/CdlUnzYYSgnDQAAAABJRU5ErkJggg==",aspectRatio:1.4789156626506024,sizes:"(max-width: 491px) 100vw, 491px",src:"/static/gatsby-reactjs-7b3254a063046b530371a5b5013b0b1f-1c558.png",srcSet:"/static/gatsby-reactjs-7b3254a063046b530371a5b5013b0b1f-e7e2a.png 123w,\n/static/gatsby-reactjs-7b3254a063046b530371a5b5013b0b1f-fed6a.png 246w,\n/static/gatsby-reactjs-7b3254a063046b530371a5b5013b0b1f-1c558.png 491w"}}}}},next:{html:'<h2>So, for the past few years I’ve been diving into different kinds of projects, from converting PSDs designs into HTML(5) websites using CSS(3) and my favorite tool SASS or Bootstrap 3, to coding backend modules with Go or PHP(Laravel) and creating clusters for Neo4j with Docker containers, its been one heck of a ride, but all of these projects have one thing in common, Reactjs.</h2>\n<p>At first I started modifying existing components, getting used to the idea of component based websites, but as the projects evolved, I had to create new websites from scratch, only having the PSD design or creating new components to consume an API. So here is where my journey really begins.</p>\n<p>So many tutorials out there, from the official documentation to specialized courses, I had to decide where to start. Nothing better than to start with the official doc, life was looking good, but then the confussion began. When looking at other tutorials I noticed that javascript was written differently, here comes the versioning of javascript, es5, es6 and not to mention the compilers that I needed to configure when working with Reactjs. So I took a step back and started learning webpack since its the backbone for every Reactjs project that I’ve seen and/or worked on. How to configure SASS, resource loading, optimizing images and of course the compiler so I can use the new version of javascript (which I love. I was always forgetting to use .bind but the arrow functions really solved that).</p>\n<p>After getting the hang of webpack , and stablishing a basic starting point for every Reactjs project (I just fork that from my repo and I know I have a working starting point), I moved to reactjs itself, playing around with it, seeing how it worked, what can I do with it, the use of the virtual dom. I though life was good again, but then here comes Redux, although not made only for reactjs, it really helped me managed application state, at first it was confusing, jumping from handling the states within reactjs to using a (middleware) for it, but boy, I have to say, it’s really handy for creating clean and understandable code. All of this I had to learn it while working on projects and applying that new knowledge to it, I think its the best way to learn, under pressure!!! and on live projects(wouldn’t you agree?) :)</p>\n<p>My journey with Reactjs or any related technology is far from over, as the projects grow in complexity and its popularity keeps increasing, I’ll learn even more.</p>\n<p>So to recap my steps for leaning and working with <strong>Reactjs</strong></p>\n<ul>\n<li>Learn webpack</li>\n<li>Learn Reactjs</li>\n<li>Create a working initial point of modules and .conf files to save time</li>\n<li>Play around and keep creating with Reactjs</li>\n<li>Consume APIs (<a href="https://github.com/toddmotto/public-apis">here</a> is a collective list of public JSON APIs you can use to practice or even use on your projects)</li>\n</ul>',id:"/home/development/projects/reactjs/phanorcoll.com/gatsby-blog/src/pages/blog/2016-10-20-reactjs-journey/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2016-10-20",path:"/journey-reactjs",title:"My Journey with Reactjs",excerpt:"So, for the past few years I’ve been diving into different kinds of projects, from converting PSDs designs into HTML(5) websites using CSS(3) and my favorite tool SASS or Bootstrap 3, to coding backend modules with Go or PHP(Laravel) and creating clusters for Neo4j with Docker containers",tags:["reactjs","front-end","es6"],featuredImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABzYUxQGL/xAAZEAACAwEAAAAAAAAAAAAAAAAQEgERISL/2gAIAQEAAQUCXlZF4P/EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/Aaf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwGH/8QAFRABAQAAAAAAAAAAAAAAAAAAESD/2gAIAQEABj8Ca//EABkQAQADAQEAAAAAAAAAAAAAAAEAESEQQf/aAAgBAQABPyHckvCJTBYvIvP/2gAMAwEAAgADAAAAEPMv/8QAFhEBAQEAAAAAAAAAAAAAAAAAARBB/9oACAEDAQE/EA2z/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QWP/EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQWGR/9oACAEBAAE/EBcXDhiWJnSTKQupcXeIF1sUXv7P/9k=",aspectRatio:1.4789156626506024,sizes:"(max-width: 491px) 100vw, 491px",src:"/static/reactjs-journey-79d64543f853c3fcdb0830cb8fe3c24a-97c09.jpeg",srcSet:"/static/reactjs-journey-79d64543f853c3fcdb0830cb8fe3c24a-300d9.jpeg 123w,\n/static/reactjs-journey-79d64543f853c3fcdb0830cb8fe3c24a-ed0a2.jpeg 246w,\n/static/reactjs-journey-79d64543f853c3fcdb0830cb8fe3c24a-97c09.jpeg 491w"}}}}}}}}});
//# sourceMappingURL=path---docker-elementaryos-79750327d93cd3bb66b8.js.map